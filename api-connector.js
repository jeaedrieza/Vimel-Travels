'use strict';

/* ==========================================================================
   1. CONFIGURATION
   ========================================================================== */

const API_BASE = '/api';  // Adjust if hosted in a subfolder: '/vimel-travels/api'

// Track CSRF token (received from login response, used for all POST requests)
let csrfToken = '';

// Track auth state
let currentUser = null;


/* ==========================================================================
   2. CORE FETCH WRAPPER — VimelAPI
   ========================================================================== */

const VimelAPI = {

  /**
   * Generic GET request
   */
  async get(endpoint, params = {}) {
    const url = new URL(API_BASE + endpoint, window.location.origin);
    Object.entries(params).forEach(([k, v]) => {
      if (v !== null && v !== undefined) url.searchParams.set(k, v);
    });

    try {
      const res = await fetch(url.toString(), {
        method: 'GET',
        credentials: 'include',  // Send cookies (session)
        headers: { 'Accept': 'application/json' }
      });
      return await res.json();
    } catch (err) {
      console.warn('[VimelAPI] GET failed:', endpoint, err);
      return { success: false, error: 'Network error. Backend may be offline.' };
    }
  },

  /**
   * Generic POST request (with CSRF token)
   */
  async post(endpoint, body = {}) {
    try {
      const res = await fetch(API_BASE + endpoint, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'X-CSRF-Token': csrfToken
        },
        body: JSON.stringify(body)
      });
      return await res.json();
    } catch (err) {
      console.warn('[VimelAPI] POST failed:', endpoint, err);
      return { success: false, error: 'Network error. Backend may be offline.' };
    }
  },

  /* ── Auth endpoints ──────────────────────────────────── */

  async login(email, password) {
    return this.post('/auth/login', { email, password });
  },

  async register(data) {
    return this.post('/auth/register', data);
  },

  async logout() {
    return this.post('/auth/logout');
  },

  /* ── Data endpoints ──────────────────────────────────── */

  async getDestinations(params = {}) {
    return this.get('/destinations/list', params);
  },

  async searchDestinations(query) {
    return this.get('/destinations/search', { q: query });
  },

  async getVehicles(params = {}) {
    return this.get('/vehicles/list', params);
  },

  async getHotels(params = {}) {
    return this.get('/hotels/list', params);
  },

  /* ── Booking endpoints ───────────────────────────────── */

  async createBooking(destinationId, notes = '') {
    return this.post('/bookings/create', { destination_id: destinationId, notes });
  },

  async getMyBookings(status = null) {
    return this.get('/bookings/list', { status });
  },

  async cancelBooking(bookingId) {
    return this.post('/bookings/cancel', { booking_id: bookingId });
  },

  /* ── Ticket endpoints ────────────────────────────────── */

  async generateTicket(bookingId, passengerName, flightCode, seat, gate) {
    return this.post('/tickets/generate', {
      booking_id: bookingId,
      passenger_name: passengerName,
      flight_code: flightCode,
      seat, gate
    });
  },

  async verifyTicket(token) {
    return this.get('/tickets/verify', { token });
  },

  /* ── Review endpoints ────────────────────────────────── */

  async createReview(targetType, targetId, rating, comment) {
    return this.post('/reviews/create', { target_type: targetType, target_id: targetId, rating, comment });
  },

  /* ── Chat endpoints ──────────────────────────────────── */

  async sendChatMessage(receiverId, message, translateLang = null) {
    return this.post('/chat/send', { receiver_id: receiverId, message, translate_lang: translateLang });
  },

  async getChatHistory(withUserId) {
    return this.get('/chat/history', { with_user_id: withUserId });
  }
};


/* ==========================================================================
   3. AUTH STATE MANAGEMENT — Update UI when logged in/out
   ========================================================================== */

/**
 * Updates the navbar and buttons based on auth state
 */
function updateAuthUI() {
  const navAuth = document.querySelector('.nav-auth');
  const mobileAuth = document.querySelector('.mobile-auth');

  if (!navAuth) return;

  if (currentUser) {
    // ── Logged in state ──
    const userHTML = `
      <span style="font-family:var(--font-heading);font-weight:600;font-size:0.9rem;color:var(--text-dark);">
        <i class="fas fa-user-circle" style="color:var(--primary);margin-right:4px;"></i>
        Hi, ${currentUser.first_name}!
      </span>
      <button class="btn btn-ghost" onclick="handleLogout()">Log Out</button>
    `;
    navAuth.innerHTML = userHTML;

    if (mobileAuth) {
      mobileAuth.innerHTML = `
        <span style="font-weight:600;padding:8px 0;">Hi, ${currentUser.first_name}!</span>
        <button class="btn btn-ghost btn-block" onclick="handleLogout(); closeMobileMenu();">Log Out</button>
      `;
    }

    // Change all "Book Now" buttons to actually work
    document.querySelectorAll('.dest-book-btn, .driver-card .btn-accent, .hotel-card .btn-accent').forEach(btn => {
      btn.removeAttribute('onclick');
      btn.addEventListener('click', function() {
        showToast('Booking feature coming soon! Your account is ready. ✈️', 'info');
      });
    });

  } else {
    // ── Logged out state ──
    navAuth.innerHTML = `
      <button class="btn btn-ghost" onclick="openModal('loginModal')">Log In</button>
      <button class="btn btn-primary" onclick="openModal('registerModal')">Sign Up</button>
    `;

    if (mobileAuth) {
      mobileAuth.innerHTML = `
        <button class="btn btn-ghost btn-block" onclick="openModal('loginModal'); closeMobileMenu();">Log In</button>
        <button class="btn btn-primary btn-block" onclick="openModal('registerModal'); closeMobileMenu();">Sign Up</button>
      `;
    }
  }
}


