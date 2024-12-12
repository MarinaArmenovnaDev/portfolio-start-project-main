import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import styled from "styled-components";
import {FlexWrapper} from "../../../../components/flexWrapper";
import {theme} from "../../../../styles/Theme";

type SkillPropsType = {
    iconId: string,
    title: string,
    description: string,

}

export const Skill = (props: SkillPropsType) => {
    return (
            <StyledSkill>
                <FlexWrapper direction="column" align="center" >
                    <IconWrapper>
                        <Icon iconId={props.iconId}/>
                    </IconWrapper>
                    <SkillTitle>{props.title}</SkillTitle>
                    <SkillText>{props.description}</SkillText>
                </FlexWrapper>
            </StyledSkill>
    );
};

const StyledSkill = styled.div`
    width: 380px;
    padding: 62px 20px 40px;
`

const IconWrapper = styled.div`
    position: relative;

    
    &::before {
        content: '';
        display: inline-block;
        width: 80px;
        height: 80px;
        background: rgba(255, 255, 255, 0.1);
        transform: rotate(-45deg) translate(-50%, -50%);
        
        position: absolute;
        left: 50%;top: 50%;
        transform-origin: top left;
    }
`


const SkillTitle = styled.h3`
    margin: 70px 0 15px;
    font: 700 16px "Josefin Sans", sans-serif;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: ${theme.colors.font};
`
const SkillText = styled.p`
    text-align: center;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.4;
    color: ${theme.colors.font};
`


