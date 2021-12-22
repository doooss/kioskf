import { Global, css } from '@emotion/react';

const style = css`
  * {
    margin: 0;
    padding: 0;
  }
  @font-face {
    font-family: 'Spoqa Han Sans Neo', 'sans-serif';
    font-weight: 600;
    unicode-range: U+AC00- U+D7A3;
  }

  @font-face {
    font-family: 'Roboto';
    font-weight: 500;
    unicode-range: U+0041-005A, U+0061-007A, U+0030-0039;
  }

  body {
    box-sizing: border-box;
  }
`;

const GlobalStyle = () => {
  return <Global styles={style} />;
};

export default GlobalStyle;
