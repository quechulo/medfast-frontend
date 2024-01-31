const lightModeTheme = {
  colors: {
    mainWhite: '#ffffff',
    mainBlack: '#3d3d3d',
    mainGray: '#9a9a9a',
    gray1: '#333',
    gray3: '#828282',
    mainPurple: '#8e68f3',
    lightPurple: '#F3F5FF',
    mainRed: '#F54A3F',
    mainYellow: '#FBBC41',
    mainGreen: '#27AE60',
    lightBlue: '#87beff',
    primaryText: '#313131',
    secondaryText: '#ffffff',
    linearForButtons: '#7A77FF',
    successToastBackground: '#f4fef9',
    errorToastBackground: '#fff8f4',
    warningToastBackground: '#fff7e8',
    activeMenuTab: '#EFF8FF',
    sectionDescriptionImageBackground: '#F3F5FF',
    succesDescriptionImageBackground: '#f3fff6',
    errorDescriptionImageBackground: '#fff8f4',
    forGradient: '#B4A0FF',
    homePageBorder: '#C6D0D5',
    homeNavLinkHoverBackground: '#F5F8F9',
    homeNavLinkActiveBackground: '#F5F8F9',
  },
};

const theme = {
  shadows: {
    homePageElementsBoxShadow: 'rgba(50, 50, 50, 0.1)',
  },

	fontSize: {
		xxxl: '3rem',
		xl: '1.5rem', // 24px
    large_plus: '1.125rem', // 18px
		large: '1rem', // 16px
		md: '.875rem', // 14px
    s: '.75rem', // 12px
		// sm: "",
		// small: "",
		// xs: "",
	},

  // note: values can be changed to match the design
  breakPoints: {
    xs: '320px',
    sm: '480px',
    md: '768px',
    lg: '1024px',
    xl: '1200px',
    xxl: '1440px',
  },

  fontWeight: {
    thin: 100,
    extraLight: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
    extraBold: 800,
  },

  borders: {
    mainBorder: `1px solid ${lightModeTheme.colors.mainGray}`,
    whiteBorder: `1px solid ${lightModeTheme.colors.mainWhite}`,
    errorBorder: `1px solid ${lightModeTheme.colors.mainRed}`,
  },

  gradients: {
    imageBackground:
      'linear-gradient(180deg, rgba(101, 101, 101, 0) 58.43%, rgba(0, 0, 0, 0.2) 84%)',
    buttonBackground:
      'linear-gradient(160deg, rgba(95, 93, 183, 0.20) 22.37%, rgba(255, 255, 255, 0.15) 72.04%)',
  },
};

export const lightMode = { ...theme, ...lightModeTheme };
export default theme;
