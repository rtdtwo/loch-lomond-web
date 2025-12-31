'use client'

import {Box, Grid, GridCol, Image, Text} from "@mantine/core";
import {cursorPointerStyle, overflowHiddenStyle} from "@/styles/RetroStyles";
import {getActiveWindow, RetroWindow} from "@/util/RetroWindowManager";
import PortfolioPage from "@/app/portfolio/page";
import RetroWindowView from "@/components/RetroWindowView";
import ProjectsPage from "@/app/projects/page";
import Link from "next/link";

type RetroDesktopViewProps = {
    windows: RetroWindow[],
    activeWindowId: string | null,
    openWindow: (window: RetroWindow) => void,
    minimizeWindow: () => void,
    maximizeWindow: () => void,
    closeWindow: () => void
}

const RetroDesktopView = (props: RetroDesktopViewProps) => {
    const heightMinus48 = {height: "calc(100vh - 48px)"}

    const activeWindow = getActiveWindow(props.windows, props.activeWindowId)

    return <Box flex={1} bg="#008080" style={{...heightMinus48, ...overflowHiddenStyle}}>
        <Grid style={heightMinus48} gutter={0}>
            <GridCol span="content" p="lg" style={heightMinus48} display={activeWindow?.maximized ? "none" : "block"}>
                <Box w={84} style={cursorPointerStyle}>
                    <Image src="/avatar-retro.png" alt="Rishabh Portrait" w={84} h={56} mb="sm" fit="contain"/>
                    <Text c="white" ta="center" w={84} size="sm">Rishabh Tatiraju</Text>
                </Box>

                <Box w={84} mt="xl" style={cursorPointerStyle} onDoubleClick={() => props.openWindow(
                    {
                        id: "portfolio",
                        title: "Portfolio",
                        icon: "/res/icons/retro/portfolio-icon-retro.png",
                        content: <PortfolioPage isRetro/>
                    }
                )}>
                    <Image src="/res/icons/retro/portfolio-icon-retro.png" alt="Projects Retro Icon" w={84} h={56} mb="sm"
                           fit="contain"/>
                    <Text c="white" ta="center" w={84} size="sm">Portfolio</Text>
                </Box>

                <Box w={84} mt="xl" style={cursorPointerStyle} onDoubleClick={() => props.openWindow(
                    {
                        id: "projects",
                        title: "Projects",
                        icon: "/res/icons/retro/projects-icon-retro.png",
                        content: <ProjectsPage isRetro/>
                    }
                )}>
                    <Image src="/res/icons/retro/projects-icon-retro.png" alt="Projects Retro Icon" w={84} h={56} mb="sm"
                           fit="contain"/>
                    <Text c="white" ta="center" w={84} size="sm">Projects</Text>
                </Box>
                <Link
                    href="/res/docs/Rishabh_Tatiraju_Resume.pdf"
                    download="Rishabh_Tatiraju_Resume.pdf"
                    target="_blank">
                    <Box w={84} mt="xl" style={cursorPointerStyle}>
                        <Image src="/res/icons/retro/save-icon-retro.png" alt="Save Retro Icon" w={84} h={56} mb="sm" fit="contain"/>
                        <Text c="white" ta="center" w={84} size="sm">Download CV</Text>
                    </Box>
                </Link>
            </GridCol>

            <GridCol span="auto" p={activeWindow?.maximized ? 0 : "xl"} style={heightMinus48}>
                {
                    activeWindow ?
                        <RetroWindowView
                            window={activeWindow}
                            onClose={() => props.closeWindow()}
                            onMaximize={() => props.maximizeWindow()}
                            onMinimize={() => {
                                props.minimizeWindow()
                            }}
                        /> : null
                }
            </GridCol>
        </Grid>
    </Box>
}

export default RetroDesktopView;