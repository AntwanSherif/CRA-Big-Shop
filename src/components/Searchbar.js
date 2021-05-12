import { Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import React from 'react';
import { FaSearch } from 'react-icons/fa';

export function Searchbar({ value = '', onChange }) {
  return (
    <InputGroup>
      <Input
        size='lg'
        focusBorderColor='teal.400'
        placeholder='Search...'
        value={value}
        onChange={e => onChange(e.target.value)}
      />
      <InputRightElement h='100%' children={<FaSearch color='green.500' />} />
    </InputGroup>
  );
}
