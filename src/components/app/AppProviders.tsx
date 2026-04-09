'use client'

import { MantineProvider, createTheme } from '@mantine/core'

const theme = createTheme({
  primaryColor: 'teal',
  fontFamily: "'Avenir Next', 'Segoe UI', sans-serif",
  headings: {
    fontFamily: "'Avenir Next', 'Segoe UI', sans-serif"
  },
  radius: {
    md: '14px',
    xl: '24px'
  }
})

export function AppProviders({ children }: { children: React.ReactNode }) {
  return <MantineProvider theme={theme}>{children}</MantineProvider>
}
