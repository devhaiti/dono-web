import splitbee from '@splitbee/web'
import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useEffect } from 'react'
import { Main } from '@/components/layouts'

import '@/assets/fonts/_jakarta_sans.css'
import '@/assets/styles/global.css'
import '@/assets/styles/styles.css'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (process.env.NODE_ENV !== 'development') {
      splitbee.init({
        token: process.env.SPLITBEE_TOKEN,
        disableCookie: false,
        scriptUrl: '/bee.js',
        apiUrl: '/_hive'
      })
    }
  }, [])

  return (
    <ThemeProvider attribute='class' defaultTheme='light' enableSystem={false}>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Main>
        <Component {...pageProps} />
      </Main>
    </ThemeProvider>
  )
}

export default MyApp
