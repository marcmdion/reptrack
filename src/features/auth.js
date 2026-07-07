import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';
import { auth } from '../lib/firebase.js';
import { state } from '../lib/state.js';

const authScreen = document.getElementById('auth-screen');
const emailInput = document.getElementById('auth-email');
const passwordInput = document.getElementById('auth-password');
const loginBtn = document.getElementById('login-btn');
const registerBtn = document.getElementById('register-btn');
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
  return fallback;
}

function toggleAuthLoading(isLoading) {
  if (isLoading) {
    authLoading.classList.remove('hidden');
    loginBtn.disabled = true;
    registerBtn.disabled = true;
    authError.classList.add('hidden');
  } else {
    authLoading.classList.add('hidden');
    loginBtn.disabled = false;
    registerBtn.disabled = false;
  }
}

export function initAuth(onUserReady) {
  loginBtn.addEventListener('click', async () => {
    const email = emailInput.value;
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
    const email = emailInput.value;
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
      authScreen.classList.remove('opacity-0', 'pointer-events-none');
      document.getElementById('user-info').classList.add('hidden');
      toggleAuthLoading(false);
      state.unsubscribes.forEach((unsub) => unsub());
      state.unsubscribes = [];
    }
  });

  document.getElementById('logout-btn').addEventListener('click', () => signOut(auth));
}
