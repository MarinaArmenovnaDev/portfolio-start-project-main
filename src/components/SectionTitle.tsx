import styled from "styled-components";
import {theme} from "../styles/Theme";

export const SectionTitle = styled.h2`
    font: 600 36px "Josefin Sans", sans-serif;
    letter-spacing: 0.14em;
    color: ${theme.colors.font};
    text-align: center;
    margin-bottom: 90px;

    position: relative;

    &::before {
        content: '';
        display: inline-block;
        width: 55px;
        height: 1px;
        background-color: ${theme.colors.accent};

        position: absolute;
        left: 50%;
        bottom: -30px;
        transform: translateX(-50%);
    }
`

