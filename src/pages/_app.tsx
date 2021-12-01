import {ChakraProvider} from '@chakra-ui/react'
import { NavBar } from '../components/Navbar'
import { theme } from '../styles/theme.'

import "swiper/css/bundle"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ChakraProvider theme={theme}>
        <NavBar />
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  )
}

export default MyApp
