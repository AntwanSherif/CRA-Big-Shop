import { ChakraProvider, Box, Grid, Spinner, theme } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { Header, HEADER_HEIGHT } from './components/Header';
import { ProductCard } from './components/ProductCard';

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

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
      </Box>
    </ChakraProvider>
  );
}

export default App;
