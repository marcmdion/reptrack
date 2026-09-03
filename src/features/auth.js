import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  sendPasswordResetEmail,
} from 'firebase/auth';
import { auth } from '../lib/firebase.js';
import { state } from '../lib/state.js';
import { showToast } from '../lib/utils.js';

const authScreen = document.getElementById('auth-screen');
const emailInput = document.getElementById('auth-email');
const passwordInput = document.getElementById('auth-password');
const loginBtn = document.getElementById('login-btn');
const registerBtn = document.getElementById('register-btn');
const forgotBtn = document.getElementById('forgot-password-btn');
const authLoading = document.getElementById('auth-loading');
const authError = document.getElementById('auth-error');

function showAuthError(msg) {
  authError.textContent = msg;
  authError.classList.remove('hidden');
}

function getAuthErrorMessage(error, fallback) {
  const code = error?.code || '';
  if (code.includes('referer') || code.includes('blocked')) {
    return 'This site URL is not allowed for Firebase. Add it to your API key HTTP referrers in Google Cloud Console.';
  }
  if (code === 'auth/network-request-failed') {
    return 'Network error reaching Firebase. Check connection and API key restrictions.';
  }
  if (code === 'auth/invalid-email') return 'Enter a valid email address.';
  if (code === 'auth/user-not-found' || code === 'auth/wrong-password' || code === 'auth/invalid-credential') {
    return 'Invalid email or password.';
  }
  if (code === 'auth/email-already-in-use') return 'An account with this email already exists.';
  if (code === 'auth/weak-password') return 'Password must be at least 6 characters.';
  if (code === 'auth/too-many-requests') return 'Too many attempts. Try again later.';
  return fallback;
}

function toggleAuthLoading(isLoading) {
  if (isLoading) {
    authLoading.classList.remove('hidden');
    loginBtn.disabled = true;
    registerBtn.disabled = true;
    if (forgotBtn) forgotBtn.disabled = true;
    authError.classList.add('hidden');
  } else {
    authLoading.classList.add('hidden');
    loginBtn.disabled = false;
    registerBtn.disabled = false;
    if (forgotBtn) forgotBtn.disabled = false;
  }
}

export function initAuth(onUserReady) {
  loginBtn.addEventListener('click', async () => {
    const email = emailInput.value.trim();
    const password = passwordInput.value;
    if (!email || !password) {
      showAuthError('Enter email and password');
      return;
    }
    toggleAuthLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error('Login failed:', error);
      showAuthError(getAuthErrorMessage(error, 'Invalid credentials.'));
      toggleAuthLoading(false);
    }
  });

  registerBtn.addEventListener('click', async () => {
    const email = emailInput.value.trim();
    const password = passwordInput.value;
    if (!email || !password) {
      showAuthError('Enter email and password');
      return;
    }
    if (password.length < 6) {
      showAuthError('Min 6 characters');
      return;
    }
    toggleAuthLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error('Registration failed:', error);
      showAuthError(getAuthErrorMessage(error, 'Registration failed.'));
      toggleAuthLoading(false);
    }
  });

  forgotBtn?.addEventListener('click', async () => {
    const email = emailInput.value.trim();
    if (!email) {
      showAuthError('Enter your email above, then tap Forgot password');
      return;
    }
    toggleAuthLoading(true);
    try {
      await sendPasswordResetEmail(auth, email);
      showToast('Password reset email sent');
      authError.classList.add('hidden');
    } catch (error) {
      showAuthError(getAuthErrorMessage(error, 'Could not send reset email.'));
    } finally {
      toggleAuthLoading(false);
    }
  });

  onAuthStateChanged(auth, (user) => {
    if (user) {
      state.currentUser = user;
      authScreen.classList.add('opacity-0', 'pointer-events-none');
      document.getElementById('user-email').textContent = user.email.split('@')[0];
      document.getElementById('user-info').classList.remove('hidden');
      emailInput.value = '';
      passwordInput.value = '';
      toggleAuthLoading(false);

      const now = new Date();
      const localDate = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
      document.getElementById('input-date').value = localDate;

      onUserReady(user);
    } else {
      state.currentUser = null;
      state.chartDefaultApplied = false;
      authScreen.classList.remove('opacity-0', 'pointer-events-none');
      document.getElementById('user-info').classList.add('hidden');
      toggleAuthLoading(false);
      state.unsubscribes.forEach((unsub) => unsub());
      state.unsubscribes = [];
    }
  });

  document.getElementById('logout-btn').addEventListener('click', () => signOut(auth));
}
