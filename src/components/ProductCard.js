import { Box, Image, Badge, Text, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { getProductDetailsRoute } from '../routes/routesNames';

const LABELS_COLORS = {
  new: 'teal',
  'out of stock': 'red',
  'last piece': 'yellow',
};

export function ProductCard({ _id, title, image, price, label, onAddToCart }) {
  return (
    <Box
      maxW='sm'
      borderWidth='1px'
      borderRadius='lg'
      overflow='hidden'
      pos='relative'
    >
      {label && (
        <Box d='flex' justifyContent='flex-end' pos='absolute' right={0}>
          <Badge
            borderRadius='md'
            px='2'
            colorScheme={LABELS_COLORS[label] ?? 'teal'}
            justifySelf='flex-end'
          >
            {label}
          </Badge>
        </Box>
      )}

      <Link to={getProductDetailsRoute(_id)}>
        <Image
          src={image}
          alt={title}
          boxSize={{ base: '150px', sm: '200px', md: '250px' }}
          objectFit='contain'
          mx='auto'
          mt={5}
        />
      </Link>

      <Box p='6'>
        <Link to={getProductDetailsRoute(_id)}>
          <Box
            mt='1'
            fontWeight='semibold'
            as='h4'
            lineHeight='tight'
            isTruncated
          >
            {title}
          </Box>
        </Link>

        <Text fontSize='md'>${price}</Text>
      </Box>

      <Button
        w='100%'
        h={50}
        colorScheme='teal'
        borderTopRadius='none'
        onClick={onAddToCart}
      >
        Add to Cart
      </Button>
    </Box>
  );
}
