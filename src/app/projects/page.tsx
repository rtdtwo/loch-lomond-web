import {Box, Container, SimpleGrid, Title} from "@mantine/core";
import Header from "@/components/Header";
import ProjectCard from "@/components/ProjectCard";
import {Projects} from "@/data/Data";

type ProjectsProps = {
    isRetro?: boolean
}

const ProjectsPage = (props: ProjectsProps) => {
    return <Box bg="white">

        <Header isRetro={props.isRetro} selectedMenuItem="projects"/>

        <Container pt="xl">
            <Title my="xl" style={props.isRetro ? {fontFamily: "Departure_Mono"} : {}} mb="lg" ta="center" order={2}>
                Projects
            </Title>

            <SimpleGrid cols={{xs: 1, md: 2}} spacing="xl" my="xl">
                {
                    Projects.map(project => <ProjectCard key={project.id} {...project} />)
                }
            </SimpleGrid>
        </Container>
    </Box>
}

export default ProjectsPage;
