import {Button, Card, CardSection, Group, Image, Text} from "@mantine/core";
import {Project} from "@/const/Types";

const ProjectCard = (props: Project) => {
    return <Card p="md" shadow="sm" radius="md" withBorder>
        <CardSection>
            <Image src={props.image} alt="Personal Weather Station"/>
        </CardSection>

        <Group justify="space-between" mt="md" mb="xs">
            <Text fw={700}>{props.title}</Text>
        </Group>

        <Text size="sm" c="dimmed" ta="justify">
            {props.description}
        </Text>

        <Group grow wrap="nowrap" mt="md" mb="xs">
            <Button variant="filled" radius="md" component="a" href={props.link} target="_blank">
                View Project
            </Button>
            {
                props.githubLink &&
                <Button variant="outline" color="gray.7" radius="md" component="a" href={props.githubLink}
                        target="_blank">
                    GitHub Repo
                </Button>
            }
        </Group>
    </Card>
}

export default ProjectCard;