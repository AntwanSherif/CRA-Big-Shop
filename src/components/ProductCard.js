import { Box, Image, Badge, Text } from '@chakra-ui/react';

const LABELS_COLORS = {
  new: 'teal',
  'out of stock': 'red',
  'last piece': 'yellow',
};

export function ProductCard({ id, title, image, price, label }) {
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

      <Image
        src={image}
        alt={title}
        boxSize={{ base: '150px', sm: '200px', md: '250px' }}
        objectFit='contain'
        mx='auto'
        mt={5}
      />

      <Box p='6'>
        <Box
          mt='1'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
          isTruncated
        >
          {title}
        </Box>

        <Text fontSize='md'>${price}</Text>
      </Box>
    </Box>
  );
}
