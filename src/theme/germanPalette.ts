export const germanPalette = {
  fusionRed: '#FC5C65',
  desire: '#EB3B5A',
  orangeHibiscus: '#FD9644',
  beniukonBronze: '#FA8231',
  flirtatious: '#FED330',
  nycTaxi: '#F7B731',
  reptileGreen: '#26DE81',
  algalFuel: '#20BF6B',
  maximumBlueGreen: '#2BCBBA',
  turquoiseTopaz: '#0FB9B1',
  highBlue: '#45AAF2',
  boyzone: '#2D98DA',
  c64Ntsc: '#4B7BEC',
  royalBlue: '#3867D6',
  lighterPurple: '#A55EEA',
  gloomyPurple: '#8854D0',
  twinkleBlue: '#D1D8E0',
  innuendo: '#A5B1C2',
  blueGrey: '#778CA3',
  blueHorizon: '#4B6584',
};

// Grouped by color family (Light / Dark pair) - Flattened for Tamagui tokens
export const colorTokens = {
  redLight: germanPalette.fusionRed,
  redDark: germanPalette.desire,

  orangeLight: germanPalette.orangeHibiscus,
  orangeDark: germanPalette.beniukonBronze,

  yellowLight: germanPalette.flirtatious,
  yellowDark: germanPalette.nycTaxi,

  greenLight: germanPalette.reptileGreen,
  greenDark: germanPalette.algalFuel,

  tealLight: germanPalette.maximumBlueGreen,
  tealDark: germanPalette.turquoiseTopaz,

  skyLight: germanPalette.highBlue,
  skyDark: germanPalette.boyzone,

  blueLight: germanPalette.c64Ntsc,
  blueDark: germanPalette.royalBlue,

  purpleLight: germanPalette.lighterPurple,
  purpleDark: germanPalette.gloomyPurple,

  grayLight: germanPalette.twinkleBlue,
  grayMedium: germanPalette.innuendo,
  grayDark: germanPalette.blueGrey,
  grayDarker: germanPalette.blueHorizon,
};

export const semanticTokens = {
  primary: germanPalette.royalBlue,
  secondary: germanPalette.orangeHibiscus,
  success: germanPalette.reptileGreen,
  warning: germanPalette.nycTaxi,
  danger: germanPalette.fusionRed,
  text: '#ffffff',
  textStrong: '#ffffff',
  textMuted: germanPalette.twinkleBlue,
  shadowColor: 'rgba(0,0,0,0.5)',
};

export const themeColors = {
  light: {
    background: '#ffffff',
    backgroundStrong: '#f0f0f0',
    color: '#000000',
    borderColor: '#e0e0e0',
    primary: germanPalette.royalBlue,
    secondary: germanPalette.orangeHibiscus,
    textMuted: germanPalette.blueGrey,
  },
  dark: {
    background: '#0f0c29',
    backgroundStrong: '#24243e',
    color: '#ffffff',
    borderColor: 'rgba(255,255,255,0.1)',
    primary: germanPalette.royalBlue,
    secondary: germanPalette.orangeHibiscus,
    textMuted: germanPalette.twinkleBlue,
  },
};
