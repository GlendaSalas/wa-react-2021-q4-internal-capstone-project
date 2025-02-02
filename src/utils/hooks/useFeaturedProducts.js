import { API_BASE_URL } from '../constants';
import { parseProducts } from '../products';
import { useBaseRequest } from './useBaseRequest';
import { useQuery } from 'react-query';

export const useFeaturedProducts = () => {
  const { data: ref, isLoading: isLoadingBaseRequest } = useBaseRequest();
  const getFeaturedProducts = async (signal) => {
    const response = await fetch(
      `${API_BASE_URL}/documents/search?ref=${ref}&q=${encodeURIComponent(
        '[[at(document.type, "product")]]'
      )}q=${encodeURIComponent('[[at(document.type, "Featured")]]')}&lang=en-us&pageSize=16`,
      {
        signal,
      }
    );
    const data = await response.json();
    if (data && data.results) {
      return parseProducts(data);
    }
  };
  const { data, isLoading } = useQuery('featured_products', async ({ signal }) => getFeaturedProducts(signal), {
    enabled: !!ref,
  });
  return { data, isLoading: isLoading || isLoadingBaseRequest };
};
