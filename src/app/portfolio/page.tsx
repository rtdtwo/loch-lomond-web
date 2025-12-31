import {Box, Container, Stack, Text, Timeline, Title} from "@mantine/core";
import {ABOUT} from "@/const/Strings";
import ExperienceStep from "@/components/ExperienceStep";
import Header from "@/components/Header";
import {Educations, Experiences} from "@/data/Data";

type PortfolioProps = {
    isRetro?: boolean
}

const PortfolioPage = (props: PortfolioProps) => {

    return <Box bg="white">
        <Header isRetro={props.isRetro} selectedMenuItem="portfolio"/>

        <Stack p="xl" my="xl" gap="md">
            <Container>
                <Title style={props.isRetro ? {fontFamily: "Departure_Mono"} : {}} mb="lg" ta="center" order={2}>
                    About
                </Title>
                <Text ta="center" style={{whiteSpace: 'pre-line'}}>{ABOUT}</Text>
            </Container>
        </Stack>

        <Stack p="xl" my="xl" gap="md" bg="gray.0">
            <Container>
                <Title style={props.isRetro ? {fontFamily: "Departure_Mono"} : {}} my="xl" ta="center" order={2}>
                    Professional Experience
                </Title>
                <Timeline active={100} bulletSize={48} color="gray.1" lineWidth={2}>
                    {
                        Experiences.map(experience => {
                            return <ExperienceStep
                                key={experience.id}
                                icon={experience.icon}
                                title={experience.title}
                                institution={experience.company}
                                subtitle={experience.duration}
                                description={experience.description}
                            />
                        })
                    }
                </Timeline>
            </Container>
        </Stack>

        <Stack p="xl" gap="md" my="xl">
            <Container>
                <Title style={props.isRetro ? {fontFamily: "Departure_Mono"} : {}} mb="xl" ta="center" order={2}>
                    Education
                </Title>
                <Timeline active={100} bulletSize={48} color="gray.1" lineWidth={2}>
                    {
                        Educations.map(edu => {
                            return <ExperienceStep
                                key={edu.id}
                                icon={edu.icon}
                                title={edu.title}
                                institution={edu.institution}
                                subtitle={edu.duration}
                                description={edu.description}
                            />
                        })
                    }
                </Timeline>
            </Container>
        </Stack>
    </Box>
}

export default PortfolioPage;
