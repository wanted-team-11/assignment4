import { createGlobalStyle } from "styled-components";

const muted = "#8b949e";
const bigFont = "16px";
const smallFont = "12px";

export const StyleVariables = {
  backgroundColor: "#0e1117",
  lighterBackgroundColor: "#161c21",
  listTitleFontSize: bigFont,
  listTitleFontWeight: "bold",
  listNumberFontSize: smallFont,
  listNumberFontWeight: "normal",
  listNumberFontColor: muted,
  listInfoItemFontSize: smallFont,
  listCommentFontSize: smallFont,
  listCommentFontColor: muted,
  inlineCodeBackgroundColor: "#6e768166",
  BlockCodeBackgroundColor: "#161b22",
};

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: sans-serif;
    color: white;
  }

  body {
    margin: 0;
    background-color: ${StyleVariables.backgroundColor};
  }

  a {
    text-decoration: none;
  }

  button {
    background: none;
    border: none;
  }
`;

export default GlobalStyle;
