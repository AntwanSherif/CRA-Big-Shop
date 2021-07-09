import { Container } from '@chakra-ui/react';
import React from 'react';

export default function PageLayout({ children }) {
  return (
    <Container maxW='container.xl' h='100%'>
      {children}
    </Container>
  );
}
