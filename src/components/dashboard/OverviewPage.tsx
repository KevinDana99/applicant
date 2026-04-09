import Link from 'next/link'
import {
  Badge,
  Button,
  Card,
  Grid,
  GridCol,
  Group,
  Progress,
  SimpleGrid,
  Stack,
  Table,
  TableTbody,
  TableTd,
  TableTh,
  TableThead,
  TableTr,
  Text,
  Title
} from '@mantine/core'
import { getPlatform, offers, platforms } from './data'

function getRemoteShare() {
  return Math.round((offers.filter((offer) => offer.mode === 'Remoto').length / offers.length) * 100)
}

function getRegionRows() {
  const regionMap = new Map<string, number>()

  offers.forEach((offer) => {
    regionMap.set(offer.region, (regionMap.get(offer.region) ?? 0) + 1)
  })

  return [...regionMap.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
}

function getRecentOffers() {
  return [...offers]
    .sort((a, b) => b.postedAt.localeCompare(a.postedAt))
    .slice(0, 6)
}

const nichePlatforms = platforms.filter((platform) => platform.category === 'IT y Tech').length

export function OverviewPage() {
  return (
    <Stack gap='lg'>
      <Card
        radius='xl'
        padding='xl'
        style={{
          background:
            'linear-gradient(135deg, rgba(23, 98, 74, 0.96) 0%, rgba(71, 140, 109, 0.92) 55%, rgba(229, 236, 209, 0.9) 100%)',
          color: 'white',
          overflow: 'hidden'
        }}
      >
        <Group justify='space-between' align='flex-end' gap='xl'>
          <div>
            <Badge color='white' variant='light'>
              Focus: hiring devs en espanol
            </Badge>
            <Title order={1} mt='md' maw={640}>
              Dashboard curado para seguir plataformas y oportunidades tech de relacion de dependencia
            </Title>
            <Text mt='md' maw={620} c='rgba(255,255,255,0.88)'>
              Se integraron portales especializados de IT y generalistas con volumen real de posiciones para desarrollo,
              datos, infraestructura y producto.
            </Text>
          </div>
          <Link href='/ofertas'>
            <Button radius='xl' color='dark'>
              Ir a ofertas
            </Button>
          </Link>
        </Group>
      </Card>

      <SimpleGrid cols={{ base: 1, sm: 2, xl: 4 }} spacing='lg'>
        <Card radius='xl' padding='lg' shadow='sm'>
          <Text c='dimmed' size='sm'>
            Plataformas integradas
          </Text>
          <Title order={2} mt={8}>
            {platforms.length}
          </Title>
          <Text size='sm' mt='sm'>
            {nichePlatforms} especializadas en IT y {platforms.length - nichePlatforms} generalistas priorizadas.
          </Text>
        </Card>
        <Card radius='xl' padding='lg' shadow='sm'>
          <Text c='dimmed' size='sm'>
            Ofertas visibles
          </Text>
          <Title order={2} mt={8}>
            {offers.length}
          </Title>
          <Text size='sm' mt='sm'>
            Normalizadas para buscar por stack, seniority, region y modalidad.
          </Text>
        </Card>
        <Card radius='xl' padding='lg' shadow='sm'>
          <Text c='dimmed' size='sm'>
            Mix remoto
          </Text>
          <Title order={2} mt={8}>
            {getRemoteShare()}%
          </Title>
          <Progress color='teal' radius='xl' size='lg' mt='md' value={getRemoteShare()} />
        </Card>
        <Card radius='xl' padding='lg' shadow='sm'>
          <Text c='dimmed' size='sm'>
            Ruta preservada
          </Text>
          <Title order={2} mt={8}>
            `/form`
          </Title>
          <Text size='sm' mt='sm'>
            Se mantiene accesible sin cambios dentro del nuevo dashboard.
          </Text>
        </Card>
      </SimpleGrid>

      <Grid gutter='lg'>
        <GridCol span={{ base: 12, xl: 7 }}>
          <Card radius='xl' padding='xl' shadow='sm'>
            <Group justify='space-between' mb='md'>
              <div>
                <Title order={3}>Actividad reciente</Title>
                <Text c='dimmed' size='sm'>
                  Ultimas ofertas cargadas por fecha
                </Text>
              </div>
              <Link href='/ofertas'>
                <Button variant='light' color='teal' radius='xl'>
                  Ver todas
                </Button>
              </Link>
            </Group>

            <Stack gap='sm'>
              {getRecentOffers().map((offer) => {
                const platform = getPlatform(offer.platformId)

                return (
                  <Card key={offer.id} radius='lg' padding='md' withBorder>
                    <Group justify='space-between' align='flex-start'>
                      <div>
                        <Text fw={700}>{offer.title}</Text>
                        <Text size='sm' c='dimmed'>
                          {offer.company} · {platform?.name}
                        </Text>
                      </div>
                      <Badge color='teal' variant='light'>
                        {offer.mode}
                      </Badge>
                    </Group>
                    <Group gap='xs' mt='md'>
                      {offer.stack.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant='outline' radius='xl'>
                          {tech}
                        </Badge>
                      ))}
                    </Group>
                  </Card>
                )
              })}
            </Stack>
          </Card>
        </GridCol>

        <GridCol span={{ base: 12, xl: 5 }}>
          <Card radius='xl' padding='xl' shadow='sm' h='100%'>
            <Title order={3}>Mercados con mayor volumen</Title>
            <Text c='dimmed' size='sm' mt={4}>
              Recuento de ofertas por region dentro del dataset integrado
            </Text>

            <Table mt='lg' highlightOnHover>
              <TableThead>
                <TableTr>
                  <TableTh>Region</TableTh>
                  <TableTh>Ofertas</TableTh>
                </TableTr>
              </TableThead>
              <TableTbody>
                {getRegionRows().map(([region, total]) => (
                  <TableTr key={region}>
                    <TableTd>{region}</TableTd>
                    <TableTd>{total}</TableTd>
                  </TableTr>
                ))}
              </TableTbody>
            </Table>

            <Card
              radius='xl'
              padding='lg'
              mt='xl'
              style={{
                background: 'var(--panel-muted)'
              }}
            >
              <Text fw={700}>Criterio de integracion</Text>
              <Text size='sm' mt='sm' c='dimmed'>
                Se priorizaron plataformas orientadas a contratacion de developers en espanol para empleo fijo, descartando
                marketplaces centrados en freelance puro.
              </Text>
            </Card>
          </Card>
        </GridCol>
      </Grid>
    </Stack>
  )
}
