import axios from 'axios';

export async function getCategories() {
  const products = await getProducts();

  const result = {};
  for (const product of products) {
    if (!result[product.category]) {
      result[product.category] = product.category;
    }
  }

  return Object.keys(result);
}

export async function getProducts(category) {
  const { data } = await axios.get('/products', {
    params: {
      category,
    },
  });

  return data;
}

export async function getProduct(id) {
  const { data } = await axios.get(`/product/${id}`);
  return data;
}
