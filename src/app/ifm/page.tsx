'use client'

import {Box, Flex, Group, Image, Text} from "@mantine/core";
import {SpeakerOffIcon} from "@radix-ui/react-icons";
import {useEffect, useState} from "react";
import {closeWindow, maximizeWindow, openWindow, RetroWindow} from "@/util/RetroWindowManager";
import {cursorPointerStyle, innerShadowStyle, outerShadowStyle} from "@/styles/RetroStyles";
import RetroDesktopView from "@/components/RetroDesktopView";


const RetroHome = () => {
    const [time, setTime] = useState(new Date());
    const [windows, setWindows] = useState<RetroWindow[]>([])
    const [activeWindowId, setActiveWindowId] = useState<string | null>(null)

    const getTaskbarWindows = () => {
        return windows.map(window =>
            <Group
                px={8}
                justify="flex-start"
                key={window.id}
                style={{...cursorPointerStyle, ...(activeWindowId === window.id ? innerShadowStyle : outerShadowStyle)}}
                onClick={() => {
                    setActiveWindowId(activeWindowId !== window.id ? window.id : null)
                }}>
                <Image src={window.icon} alt="Window Icon" w={24} h={24} fit="contain"/>
                <Text size="xl">{window.title}</Text>
            </Group>)
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date())
        }, 10000);

        return () => clearInterval(interval);
    }, []);
    useEffect(() => {
    }, [])

    return <Flex direction="column" h="100vh" style={{fontFamily: "Departure_Mono"}}>

        <RetroDesktopView
            windows={windows}
            activeWindowId={activeWindowId}
            openWindow={window => openWindow(window, windows, setWindows, setActiveWindowId)}
            minimizeWindow={() => setActiveWindowId(null)}
            maximizeWindow={() => maximizeWindow(activeWindowId, windows, setWindows)}
            closeWindow={() => closeWindow(activeWindowId, windows, setWindows, setActiveWindowId)}/>

        <Box h={48} bg="#c0c0c0" style={{borderTop: '2px solid white'}}>
            <Flex justify="center" align="center">
                <Box flex={1}>
                    <Group m={4} justify="flex-start">
                        <Text px={8} style={outerShadowStyle} size="xl">Start</Text>
                        {getTaskbarWindows()}
                    </Group>
                </Box>

                <Group m={4} px={8} justify="center" align="center" style={innerShadowStyle}>
                    <SpeakerOffIcon width={24} height={24}/>
                    <Text size="xl">{`${time.getHours()}:${time.getMinutes()}`}</Text>
                </Group>
            </Flex>
        </Box>
    </Flex>
}

export default RetroHome;