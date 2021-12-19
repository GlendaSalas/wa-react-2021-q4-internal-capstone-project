import { API_BASE_URL } from '../constants';
import { useQuery } from 'react-query';

const useBaseRequest = () => {
  return useQuery('baseRequest', async ({ signal }) => {
    const response = await fetch(API_BASE_URL, {
      signal,
    });
    const json = await response.json();
    if (json.refs && json.refs[0]) {
      return json.refs[0].ref;
    } else {
      throw new Error('Not found');
    }
  });
};
export { useBaseRequest };
