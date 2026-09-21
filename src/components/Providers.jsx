'use client';

import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { store } from '../store';
import { hydrateAuth } from '../store/authSlice';

export function Providers({ children }) {
  useEffect(() => {
    let savedUser = null;
    try {
      savedUser = JSON.parse(localStorage.getItem('userInfo'));
    } catch {
      localStorage.removeItem('userInfo');
    }
    store.dispatch(hydrateAuth(savedUser));
  }, []);

  return <Provider store={store}>{children}</Provider>;
}
