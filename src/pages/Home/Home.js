import Banner from '../../components/commons/Banner/Banner';
import Categories from '../../components/Categories/Categories';
import Layout from '../../components/Layout/Layout';
import Products from '../../components/Products/Products';
import React from 'react';

export const Home = () => {
  return (
    <Layout>
      <Banner />
      <Categories />
      <Products />
    </Layout>
  );
};
