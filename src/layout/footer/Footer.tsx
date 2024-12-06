import React from 'react';
import styled from "styled-components";
import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/flexWrapper";

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
                <Copyright>© 2023 Svetlana Dyablo, All Rights Reserved.</Copyright>
            </FlexWrapper>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    min-height: 20vh;
    background-color: #b8f1d1;`
const Name = styled.span`
    
`
const SocialList = styled.ul`
    display: flex;
    gap: 30px;
`
const SocialItem = styled.li`
`
const Sociallink = styled.a`
`

const Copyright = styled.small`
`