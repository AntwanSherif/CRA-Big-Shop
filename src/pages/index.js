import { Box, Grid, Heading, HStack, Container } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { getCategories, getProducts } from '../api/products';
import CategoryLabel from '../components/CategoryLabel';
import LoadingSpinner from '../components/LoadingSpinner';
import PageLayout from '../components/PageLayout';
import { ProductCard } from '../components/ProductCard';
import { Searchbar } from '../components/Searchbar';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState();

  const isSuccess = !isLoading && !isError;

  useEffect(() => {
    setIsLoading(true);

    const fetchData = async () => {
      try {
        const [productsData, categoriesData] = await Promise.all([
          getProducts(filter),
          getCategories(),
        ]);

        setProducts(productsData);
        setCategories(categoriesData);
      } catch (isError) {
        setIsError('Something went wrong. Please try again!');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [filter]);

  return (
    <PageLayout>
      <Box mt={5} px={3}>
        <Searchbar value={searchTerm} onChange={setSearchTerm} />
      </Box>

      <Grid minH='50vh' p={3}>
        {isLoading && (
          <Container centerContent justifyContent='center'>
            <LoadingSpinner />
          </Container>
        )}
        {isError && (
          <Container centerContent justifyContent='center'>
            <Heading color='red' size='lg'>
              An error occurred. Try again later.
            </Heading>
          </Container>
        )}

        {isSuccess && (
          <>
            <HStack>
              <>
                <Heading size='sm' fontWeight='normal' mr={3}>
                  Quick Filter:
                </Heading>
                {categories.map(category => (
                  <CategoryLabel
                    key={category}
                    onClick={() =>
                      setFilter(filter === category ? undefined : category)
                    }
                  >
                    {category}
                  </CategoryLabel>
                ))}
              </>
            </HStack>

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
              mt={16}
            >
              {products.map(({ id, title, image, price, label }) => (
                <ProductCard key={id} {...{ title, image, price, label }} />
              ))}
            </Grid>
          </>
        )}
      </Grid>
    </PageLayout>
  );
}
