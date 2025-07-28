'use client';

import { ReactNode } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from '@/theme/theme';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline /> {/* Normalizes styles across browsers */}
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
