import { Box, Grid, Spinner, Container } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { getProducts } from '../api/products';
import { HEADER_HEIGHT } from '../components/Header';
import { ProductCard } from '../components/ProductCard';
import { Searchbar } from '../components/Searchbar';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      const data = await getProducts();

      setLoading(false);
      setProducts(data);
    };

    fetchData();
  }, []);

  return (
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
          <Grid
            templateColumns={{
              base: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
              lg: 'repeat(4, 1fr)',
            }}
            gap={{
              base: 4,
              lg: 6,
            }}
            mt={20}
          >
            {products.map(({ id, title, image, price, label }) => (
              <ProductCard key={id} {...{ title, image, price, label }} />
            ))}
          </Grid>
        )}
      </Grid>
    </Container>
  );
}
