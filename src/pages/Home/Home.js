import BannerSlider from '../../components/commons/BannerSlider/Banner';
import Categories from '../../components/Categories/Categories';
import Layout from '../../components/Layout/Layout';
import Products from '../../components/Products/Products';
import React from 'react';

export const Home = () => {
  return (
    <Layout>
      <BannerSlider />
      <Categories />
      <Products />
    </Layout>
  );
};
