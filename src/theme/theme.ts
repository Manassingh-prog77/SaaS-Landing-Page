  // src/theme.ts
  import { createTheme, alpha } from '@mui/material/styles';

  // A "super premium" color palette inspired by sunset flares and auroras.
  const colors = {
    // Primary: A vibrant, energetic orange.
    primary: {
      50: '#FFF7ED',
      100: '#FFEDD5',
      200: '#FED7AA',
      300: '#FDBA74',
      400: '#FB923C',
      500: '#F97316', // Main brand color - vibrant orange
      600: '#EA580C',
      700: '#C2410C',
      800: '#9A3412',
      900: '#7C2D12',
    },
    
    // Secondary Accent: A warm, inviting magenta/pink.
    secondary: {
      50: '#FCE7F3',
      100: '#FBCFE8',
      200: '#F9A8D4',
      300: '#F472B6',
      400: '#EC4899', // Vibrant magenta
      500: '#D946EF',
      600: '#C026D3',
      700: '#A21CAF',
      800: '#86198F',
      900: '#701A75',
    },

    // Neutrals: A sophisticated, slightly warm "Slate" gray.
    slate: {
      50: '#F8FAFC',
      100: '#F1F5F9',
      200: '#E2E8F0',
      300: '#CBD5E1',
      400: '#94A3B8',
      500: '#64748B',
      600: '#475569',
      700: '#334155',
      800: '#1E293B',
      900: '#0F172A',
    },

    // Functional colors with a premium feel
    success: { main: '#22C55E' },
    warning: { main: '#F59E0B' },
    error: { main: '#EF4444' },
  };

  // Define the premium theme
  const theme = createTheme({
    palette: {
      mode: 'light',
      // --- FIX STARTS HERE ---
      // We explicitly define main, light, dark, and contrastText
      // to prevent the augmentColor error and gain more control.
      primary: {
        ...colors.primary, // Spread the rest of the shades
        main: colors.primary[500],
        light: colors.primary[300],
        dark: colors.primary[700],
        contrastText: '#FFFFFF',
      },
      secondary: {
        ...colors.secondary, // Spread the rest of the shades
        main: colors.secondary[400], // Using the vibrant magenta as main
        light: colors.secondary[200],
        dark: colors.secondary[600],
        contrastText: '#FFFFFF',
      },
      // --- FIX ENDS HERE ---
      background: {
        default: colors.slate[50], // Slightly off-white for a softer look
        paper: '#FFFFFF',
      },
      text: {
        primary: colors.slate[800],
        secondary: colors.slate[500],
      },
      success: colors.success,
      warning: colors.warning,
      error: colors.error,
      divider: colors.slate[200],
    },

    typography: {
      fontFamily: `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif`,
      h1: {
        fontWeight: 800,
        fontSize: 'clamp(2.5rem, 5vw, 4rem)',
        lineHeight: 1.1,
        letterSpacing: '-0.025em',
        color: colors.slate[900],
      },
      h2: {
        fontWeight: 700,
        fontSize: 'clamp(2rem, 4vw, 3rem)',
        lineHeight: 1.15,
        letterSpacing: '-0.02em',
        color: colors.slate[900],
      },
      body1: {
        fontSize: '1.125rem',
        lineHeight: 1.7,
        color: colors.slate[700],
      },
      button: {
        fontWeight: 600,
        textTransform: 'none',
      },
      caption: {
        color: colors.slate[500],
      },
      overline: {
        fontWeight: 700,
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        color: colors.primary[500],
      },
    },

    shape: {
      borderRadius: 12, // Modern, slightly rounded corners
    },

    shadows: [
      'none',
      '0px 2px 4px rgba(0, 0, 0, 0.02), 0px 1px 2px rgba(0, 0, 0, 0.04)',
      '0px 4px 8px rgba(0, 0, 0, 0.04), 0px 2px 4px rgba(0, 0, 0, 0.06)',
      '0px 8px 16px rgba(0, 0, 0, 0.06), 0px 4px 8px rgba(0, 0, 0, 0.08)',
      '0px 12px 24px rgba(0, 0, 0, 0.08), 0px 6px 12px rgba(0, 0, 0, 0.10)',
      '0px 16px 32px rgba(0, 0, 0, 0.10), 0px 8px 16px rgba(0, 0, 0, 0.12)',
      '0px 20px 40px rgba(0, 0, 0, 0.12), 0px 10px 20px rgba(0, 0, 0, 0.14)',
      '0px 24px 48px rgba(0, 0, 0, 0.14), 0px 12px 24px rgba(0, 0, 0, 0.16)',
      '0px 32px 64px rgba(0, 0, 0, 0.16), 0px 16px 32px rgba(0, 0, 0, 0.18)',
      '0px 32px 80px rgba(124, 58, 237, 0.15), 0px 16px 32px rgba(124, 58, 237, 0.10)',
      '0px 2px 4px rgba(0, 0, 0, 0.02), 0px 1px 2px rgba(0, 0, 0, 0.04)',
      '0px 4px 8px rgba(0, 0, 0, 0.04), 0px 2px 4px rgba(0, 0, 0, 0.06)',
      '0px 8px 16px rgba(0, 0, 0, 0.06), 0px 4px 8px rgba(0, 0, 0, 0.08)',
      '0px 12px 24px rgba(0, 0, 0, 0.08), 0px 6px 12px rgba(0, 0, 0, 0.10)',
      '0px 16px 32px rgba(0, 0, 0, 0.10), 0px 8px 16px rgba(0, 0, 0, 0.12)',
      '0px 20px 40px rgba(0, 0, 0, 0.12), 0px 10px 20px rgba(0, 0, 0, 0.14)',
      '0px 24px 48px rgba(0, 0, 0, 0.14), 0px 12px 24px rgba(0, 0, 0, 0.16)',
      '0px 32px 64px rgba(0, 0, 0, 0.16), 0px 16px 32px rgba(0, 0, 0, 0.18)',
      '0px 32px 80px rgba(124, 58, 237, 0.15), 0px 16px 32px rgba(124, 58, 237, 0.10)',
      '0px 2px 4px rgba(0, 0, 0, 0.02), 0px 1px 2px rgba(0, 0, 0, 0.04)',
      '0px 4px 8px rgba(0, 0, 0, 0.04), 0px 2px 4px rgba(0, 0, 0, 0.06)',
      '0px 8px 16px rgba(0, 0, 0, 0.06), 0px 4px 8px rgba(0, 0, 0, 0.08)',
      '0px 12px 24px rgba(0, 0, 0, 0.08), 0px 6px 12px rgba(0, 0, 0, 0.10)',
      '0px 16px 32px rgba(0, 0, 0, 0.10), 0px 8px 16px rgba(0, 0, 0, 0.12)',
      '0px 20px 40px rgba(0, 0, 0, 0.12), 0px 10px 20px rgba(0, 0, 0, 0.14)',
    ],

    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            backgroundColor: colors.slate[50],
            backgroundImage: `
              radial-gradient(circle at 10% 10%, ${alpha(colors.primary[50], 0.5)} 0%, transparent 40%),
              radial-gradient(circle at 90% 80%, ${alpha(colors.secondary[50], 0.5)} 0%, transparent 40%)
            `,
            backgroundAttachment: 'fixed',
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: '10px',
            padding: '10px 24px',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            position: 'relative',
            overflow: 'hidden',
            '&:before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: '-100%',
              width: '100%',
              height: '100%',
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
              transition: 'left 0.6s cubic-bezier(0.25, 1, 0.5, 1)',
            },
            '&:hover:before': {
              left: '100%',
            },
          },
          contained: {
            color: '#FFFFFF',
            background: `linear-gradient(135deg, ${colors.primary[500]} 0%, ${colors.secondary[400]} 100%)`,
            boxShadow: `0px 4px 16px ${alpha(colors.primary[500], 0.2)}`,
            '&:hover': {
              background: `linear-gradient(135deg, ${colors.primary[600]} 0%, ${colors.secondary[400]} 100%)`,
              boxShadow: `0px 8px 24px ${alpha(colors.primary[500], 0.3)}`,
              transform: 'translateY(-2px)',
            },
          },
          outlined: {
            borderColor: colors.slate[300],
            color: colors.slate[700],
            '&:hover': {
              borderColor: colors.primary[400],
              background: colors.primary[50],
              color: colors.primary[600],
              transform: 'translateY(-1px)',
            },
          },
        },
      },
    },
  });

  // Export custom, multi-stop gradients for use throughout the app
  export const gradients = {
    primary: `linear-gradient(135deg, ${colors.primary[500]} 0%, ${colors.secondary[400]} 100%)`,
    accent: `linear-gradient(135deg, ${colors.primary[500]} 0%, ${colors.secondary[500]} 50%, ${colors.secondary[800]} 100%)`,
  };

  export default theme;