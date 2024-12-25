import React, {useState} from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {TabMenu, TabStatusType} from "./tabMenu/TabMenu";
import {FlexWrapper} from "../../../components/flexWrapper";
import {Work} from "./work/Work";
import socialImg from "../../../assets/images/prog1.webp";
import timer from "../../../assets/images/proj2.webp";
import {Container} from "../../../components/Container";
import {S} from "./Works_Styles"
import {AnimatePresence, motion } from "motion/react"

const tabsItems: Array<{ status: TabStatusType, title: string }> = [
    {
        title: "All",
        status: "all",
    },
    {
        title: "landing page",
        status: "landing",
    },
    {
        title: "React",
        status: "react",
    },
    {
        title: "spa",
        status: "spa",
    },

]

const worksData = [
    {
        title: "Social Network",
        src: socialImg,
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        type: "spa",
        id: 1
    },
    {
        title: "Timer",
        src: timer,
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim",
        type: "react",
        id: 2
    },
    {
        title: "Social Network",
        src: socialImg,
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        type: "spa",
        id: 3
    },
    {
        title: "Timer",
        src: timer,
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim",
        type: "react",
        id: 4
    },
    {
        title: "Social Network",
        src: socialImg,
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        type: "spa",
        id: 5
    },
    {
        title: "Timer",
        src: timer,
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim",
        type: "react",
        id: 6
    },
]

export const Works: React.FC = () => {
    const [currentFiletStatus, setCurrentFiletStatus] = useState("all")
    let filteredWorks = worksData

    if (currentFiletStatus === "landing") {
        filteredWorks = worksData.filter(work => work.type === "landing")
    }
    if (currentFiletStatus === "react") {
        filteredWorks = worksData.filter(work => work.type === "react")
    }
    if (currentFiletStatus === "spa") {
        filteredWorks = worksData.filter(work => work.type === "spa")
    }

    function changeFilterStatus(value: TabStatusType) {
        setCurrentFiletStatus(value)
    }

    return (
        <S.Works id="works">
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <TabMenu tabsItems={tabsItems} changeFilterStatus={changeFilterStatus} currentFiletStatus={currentFiletStatus}/>
                <FlexWrapper justify={"space-between"} align={"flex-start"} wrap={"wrap"}>
                    <AnimatePresence>
                    {filteredWorks.map((w) => {
                        return (
                            <motion.div style={{
                                width: "400px",
                                flexGrow: 1,
                                maxWidth: "540px"
                            }}
                                layout={true}
                                initial={{opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit = {{ opacity: 0 }}
                                key={w.id}
                            >
                                <Work title={w.title}
                                      src={w.src}
                                      text={w.text}
                                      key={w.id}
                                />
                            </motion.div>
                        )
                    })}
                        </AnimatePresence>
                </FlexWrapper>
            </Container>
        </S.Works>
    );
};


