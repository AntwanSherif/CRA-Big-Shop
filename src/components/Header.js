import { Container, Box, Flex, Spacer, Heading } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { HOME_PAGE, CART_PAGE } from '../routes/routeNames';
import { CartIcon } from './CartIcon';
import { ColorModeSwitcher } from './ColorModeSwitcher';

export const HEADER_HEIGHT = '80px';

export function Header() {
  return (
    <Box boxShadow='xl' p='3' height={HEADER_HEIGHT} as='header'>
      <Container maxW='container.xl' h='100%'>
        <Flex align='center' h='100%'>
          <Link to={HOME_PAGE}>
            <Heading as='h3' size='xl' color='teal.400'>
              BIG SHOP!
            </Heading>
          </Link>
          <Spacer />
          <Link to={CART_PAGE}>
            <CartIcon numberOfAddedToBasketItems={0} />
          </Link>

          <ColorModeSwitcher justifySelf='flex-end' />
        </Flex>
      </Container>
    </Box>
  );
}
