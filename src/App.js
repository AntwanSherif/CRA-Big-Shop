import {
  ChakraProvider,
  Box,
  Text,
  VStack,
  Grid,
  theme,
} from '@chakra-ui/react';
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
          <VStack spacing={8}>
            <Text>
              Welcome to <Text fontSize="3xl">Everything React!</Text>
            </Text>

            {products.map(({ id, title, image, price }) => (
              <ProductCard key={id} {...{ title, image, price }} />
            ))}
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
