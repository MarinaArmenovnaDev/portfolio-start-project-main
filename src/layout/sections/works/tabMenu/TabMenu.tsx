import React from 'react';
import styled from "styled-components";
import {Link} from "../../../../components/Link";

export type TabStatusType = "all" | "landing" | "react" | "spa"

type TabMenuPropsType = {
    tabsItems: Array<{status:TabStatusType, title: string}>
    changeFilterStatus: (value: TabStatusType )=> void
    currentFiletStatus: string
}

export const TabMenu = (props: TabMenuPropsType) => {
    return (
        <StyledTabMenu>
            <ul>
                {props.tabsItems.map((item, index) => {
                    return (
                        <ListItem key={index}>
                            <Link active={props.currentFiletStatus === item.status} as={"button"} onClick={()=>{props.changeFilterStatus(item.status)}}>{item.title}</Link>
                        </ListItem>
                    )
                })}
            </ul>
        </StyledTabMenu>
    );
};

const StyledTabMenu = styled.nav`
    ul {
        display: flex;
        justify-content: space-between;
        max-width: 362px;
        width: 100%;
        margin: 0 auto 40px;
    }
`
const ListItem = styled.li`
`



