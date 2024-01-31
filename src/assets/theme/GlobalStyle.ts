import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

// CSS RESET 

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video, button {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font-family: 'Montserrat', sans-serif;
	vertical-align: baseline;
}

article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

// END OF CSS RESET

body {
  font-style: normal;
	${({ theme }) => theme.colors.primaryText};
}

h2 {
	font-size: ${({ theme }) => theme.fontSize.xl};
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	line-height: 1.25;
}

h4 {
	font-size: ${({ theme }) => theme.fontSize.large};
	font-weight: ${({ theme }) => theme.fontWeight.normal};
	line-height: 20px;
}

h5 {
	font-size: ${({ theme }) => theme.fontSize.md};
	font-weight: ${({ theme }) => theme.fontWeight.normal};
	line-height: 20px;
}

svg {
	cursor: pointer;
	// disable blue highlighting of the nearest text when user clicks to fast
	-webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
  supported by Chrome, Edge, Opera and Firefox */
	width: 100%;
  height: 100%;
}

`;

export default GlobalStyle;
