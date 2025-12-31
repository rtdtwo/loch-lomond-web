import {ActionIcon, Avatar, Button, Group, Stack, Text, Title} from "@mantine/core";
import {EnvelopeClosedIcon, GitHubLogoIcon, LinkedInLogoIcon, Pencil2Icon} from "@radix-ui/react-icons";
import Link from "next/link";

type HeaderProps = {
    isRetro?: boolean
    selectedMenuItem: string,
    hero?: boolean
}

const Header = (props: HeaderProps) => {
    return (
        <Stack
            p="xl"
            align="center"
            justify="center"
            gap="md"
            bg="linear-gradient(0, #f8f9fa, lightgray)"
            h={props.hero ? "100vh" : "50vh"}>
            <Avatar
                src={props.isRetro ? "/avatar-retro.png" : "/avatar.jpg"}
                alt="Rishabh Tatiraju's Portrait"
                w={150} h={150}/>
            <Title style={props.isRetro ? {fontFamily: "Departure_Mono"} : {}}>Rishabh Tatiraju</Title>
            <Text>Full-Stack Software Engineer</Text>
            {
                !props.isRetro && <Group>
                    <ActionIcon
                        variant="outline"
                        component="a"
                        target="_blank"
                        color="teal"
                        href="https://linkedin.com/in/rishabhtatiraju">
                        <LinkedInLogoIcon/>
                    </ActionIcon>
                    <ActionIcon
                        variant="outline"
                        component="a"
                        target="_blank"
                        color="teal"
                        href="https://github.com/rtdtwo">
                        <GitHubLogoIcon/>
                    </ActionIcon>
                    <ActionIcon
                        variant="outline"
                        component="a"
                        target="_blank"
                        color="teal"
                        href="https://rtdtwo.medium.com">
                        <Pencil2Icon/>
                    </ActionIcon>
                    <ActionIcon
                        variant="outline"
                        component="a"
                        target="_blank"
                        color="teal"
                        href="mailto:tatiraju.rishabh@gmail.com">
                        <EnvelopeClosedIcon/>
                    </ActionIcon>
                </Group>
            }

            <Group justify="center" mt="xl" display={props.isRetro ? "none" : "block"}>
                <Link href="/portfolio">
                    <Button variant={props.selectedMenuItem === "portfolio" ? "outline" : "transparent"} color="teal"
                            component="code" size="xs">
                        Portfolio
                    </Button>
                </Link>
                <Link href="/projects">
                    <Button variant={props.selectedMenuItem === "projects" ? "outline" : "transparent"} color="teal"
                            component="code" size="xs">
                        Projects
                    </Button>
                </Link>
                <Link href="/res/docs/Rishabh_Tatiraju_Resume.pdf" download="Rishabh_Tatiraju_Resume.pdf">
                    <Button variant="transparent" color="teal" component="code" size="xs">Download CV</Button>
                </Link>
            </Group>
        </Stack>
    )
}

export default Header;