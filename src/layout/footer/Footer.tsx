import React from 'react';
import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/flexWrapper";
import {S} from "./Footer_Styles"


const socialItemData=[
    {
        iconId:"instagram",
    },
    {
        iconId:"telegram",
    },
    {
        iconId:"vk",
    },
    {
        iconId:"linkedin",
    },
]

export const Footer: React.FC = () => {
    return (
        <S.Footer>
            <FlexWrapper direction={"column"} align={"center"}>
                <S.Name>Marina</S.Name>
                <S.SocialList>
                    {socialItemData.map((s,index)=>{
                        return(
                            <S.SocialItem key={index}>
                                <S.SocialLink>
                                    <Icon height={"21"} viewBox={"0 0 21 21"} iconId={s.iconId}/>
                                </S.SocialLink>
                            </S.SocialItem>
                        )
                    })}
                </S.SocialList>
                <S.Copyright>© 2024 Marina Avetsisian, All Rights Reserved.</S.Copyright>
            </FlexWrapper>
        </S.Footer>
    );
};

