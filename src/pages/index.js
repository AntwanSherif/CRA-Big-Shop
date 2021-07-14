import { Box, Grid, Heading, HStack, Container } from '@chakra-ui/react';
import { useState } from 'react';
import CategoryLabel from '../components/CategoryLabel';
import LoadingSpinner from '../components/LoadingSpinner';
import PageLayout from '../components/PageLayout';
import { ProductCard } from '../components/ProductCard';
import { Searchbar } from '../components/Searchbar';
import { useProducts, useCategories } from '../hooks';

export default function Products() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState();
  const { products, ...productsQueryInfo } = useProducts(filter);
  const { categories, ...categoriesQueryInfo } = useCategories();

  return (
    <PageLayout>
      <Box mt={5} px={3}>
        <Searchbar value={searchTerm} onChange={setSearchTerm} />
      </Box>

      <Grid minH='50vh' p={3}>
        {productsQueryInfo.isLoading ||
          (categoriesQueryInfo.isLoading && (
            <Container centerContent justifyContent='center'>
              <LoadingSpinner />
            </Container>
          ))}
        {productsQueryInfo.isError ||
          (categoriesQueryInfo.isError && (
            <Container centerContent justifyContent='center'>
              <Heading color='red' size='lg'>
                An error occurred. Try again later.
              </Heading>
            </Container>
          ))}

        {productsQueryInfo.isSuccess && categoriesQueryInfo.isSuccess && (
          <>
            <HStack>
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
              {products.map(({ _id, title, image, price, label }) => (
                <ProductCard
                  key={_id}
                  {...{ _id, title, image, price, label }}
                />
              ))}
            </Grid>
          </>
        )}
      </Grid>
    </PageLayout>
  );
}
