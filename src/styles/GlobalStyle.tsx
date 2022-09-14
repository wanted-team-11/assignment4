import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        font-family: sans-serif;
    }

    ul {
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
