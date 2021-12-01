import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  fonts:{
    heading: 'Poppins',
    body: 'Poppins'
  },
  colors: {
    blue:{
      "700": "#010D82",
      "200": "#51C9FF"
    }
  },
  styles: {
    global: {
      "html, body": {
        scrollBehavior: "smooth"
      }
    }
  }
})