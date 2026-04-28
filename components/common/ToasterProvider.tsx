'use client';

import { Toaster } from 'react-hot-toast';

export default function ToasterProvider() {
  return (
    <Toaster
      position="bottom-right"
      toastOptions={{
        duration: 5000,
        style: {
          background: '#121826',
          color: '#e2e8f0',
          border: '1px solid rgba(255,255,255,0.05)',
          borderRadius: '0.75rem',
          fontSize: '0.9rem',
        },
        success: {
          iconTheme: { primary: '#3B96D1', secondary: '#121826' },
        },
        error: {
          iconTheme: { primary: '#ef4444', secondary: '#121826' },
        },
      }}
    />
  );
}
