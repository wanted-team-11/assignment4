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
};

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        font-family: sans-serif;
        padding: 0;
        margin: 0;
    }

    li {
        list-style: none;
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
