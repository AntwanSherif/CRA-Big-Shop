import { useState, useEffect } from 'react';
import { getCategories } from '../api/products';

export function useCategories(filter) {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);
  const isSuccess = !isLoading && !isError;

  useEffect(() => {
    setIsLoading(true);

    const fetchData = async () => {
      try {
        const categoriesData = await getCategories();
        setCategories(categoriesData);
      } catch (isError) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [filter]);

  return { categories, isLoading, isError, isSuccess };
}
