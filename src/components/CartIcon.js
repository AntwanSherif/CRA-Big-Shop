import { IconButton } from '@chakra-ui/react';
import {
  HiOutlineShoppingCart as EmptyCart,
  HiShoppingCart as Cart,
} from 'react-icons/hi';

export const CartIcon = ({ numberOfAddedToBasketItems = 0 }) => {
  const isEmpty = numberOfAddedToBasketItems === 0;

  return (
    <IconButton
      size='md'
      fontSize='lg'
      aria-label={`${numberOfAddedToBasketItems} items added to basket. Click to go to checkout page`}
      variant='ghost'
      color='current'
      marginLeft='2'
      icon={isEmpty ? <EmptyCart /> : <Cart />}
    />
  );
};
