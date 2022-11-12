import reset from 'styled-reset';
import { createGlobalStyle, CreateGlobalStyle } from 'styled-components';

import { stackColor } from './colors';

export const GlobalStyle = createGlobalStyle`
    $(reset)
    html {
        font-size: 16px;
    }
    * {
        color: $(stackColor.white);
    }
    body {
        background: black;
        overflow: hidden;
        height: 100vh;
    }
    a, p {
        color: $(stackColor.white);
        font-size: 1rem;
        text-decoration: none;
    }
`;