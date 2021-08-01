import { css } from 'styled-components';

const colors = {
  primary: '#06f',
  secondary: 'HSL(250, 3%, 40%)',
  secondaryDark: '#000',
  emphasis: '#f2f2f3',
  divider: '#e3e3e3',
  bg: '#f7f7f8',
  text: '#7d7c83',
};

export const theme = css`
  :root {
    --primary: ${colors.primary};
    --secondary: ${colors.secondary};
    --secondary-dark: ${colors.secondaryDark};
    --emphasis: ${colors.emphasis};
    --divider: ${colors.divider};
    --bg: ${colors.bg};
    --text: ${colors.text};

    --font-size-base: 15px;
  }
`;
