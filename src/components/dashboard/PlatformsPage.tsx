import { Badge, Card, Group, SimpleGrid, Stack, Text, Title } from '@mantine/core'
import { platforms } from './data'

export function PlatformsPage() {
  return (
    <Stack gap='lg'>
      <Card radius='xl' padding='xl' shadow='sm'>
        <Title order={2}>Plataformas integradas</Title>
        <Text c='dimmed' mt='sm'>
          Solo se incluyeron fuentes que encajan con contratacion tech en espanol para empleo fijo. La seccion
          `Freelancer.es` no se incorporo al radar principal por no ser prioritaria para relacion de dependencia.
        </Text>
      </Card>

      <SimpleGrid cols={{ base: 1, md: 2, xl: 3 }} spacing='lg'>
        {platforms.map((platform) => (
          <Card key={platform.id} radius='xl' padding='xl' shadow='sm'>
            <Group justify='space-between' align='flex-start'>
              <div>
                <Title order={3}>{platform.name}</Title>
                <Text size='sm' c='dimmed' mt={4}>
                  {platform.region} · {platform.category}
                </Text>
              </div>
              <Badge color='teal' variant='light'>
                {platform.language}
              </Badge>
            </Group>

            <Text mt='lg'>{platform.focus}</Text>

            <Group gap='xs' mt='lg'>
              {platform.strengths.map((strength) => (
                <Badge key={strength} radius='xl' variant='outline'>
                  {strength}
                </Badge>
              ))}
            </Group>
          </Card>
        ))}
      </SimpleGrid>
    </Stack>
  )
}
