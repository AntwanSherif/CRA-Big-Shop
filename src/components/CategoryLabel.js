import { Tag } from '@chakra-ui/react';
import React from 'react';

export default function CategoryLabel({ onClick, children }) {
  return (
    <Tag
      size='lg'
      variant='outline'
      colorScheme='teal'
      cursor='pointer'
      onClick={onClick}
    >
      {children}
    </Tag>
  );
}
