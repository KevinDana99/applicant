'use client'

import { MantineProvider, createTheme, ColorSchemeScript } from '@mantine/core'

const theme = createTheme({
  primaryColor: 'indigo',
  fontFamily: "'Avenir Next', 'Segoe UI', sans-serif",
  headings: {
    fontFamily: "'Avenir Next', 'Segoe UI', sans-serif"
  },
  radius: {
    md: '8px',
    xl: '16px'
  },
  colors: {
    indigo: [
      '#eef2ff',
      '#e0e7ff',
      '#c7d2fe',
      '#a5b4fc',
      '#818cf8',
      '#6366f1',
      '#4f46e5',
      '#4338ca',
      '#3730a3',
      '#312e81'
    ]
  },
  components: {
    Card: {
      styles: {
        root: {
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
        }
      }
    },
    TextInput: {
      styles: {
        input: {
          backgroundColor: 'white',
          '&:focus': {
            borderColor: '#339af0'
          }
        }
      }
    },
    Select: {
      styles: {
        input: {
          backgroundColor: 'white',
          '&:focus': {
            borderColor: '#339af0'
          }
        }
      }
    },
    Textarea: {
      styles: {
        input: {
          backgroundColor: 'white',
          '&:focus': {
            borderColor: '#339af0'
          }
        }
      }
    }
  }
})

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ColorSchemeScript defaultColorScheme="light" />
      <MantineProvider theme={theme} defaultColorScheme="light">
        {children}
      </MantineProvider>
    </>
  )
}
