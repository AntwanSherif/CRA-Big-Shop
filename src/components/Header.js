import { Container, Box, Flex, Spacer, Heading } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';

export const HEADER_HEIGHT = '80px';

export function Header() {
  return (
    <Box boxShadow='xl' p='3' height={HEADER_HEIGHT} as='header'>
      <Container maxW='container.xl' h='100%'>
        <Flex align='center' h='100%'>
          <Heading as='h3' size='xl' color='teal.400'>
            BIG SHOP!
          </Heading>
          <Spacer />
          <ColorModeSwitcher justifySelf='flex-end' />
        </Flex>
      </Container>
    </Box>
  );
}
