import { API_BASE_URL } from '../constants';
import { parseProducts } from '../products';
import { useBaseRequest } from './useBaseRequest';
import { useQuery } from 'react-query';

const useProducts = (filters = [], page = 1) => {
  const { data: ref, isLoading: isLoadingBaseRequest } = useBaseRequest();
  const getProducts = async (signal) => {
    const response = await fetch(
      `${API_BASE_URL}/documents/search?ref=${ref}&q=${encodeURIComponent(
        '[[at(document.type, "product")]]'
      )}&lang=en-us&pageSize=12&page=${page}`,
      {
        signal,
      }
    );
    const data = await response.json();
    if (data && data.results) {
      return parseProducts(data);
    }
  };
  const { data, isLoading } = useQuery(['products', page], async ({ signal }) => getProducts(signal), {
    enabled: !!ref,
  });
  return { data, isLoading: isLoading || isLoadingBaseRequest };
};

export default useProducts;
