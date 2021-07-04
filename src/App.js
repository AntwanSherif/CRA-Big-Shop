import { ChakraProvider, Box, theme } from '@chakra-ui/react';
import { Header } from './components/Header';
import Routes from './routes';
import { BrowserRouter as Router } from 'react-router-dom';

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Box textAlign='center' fontSize='xl'>
          <Header />
          <Routes />
        </Box>
      </Router>
    </ChakraProvider>
  );
}
