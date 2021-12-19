import { API_BASE_URL } from '../constants';
import { parseProducts } from '../products';
import { useBaseRequest } from './useBaseRequest';
import { useQuery } from 'react-query';

const useSearch = (searchTerm, page) => {
  const { data: ref, isLoading: isLoadingBaseRequest } = useBaseRequest();
  const getProducts = async (signal) => {
    if (!searchTerm) {
      return;
    }
    const response = await fetch(
      `${API_BASE_URL}/documents/search?ref=${ref}&q=${encodeURIComponent(
        '[[at(document.type, "product")]]'
      )}&q=${encodeURIComponent(`[[fulltext(document, "${searchTerm}")]]`)}&lang=en-us&pageSize=12&page=${page}`,
      {
        signal,
      }
    );
    const data = await response.json();
    if (data && data.results) {
      return parseProducts(data);
    }
  };
  const { data, isLoading } = useQuery(['search_products', searchTerm], async ({ signal }) => getProducts(signal), {
    enabled: !!ref,
  });
  return { data, isLoading: isLoading || isLoadingBaseRequest };
};

export default useSearch;
