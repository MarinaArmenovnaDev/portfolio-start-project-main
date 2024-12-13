import React from 'react';
import styled from "styled-components";
import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/flexWrapper";
import {theme} from "../../styles/Theme";

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper direction={"column"} align={"center"}>
                <Name>Marina</Name>
                <SocialList>
                    <SocialItem>
                        <Sociallink>
                            <Icon height={"21"} viewBox={"0 0 21 21"} iconId={"instagram"}/>
                        </Sociallink>
                    </SocialItem>
                    <SocialItem>
                        <Sociallink>
                            <Icon height={"21"} viewBox={"0 0 21 21"} iconId={"telegram"}/>
                        </Sociallink>
                    </SocialItem>
                    <SocialItem>
                        <Sociallink>
                            <Icon height={"21"} viewBox={"0 0 21 21"} iconId={"vk"}/>
                        </Sociallink>
                    </SocialItem>
                    <SocialItem>
                        <Sociallink>
                            <Icon height={"21"} viewBox={"0 0 21 21"} iconId={"linkedin"}/>
                        </Sociallink>
                    </SocialItem>
                </SocialList>
                <Copyright>© 2024 Marina Avetsisian, All Rights Reserved.</Copyright>
            </FlexWrapper>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    min-height: 20vh;
    background-color: ${theme.colors.primaryBg};
    padding: 40px 0;
`
const Name = styled.span`
    font: 700 22px "Josefin Sans", sans-serif;
    letter-spacing: 0.14em;
`
const SocialList = styled.ul`
    display: flex;
    margin: 30px 0;
    gap: 20px;
`
const SocialItem = styled.li`
`
const Sociallink = styled.a`
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    width: 35px;
    height: 35px;

    display: flex;
    justify-content: center;
    align-items: center;

    color: ${theme.colors.accent};
    
    &:hover {
        color: ${theme.colors.primaryBg};
        transform: translateY(-4px);
        background-color: ${theme.colors.accent};
    }
`

const Copyright = styled.small`
    font-weight: 400;
    font-size: 12px;
    text-align: center;
    opacity: 0.5;
`