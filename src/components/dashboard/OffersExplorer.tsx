'use client'

import { useState } from 'react'
import {
  Badge,
  Card,
  Group,
  Input,
  NativeSelect,
  SimpleGrid,
  Stack,
  Text,
  Title
} from '@mantine/core'
import { getPlatform, offers, platforms } from './data'

const allPlatforms = 'all-platforms'
const allModes = 'all-modes'
const allSeniorities = 'all-seniorities'
const allRegions = 'all-regions'

export function OffersExplorer() {
  const [query, setQuery] = useState('')
  const [platformFilter, setPlatformFilter] = useState(allPlatforms)
  const [modeFilter, setModeFilter] = useState(allModes)
  const [seniorityFilter, setSeniorityFilter] = useState(allSeniorities)
  const [regionFilter, setRegionFilter] = useState(allRegions)

  const filteredOffers = offers.filter((offer) => {
    const platform = getPlatform(offer.platformId)
    const haystack = [
      offer.title,
      offer.company,
      offer.location,
      offer.summary,
      platform?.name ?? '',
      ...offer.stack
    ]
      .join(' ')
      .toLowerCase()

    if (query && !haystack.includes(query.toLowerCase())) {
      return false
    }

    if (platformFilter !== allPlatforms && offer.platformId !== platformFilter) {
      return false
    }

    if (modeFilter !== allModes && offer.mode !== modeFilter) {
      return false
    }

    if (seniorityFilter !== allSeniorities && offer.seniority !== seniorityFilter) {
      return false
    }

    if (regionFilter !== allRegions && offer.region !== regionFilter) {
      return false
    }

    return true
  })

  return (
    <Stack gap='lg'>
      <Card radius='xl' padding='xl' shadow='sm'>
        <Group justify='space-between' align='flex-end' gap='lg'>
          <div>
            <Title order={2}>Ofertas de empleo</Title>
            <Text c='dimmed' mt={6}>
              Busqueda unificada de roles tech en espanol con foco en relacion de dependencia.
            </Text>
          </div>
          <Badge color='teal' variant='light' radius='xl' size='lg'>
            {filteredOffers.length} resultados
          </Badge>
        </Group>

        <SimpleGrid cols={{ base: 1, md: 2, xl: 5 }} spacing='md' mt='xl'>
          <Input
            value={query}
            onChange={(event) => setQuery(event.currentTarget.value)}
            placeholder='Buscar por stack, empresa o rol'
            radius='xl'
          />
          <NativeSelect
            radius='xl'
            value={platformFilter}
            onChange={(event) => setPlatformFilter(event.currentTarget.value)}
            data={[
              { value: allPlatforms, label: 'Todas las plataformas' },
              ...platforms.map((platform) => ({
                value: platform.id,
                label: platform.name
              }))
            ]}
          />
          <NativeSelect
            radius='xl'
            value={modeFilter}
            onChange={(event) => setModeFilter(event.currentTarget.value)}
            data={[
              { value: allModes, label: 'Todas las modalidades' },
              { value: 'Remoto', label: 'Remoto' },
              { value: 'Hibrido', label: 'Hibrido' },
              { value: 'Presencial', label: 'Presencial' }
            ]}
          />
          <NativeSelect
            radius='xl'
            value={seniorityFilter}
            onChange={(event) => setSeniorityFilter(event.currentTarget.value)}
            data={[
              { value: allSeniorities, label: 'Todos los seniorities' },
              { value: 'Junior', label: 'Junior' },
              { value: 'Semi Senior', label: 'Semi Senior' },
              { value: 'Senior', label: 'Senior' },
              { value: 'Lead', label: 'Lead' }
            ]}
          />
          <NativeSelect
            radius='xl'
            value={regionFilter}
            onChange={(event) => setRegionFilter(event.currentTarget.value)}
            data={[
              { value: allRegions, label: 'Todas las regiones' },
              ...Array.from(new Set(offers.map((offer) => offer.region)))
                .sort((a, b) => a.localeCompare(b))
                .map((region) => ({
                  value: region,
                  label: region
                }))
            ]}
          />
        </SimpleGrid>
      </Card>

      <SimpleGrid cols={{ base: 1, xl: 2 }} spacing='lg'>
        {filteredOffers.map((offer) => {
          const platform = getPlatform(offer.platformId)

          return (
            <Card key={offer.id} radius='xl' padding='xl' shadow='sm'>
              <Group justify='space-between' align='flex-start' gap='md'>
                <div>
                  <Title order={3}>{offer.title}</Title>
                  <Text c='dimmed' mt={4}>
                    {offer.company} · {offer.location}
                  </Text>
                </div>
                <Badge color='dark' variant='outline' radius='xl'>
                  {offer.seniority}
                </Badge>
              </Group>

              <Group gap='xs' mt='md'>
                <Badge color='teal' variant='light'>
                  {platform?.name}
                </Badge>
                <Badge color='lime' variant='light'>
                  {offer.mode}
                </Badge>
                <Badge color='gray' variant='light'>
                  {offer.salary}
                </Badge>
              </Group>

              <Text mt='lg'>{offer.summary}</Text>

              <Group gap='xs' mt='lg'>
                {offer.stack.map((tech) => (
                  <Badge key={tech} variant='outline' radius='xl'>
                    {tech}
                  </Badge>
                ))}
              </Group>

              <Group justify='space-between' mt='xl'>
                <Text size='sm' c='dimmed'>
                  Publicada: {offer.postedAt}
                </Text>
                <Text size='sm' fw={600}>
                  {platform?.region}
                </Text>
              </Group>
            </Card>
          )
        })}
      </SimpleGrid>

      {filteredOffers.length === 0 ? (
        <Card radius='xl' padding='xl' shadow='sm'>
          <Title order={3}>No hay coincidencias</Title>
          <Text c='dimmed' mt='sm'>
            Ajusta los filtros o prueba otra combinacion de stack, region o modalidad.
          </Text>
        </Card>
      ) : null}
    </Stack>
  )
}
