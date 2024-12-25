import styled from "styled-components";

const Slider = styled.div`
    max-width: 500px;
    width: 100%;
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

export const S = {
    Name,
    Text,
    Slide,
    Slider
}