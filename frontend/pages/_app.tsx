import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../chakra/theme'
import { ThirdwebProvider } from '@thirdweb-dev/react'


export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </ThirdwebProvider>
  )
}


