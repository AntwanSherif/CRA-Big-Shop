import { ChakraProvider, Box, Heading, Grid, theme } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { ColorModeSwitcher } from './components/ColorModeSwitcher';
import { ProductCard } from './components/ProductCard';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setProducts(json));
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <Heading as="h3" size="2xl" color="teal.400">
            BIG SHOP!
          </Heading>
          <Grid templateColumns="repeat(4, 1fr)" gap={6} mt={20}>
            {products.map(({ id, title, image, price }) => (
              <ProductCard
                key={id}
                {...{ title, image, price }}
                isNew={!(id % 3)}
              />
            ))}
          </Grid>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
