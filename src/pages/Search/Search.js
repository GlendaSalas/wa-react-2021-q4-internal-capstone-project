import { GridProduct } from '../../components/Products/Grid/Grid';
import { useHistory, useLocation } from 'react-router';
import Layout from '../../components/Layout/Layout';
import LoadingView from '../../components/commons/Loader/Loader';
import NotResultsImage from '../../assets/nothing.png';
import StylesGeneral from '../../components/commons/StylesGeneral/StylesG';
import useSearch from '../../utils/hooks/useSearch';

export const Search = () => {
  const search = useLocation().search;
  const searchParam = new URLSearchParams(search);
  const searchTerm = searchParam.get('q') || '';
  const page = parseInt(searchParam.get('page') || '1');
  const history = useHistory();

  const handleSetPage = (page) => {
    history.push({
      pathname: '/search',
      search: `?q=${searchTerm}&page=${page}`,
    });
  };
  const { data, isLoading } = useSearch(searchTerm, page);

  if (!data && isLoading) {
    return <LoadingView />;
  }

  return (
    <Layout>
      <div style={{ padding: '16px' }}>
        {data && data?.products.length > 0 && !isLoading && (
          <>
            <br />
            <StylesGeneral variant="h4">{`Showing ${data.pagination.totalResults} results for search: "${searchTerm}"`}</StylesGeneral>
            <br />
            <GridProduct
              products={data.products}
              pagination={data.pagination}
              onSetPage={handleSetPage}
              showPagination={true}
            />
          </>
        )}
        {data?.products.length === 0 && !isLoading && (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginTop: '20px',
            }}
          >
            <StylesGeneral align="center">{`Not results found for search: "${searchTerm}"`}</StylesGeneral>
            <img src={NotResultsImage} width="300" height="300" alt="no results" />
          </div>
        )}
      </div>
    </Layout>
  );
};
