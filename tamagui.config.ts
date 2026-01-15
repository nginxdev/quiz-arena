import { createTamagui, createFont } from 'tamagui';
import { config } from '@tamagui/config/v3';
import {
  germanPalette,
  colorTokens,
  semanticTokens,
  themeColors,
} from './src/theme/germanPalette';

// Define Google Sans
const googleSansFont = createFont({
  family: 'GoogleSans',
  size: {
    1: 12,
    2: 14,
    3: 16,
    4: 18,
    5: 20,
    6: 24,
    7: 30,
    8: 36,
    9: 48,
    10: 64,
  },
  lineHeight: {
    1: 16,
    2: 24,
    3: 28,
    4: 32,
    5: 40,
    6: 48,
    7: 56,
    8: 64,
    9: 80,
    10: 96,
  },
  weight: {
    1: '300',
    2: '400',
    3: '700',
    4: '800',
  },
  letterSpacing: {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    8: -1,
    9: -2,
    10: -3,
  },
  face: {
    300: { normal: 'GoogleSans', italic: 'GoogleSansItalic' },
    400: { normal: 'GoogleSans', italic: 'GoogleSansItalic' },
    500: { normal: 'GoogleSansMedium', italic: 'GoogleSansMediumItalic' },
    600: { normal: 'GoogleSansSemiBold', italic: 'GoogleSansSemiBoldItalic' },
    700: { normal: 'GoogleSansBold', italic: 'GoogleSansBoldItalic' },
    800: { normal: 'GoogleSansBold', italic: 'GoogleSansBoldItalic' },
    900: { normal: 'GoogleSansBold', italic: 'GoogleSansBoldItalic' },
  },
});

const tamaguiConfig = createTamagui({
  ...config,
  tokens: {
    ...config.tokens,
    color: {
      ...config.tokens.color,
      ...germanPalette,
      ...colorTokens,
      ...semanticTokens,
    },
  },
  themes: {
    ...config.themes,
    light: themeColors.light,
    dark: themeColors.dark,
  },
  fonts: {
    heading: googleSansFont,
    body: googleSansFont,
  },
});

export type AppConfig = typeof tamaguiConfig;

declare module 'tamagui' {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface TamaguiCustomConfig extends AppConfig {}
}

export default tamaguiConfig;
