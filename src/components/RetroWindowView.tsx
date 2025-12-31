import {RetroWindow} from "@/util/RetroWindowManager";
import {Box, Flex, Group, Image, Text} from "@mantine/core";
import {outerShadowStyle, overflowYAutoStyle} from "@/styles/RetroStyles";

type RetroWindowProps = {
    window: RetroWindow,
    onClose: () => void,
    onMaximize: () => void
    onMinimize: () => void
}

const RetroWindowView = (props: RetroWindowProps) => {
    return <Flex w="100%" h="100%" direction="column" bg="white" bd="2px solid #e7e7e7">
        <Flex direction="row" h={48} bg="linear-gradient(90deg, #000080, #4b98cb)"
              bd="2px solid #a7acbc">
            <Group m={12} justify="flex-start" flex={1}>
                <Image
                    src={props.window.icon}
                    alt="Portfolio Retro Icon"
                    w={24} h={24}
                    fit="contain"/>
                <Text c="white" size="sm">{props.window.title}</Text>
            </Group>
            <Group mx={12} justify="flex-end" align="center" gap={4}>
                <Image
                    src="/res/icons/retro/minimize-button-retro.png"
                    alt={`${props.window.title} Window Minimize Button`}
                    p={4}
                    w={24} h={24}
                    color="black"
                    onClick={() => props.onMinimize()}
                    style={{...outerShadowStyle, backgroundColor: "#c0c0c0"}}/>
                <Image
                    src="/res/icons/retro/maximize-button-retro.png"
                    alt={`${props.window.title} Window Maximize Button`}
                    p={4}
                    w={24} h={24}
                    color="black"
                    onClick={() => props.onMaximize()}
                    style={{...outerShadowStyle, backgroundColor: "#c0c0c0"}}/>
                <Image
                    src="/res/icons/retro/close-button-retro.png"
                    alt={`${props.window.title} Window Close Button`}
                    p={4}
                    w={24} h={24}
                    color="black"
                    onClick={() => props.onClose()}
                    style={{...outerShadowStyle, backgroundColor: "#c0c0c0"}}/>
            </Group>
        </Flex>
        <Box flex={1} bg="#000000" style={overflowYAutoStyle}>
            {props.window.content}
        </Box>
    </Flex>
}

export default RetroWindowView;