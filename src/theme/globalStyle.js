import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle `
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: monospace;
    }

    #black {
        background-color: #001220;
    }

    #blue {
        background-color: #000070;
    }

    #red {
        background-color: #700000;
    }

    #green {
        background-color: #007000;
    }

    #indigo {
        background-color: indigo;
    }

    #purple {
        background-color: #700170;
    }

    #yellow {
        background-color: #a3a300;
    }

    #turquoise {
        background-color: #2a998e;
    }

    h1 {
        font-size: 25px;
        text-align: center;
        width: 60%;
        margin: 20px auto;
        color: #00b400;
    }
`;

export default GlobalStyle;