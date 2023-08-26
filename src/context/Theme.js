import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  initialColorMode: 'light',
  useSystemColorMode: true,
  colors: {
    light: {
      bgColor: 'gray.100',
      textColor: '#48BB78',
      iconColor: '#545454',
    },
    dark: {
      bgColor: 'gray.800',
      textColor: '#ED8936',
    },
  },
});


export default theme;