/* ==========================================================================
   4. OVERRIDE LOGIN HANDLER — Connect to PHP backend
   ========================================================================== */

window.handleLogin = async function(event) {
  event.preventDefault();

  const email    = document.getElementById('loginEmail')?.value.trim();
  const password = document.getElementById('loginPassword')?.value;

  if (!email || !password) {
    showToast('Please fill in all fields.', 'error');
    return;
  }

  // Show loading state
  const submitBtn = event.target.querySelector('button[type="submit"]');
  const originalText = submitBtn.innerHTML;
  submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Logging in...';
  submitBtn.disabled = true;

  const result = await VimelAPI.login(email, password);

  submitBtn.innerHTML = originalText;
  submitBtn.disabled = false;

  if (result.success) {
    // Store CSRF token from login response
    csrfToken = result.data.csrf_token || '';
    currentUser = result.data.user;

    showToast(`Welcome back, ${currentUser.first_name}! ✈️`, 'success');
    closeModal('loginModal');
    updateAuthUI();
    event.target.reset();
  } else {
    // If backend is offline, simulate login for demo purposes
    if (result.error && result.error.includes('Network error')) {
      showToast('Backend offline — running in demo mode. Welcome! ✈️', 'info');
      currentUser = { id: 0, first_name: 'Demo', last_name: 'User', email: email };
      closeModal('loginModal');
      updateAuthUI();
      event.target.reset();
    } else {
      showToast(result.error || 'Login failed. Please try again.', 'error');
    }
  }
};


/* ==========================================================================
   5. OVERRIDE REGISTER HANDLER — Connect to PHP backend
   ========================================================================== */

window.handleRegister = async function(event) {
  event.preventDefault();

  const firstName = document.getElementById('regFirstName')?.value.trim();
  const lastName  = document.getElementById('regLastName')?.value.trim();
  const email     = document.getElementById('regEmail')?.value.trim();
  const phone     = document.getElementById('regPhone')?.value.trim();
  const password  = document.getElementById('regPassword')?.value;
  const confirm   = document.getElementById('regConfirmPassword')?.value;

  if (!firstName || !lastName || !email || !password || !confirm) {
    showToast('Please fill in all required fields.', 'error');
    return;
  }

  if (password.length < 8) {
    showToast('Password must be at least 8 characters.', 'error');
    return;
  }

  if (password !== confirm) {
    showToast('Passwords do not match.', 'error');
    return;
  }

  // Show loading state
  const submitBtn = event.target.querySelector('button[type="submit"]');
  const originalText = submitBtn.innerHTML;
  submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Creating account...';
  submitBtn.disabled = true;

  const result = await VimelAPI.register({
    first_name: firstName,
    last_name: lastName,
    email, phone, password
  });

  submitBtn.innerHTML = originalText;
  submitBtn.disabled = false;

  if (result.success) {
    currentUser = result.data.user;
    showToast(`Welcome to Vimel Travels, ${firstName}! 🎉`, 'success');
    closeModal('registerModal');
    updateAuthUI();
    event.target.reset();
  } else {
    if (result.error && result.error.includes('Network error')) {
      showToast('Backend offline — running in demo mode. Welcome! 🎉', 'info');
      currentUser = { id: 0, first_name: firstName, last_name: lastName, email };
      closeModal('registerModal');
      updateAuthUI();
      event.target.reset();
    } else {
      showToast(result.error || 'Registration failed. Please try again.', 'error');
    }
  }
};


/* ==========================================================================
   6. LOGOUT HANDLER
   ========================================================================== */

window.handleLogout = async function() {
  await VimelAPI.logout();
  currentUser = null;
  csrfToken = '';
  showToast('Logged out successfully. See you soon! 👋', 'success');
  updateAuthUI();
};


/* ==========================================================================
   7. CONTACT FORM — Connect to backend (or mailto fallback)
   ========================================================================== */

(function overrideContactForm() {
  // Wait for DOM
  document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    // Remove any existing listeners by cloning
    const newForm = form.cloneNode(true);
    form.parentNode.replaceChild(newForm, form);

    newForm.addEventListener('submit', async function(e) {
      e.preventDefault();

      const name    = document.getElementById('contactName')?.value.trim();
      const email   = document.getElementById('contactEmail')?.value.trim();
      const subject = document.getElementById('contactSubject')?.value;
      const message = document.getElementById('contactMessage')?.value.trim();

      if (!name || !email || !message) {
        showToast('Please fill in all required fields.', 'error');
        return;
      }

      // For now, show success (in production, POST to a /api/contact endpoint)
      showToast(`Thanks, ${name}! We'll get back to you within 24 hours. ✈️`, 'success');
      newForm.reset();
    });
  });
})();


