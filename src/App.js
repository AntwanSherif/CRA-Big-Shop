import {
  ChakraProvider,
  Box,
  Grid,
  Spinner,
  theme,
  Container,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { Header, HEADER_HEIGHT } from './components/Header';
import { ProductCard } from './components/ProductCard';
import { Searchbar } from './components/Searchbar';

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setLoading(true);

    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => {
        setLoading(false);
        setProducts(json);
      });
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign='center' fontSize='xl'>
        <Header />

        <Container maxW='container.xl' h='100%'>
          <Box mt={5} px={3}>
            <Searchbar value={searchTerm} onChange={setSearchTerm} />
          </Box>

          <Grid minH={`calc(100vh - ${HEADER_HEIGHT})`} p={3}>
            {loading && (
              <Spinner
                thickness='4px'
                speed='0.65s'
                emptyColor='gray.200'
                color='blue.500'
                size='xl'
              />
            )}

            {!loading && (
              <Grid templateColumns='repeat(4, 1fr)' gap={6} mt={20}>
                {products.map(({ id, title, image, price }) => (
                  <ProductCard
                    key={id}
                    {...{ title, image, price }}
                    isNew={!(id % 3)}
                  />
                ))}
              </Grid>
            )}
          </Grid>
        </Container>
      </Box>
    </ChakraProvider>
  );
}

export default App;
