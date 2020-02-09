// const genericFontType = {
//   fontFamily: 'Open Sans',
//   lineHeight: 1.5,
// }

export const fontTypes = {};

export const themeColors = {
  black: "#000",
  white: "#FFFFFF"
};

export const gridConfig = {
  breakpoints: {
    xl: 1280,
    lg: 1280,
    md: 980,
    sm: 736,
    xs: 480
  }
};

export const mediaQueries = {
  xs: `(max-width: ${gridConfig.breakpoints.xs}px)`,
  sm: `(max-width: ${gridConfig.breakpoints.sm}px)`,
  md: `(max-width: ${gridConfig.breakpoints.md}px)`,
  lg: `(max-width: ${gridConfig.breakpoints.lg}px)`,
  xl: `(max-width: ${gridConfig.breakpoints.xl}px)`,
  smUp: `(min-width: ${gridConfig.breakpoints.sm}px)`,
  mdUp: `(min-width: ${gridConfig.breakpoints.md}px)`,
  lgUp: `(min-width: ${gridConfig.breakpoints.lg}px)`,
  xlUp: `(min-width: ${gridConfig.breakpoints.xl}px)`
};

export const shadows = {};

export default {
  // fontFamily: "Open Sans",
  // fontTypes,
  colors: themeColors,
  mediaQueries,
  shadows
};
