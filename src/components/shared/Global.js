import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

:root {
    --dark-gray: hsl(0, 0%, 63%),
    --black: hsl(0, 0%, 0%),
    --white: hsl(0, 0%, 100%), 
    --very-dark-gray: hsl(0, 0%, 27%),
}
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'League Spartan', sans-serif;   // 500 600 700

    }
`;