/* ==========================================================================
   8. SEARCH — Connect to backend search API with fallback
   ========================================================================== */

(function overrideSearch() {
  document.addEventListener('DOMContentLoaded', function() {
    const searchBtn = document.querySelector('.btn-search');
    if (!searchBtn) return;

    searchBtn.addEventListener('click', async function() {
      const query = document.getElementById('searchInput')?.value.trim();
      if (!query) {
        showToast('Please enter a destination to search.', 'info');
        return;
      }

      // Try backend search first
      const result = await VimelAPI.searchDestinations(query);

      if (result.success && result.data.results.length > 0) {
        showToast(`Found ${result.data.results.length} destinations for "${query}"! 🌍`, 'success');
        // Scroll to recommendations section
        document.getElementById('recommendations')?.scrollIntoView({ behavior: 'smooth' });
      } else {
        // Fallback: filter from sample data
        const matching = destinations.filter(d =>
          d.name.toLowerCase().includes(query.toLowerCase()) ||
          d.country.toLowerCase().includes(query.toLowerCase())
        );

        if (matching.length > 0) {
          showToast(`Found ${matching.length} matching destinations! 🌍`, 'success');
          document.getElementById('recommendations')?.scrollIntoView({ behavior: 'smooth' });
        } else {
          showToast(`No destinations found for "${query}". Try another search!`, 'info');
        }
      }
    });
  });
})();


/* ==========================================================================
   9. BOOKING FLOW — Make "Book Now" buttons functional
   ========================================================================== */

/**
 * Handle booking when user clicks "Book Now" on a destination card
 */
window.handleBookDestination = async function(destId, destName) {
  if (!currentUser) {
    openModal('loginModal');
    showToast('Please log in to book a destination.', 'info');
    return;
  }

  if (currentUser.id === 0) {
    // Demo mode
    showToast(`Demo booking created for ${destName}! In production this saves to database. ✈️`, 'success');
    return;
  }

  const result = await VimelAPI.createBooking(destId);

  if (result.success) {
    showToast(`Booking confirmed for ${destName}! Ref: ${result.data.booking.booking_ref} 🎉`, 'success');
  } else {
    showToast(result.error || 'Booking failed. Please try again.', 'error');
  }
};


/* ==========================================================================
   10. OVERRIDE DESTINATION CARD RENDER — Add real booking onclick
   ========================================================================== */

(function patchDestinationBookButtons() {
  // Store original render function
  const originalRenderDestinations = window.renderDestinations || renderDestinations;

  // Patch: after rendering, update Book Now buttons with real booking handler
  window.renderDestinations = function() {
    originalRenderDestinations();

    // After a short delay (to ensure DOM is updated), patch buttons
    setTimeout(() => {
      document.querySelectorAll('.dest-card').forEach(card => {
        const id = card.dataset.id;
        const name = card.querySelector('.dest-name')?.textContent || '';
        const btn = card.querySelector('.dest-book-btn');
        if (btn && id) {
          btn.setAttribute('onclick', `handleBookDestination(${id}, '${name.replace(/'/g, "\\'")}')`);
        }
      });
    }, 100);
  };
})();


/* ==========================================================================
   11. BACKEND HEALTH CHECK — Show connection status on load
   ========================================================================== */

(function checkBackendHealth() {
  document.addEventListener('DOMContentLoaded', async function() {
    try {
      const res = await fetch(API_BASE + '/destinations/list?limit=1', {
        method: 'GET',
        credentials: 'include'
      });
      const data = await res.json();

      if (data.success) {
        console.log('%c✓ Vimel Backend — Connected', 'color:#10b981;font-weight:bold;font-size:12px;');
        console.log(`  ${data.data.total || 0} destinations in database`);
      } else {
        console.log('%c⚠ Vimel Backend — Connected but returned error', 'color:#f59e0b;font-weight:bold;font-size:12px;');
        console.log('  Running with sample data fallback');
      }
    } catch (err) {
      console.log('%c✕ Vimel Backend — Offline', 'color:#ef4444;font-weight:bold;font-size:12px;');
      console.log('  Running with sample data (frontend-only mode)');
      console.log('  To enable backend: set up XAMPP + MySQL, see setup guide');
    }
  });
})();


/* ==========================================================================
   12. ENV LOADER — Load .env variables for frontend config
   ========================================================================== */

// Note: In production, the API_BASE should be set by your build tool
// or injected via a <script> tag from the server. For local dev, the
// default '/api' path works with the .htaccess rewrite rules.

console.log('%c✈ Vimel Travels — api-connector.js loaded', 'color:#0CBABA;font-weight:bold;font-size:13px;');
