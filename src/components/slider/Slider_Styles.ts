import styled from "styled-components";
import {theme} from "../../styles/Theme";

const Slider = styled.div`
    max-width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Slide = styled.div`
    text-align: center;
`
const Text = styled.p``

const Name = styled.span`
    font: 600 16px "Josefin Sans", sans-serif;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    display: inline-block;
    margin: 32px 0 42px;
`
const Pagination = styled.div`
    span {
        display: inline-block;
        border-radius: 20px;
        width: 7px;
        height: 7px;
        background: rgba(255, 255, 255, 0.5);
        
        & + span {
            margin-left: 5px;
        }
        
        &.active {
            background-color: ${theme.colors.accent};
            width: 20px;
        }
    }
`
export const S = {
    Pagination,
    Name,
    Text,
    Slide,
    Slider
}