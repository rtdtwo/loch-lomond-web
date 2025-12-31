import {Image, Stack, Text, TimelineItem} from "@mantine/core";

type ExperienceStepProps = {
    title: string,
    institution: string,
    icon: string,
    subtitle: string,
    description: string
}

const ExperienceStep = (props: ExperienceStepProps) => {
    return <TimelineItem
        bullet={<Image p={6} src={props.icon} alt={`${props.institution} Logo`}/>}
        title={<Text><b>{props.title}</b> at <b>{props.institution}</b></Text>}>
        <Stack gap="xs" mb="md">
            <Text size="sm" c="gray">{props.subtitle}</Text>
            <Text size="sm" c="gray.7">{props.description}</Text>
        </Stack>
    </TimelineItem>
}

export default ExperienceStep;