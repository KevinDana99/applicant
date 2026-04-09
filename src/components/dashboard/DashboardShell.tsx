'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  AppShell,
  Badge,
  Box,
  Burger,
  Button,
  Divider,
  Group,
  NavLink,
  ScrollArea,
  Stack,
  Text,
  ThemeIcon
} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { offers, platforms } from './data'

const menuItems = [
  {
    href: '/',
    label: 'Dashboard',
    description: 'Widgets, resumen y actividad'
  },
  {
    href: '/ofertas',
    label: 'Ofertas de empleo',
    description: 'Busqueda, filtros y pipeline'
  },
  {
    href: '/plataformas',
    label: 'Plataformas',
    description: 'Fuentes priorizadas para IT'
  },
  {
    href: '/form/edit',
    label: 'Form',
    description: 'Ruta existente sin cambios'
  }
] as const

export function DashboardShell({
  children
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const [opened, { toggle }] = useDisclosure(false)

  return (
    <AppShell
      header={{ height: 72 }}
      navbar={{
        width: 320,
        breakpoint: 'md',
        collapsed: { mobile: !opened }
      }}
      padding='lg'
      styles={{
        main: {
          background: 'transparent'
        },
        header: {
          background: 'rgba(251, 248, 241, 0.9)',
          borderBottom: '1px solid var(--border)',
          backdropFilter: 'blur(14px)'
        },
        navbar: {
          background: 'transparent',
          borderRight: 'none'
        }
      }}
    >
      <AppShell.Header>
        <Group h='100%' justify='space-between' px='lg'>
          <Group gap='md'>
            <Burger
              opened={opened}
              onClick={toggle}
              hiddenFrom='md'
              size='sm'
              aria-label='Abrir navegacion'
            />
            <Stack gap={0}>
              <Text fw={700} size='lg'>
                Radar de Empleo Tech
              </Text>
              <Text c='dimmed' size='sm'>
                Dashboard para revisar oportunidades en espanol
              </Text>
            </Stack>
          </Group>
          <Group gap='sm' visibleFrom='sm'>
            <Badge color='teal' variant='light' radius='xl'>
              {platforms.length} plataformas activas
            </Badge>
            <Badge color='dark' variant='outline' radius='xl'>
              {offers.length} ofertas normalizadas
            </Badge>
          </Group>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar p='md'>
        <Box
          p='md'
          mb='md'
          style={{
            background: 'var(--panel-bg)',
            border: '1px solid var(--border)',
            borderRadius: 24,
            boxShadow: 'var(--shadow)'
          }}
        >
          <Group justify='space-between' align='flex-start'>
            <div>
              <Text fw={800} size='sm' tt='uppercase' c='teal.8'>
                Hiring OS
              </Text>
              <Text fw={700} size='xl' mt={6}>
                Stack dev en relacion de dependencia
              </Text>
            </div>
            <ThemeIcon color='teal' radius='xl' size='lg' variant='light'>
              IT
            </ThemeIcon>
          </Group>
          <Text c='dimmed' mt='sm' size='sm'>
            Se priorizan portales especializados y generales con presencia real en roles tech en espanol.
          </Text>
        </Box>

        <ScrollArea type='never' style={{ flex: 1 }}>
          <Stack gap='xs'>
            {menuItems.map((item) => {
              const active =
                item.href === '/'
                  ? pathname === '/'
                  : pathname === item.href || pathname.startsWith(`${item.href}/`)

              return (
                <NavLink
                  key={item.href}
                  component={Link}
                  href={item.href}
                  active={active}
                  label={item.label}
                  description={item.description}
                  variant='filled'
                  color='teal'
                  styles={{
                    root: {
                      borderRadius: 18
                    }
                  }}
                  onClick={() => {
                    if (opened) {
                      toggle()
                    }
                  }}
                />
              )
            })}
          </Stack>

          <Divider my='lg' />

          <Box
            p='md'
            style={{
              background: 'rgba(220, 239, 231, 0.85)',
              borderRadius: 22,
              border: '1px solid rgba(23, 98, 74, 0.14)'
            }}
          >
            <Text fw={700}>Cobertura actual</Text>
            <Text size='sm' c='dimmed' mt={4}>
              IT/Tech especifico y generalistas con fuerte seccion dev en espanol.
            </Text>
            <Group gap='xs' mt='md'>
              <Badge variant='white' color='teal'>
                Remoto
              </Badge>
              <Badge variant='white' color='lime'>
                Hibrido
              </Badge>
              <Badge variant='white' color='gray'>
                Presencial
              </Badge>
            </Group>
            <Button
              component={Link}
              href='/ofertas'
              fullWidth
              mt='lg'
              radius='xl'
              color='teal'
            >
              Explorar ofertas
            </Button>
          </Box>
        </ScrollArea>
      </AppShell.Navbar>

      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  )
}
