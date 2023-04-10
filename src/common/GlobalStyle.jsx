import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
     *, *::before, *::after {
    box-sizing: border-box;
    }
    body {
        font-family: "Helvetica", "Arial", sans-serif;
        line-height: 1.5;
    }
    h2, p {
        margin: 0;
    }
    h2 {
        font-size: 1.5rem;
    }
    p {
        font-size: 1rem;
    }
    svg:hover {
        fill: #32612d;
    }
    svg{
        cursor: pointer;
    }
    *{
        color: #373737;
    }
    button {
        width: 100px;
        height: 40px;
        font-size: 18px;
    }
`;

export default GlobalStyle;