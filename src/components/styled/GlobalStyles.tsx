import { createGlobalStyle } from 'styled-components';
import {
  BACKGROUND_COLOR,
  DARK_TEXT_COLOR,
  LIGHT_TEXT_COLOR,
  PRIMARY_COLOR,
  SECONDARY_COLOR,
} from '../../constants/color-palette';

const GlobalStyles = createGlobalStyle`
    * {
    }

    body {
        margin: 0;
        display: flex;
        position: relative;
        place-items: center;
        min-width: 320px;
        min-height: 100vh;
    }

    :root {

        --primary-color: ${PRIMARY_COLOR};
        --secondary-color: ${SECONDARY_COLOR};
        --dark-text-color: ${DARK_TEXT_COLOR};
        --light-text-color: ${LIGHT_TEXT_COLOR};
        --background-color: ${BACKGROUND_COLOR};
    }

    #root {
        margin: 0 auto;
        background-color: #888098;
        text-align: center;
        display: flex;
        position: absolute;
        top: 0;
        bottom: 0;

        flex-direction: column;

        height: 100vh;

        width: 100vw;
    }
`;

export default GlobalStyles;
