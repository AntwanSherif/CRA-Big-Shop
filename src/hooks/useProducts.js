import { useState, useEffect } from 'react';
import { getProducts } from '../api/products';

export function useProducts(filter) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);
  const isSuccess = !isLoading && !isError;

  useEffect(() => {
    setIsLoading(true);

    const fetchData = async () => {
      try {
        const productsData = await getProducts(filter);
        setProducts(productsData);
      } catch (isError) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [filter]);

  return { products, isLoading, isError, isSuccess };
}
