/* eslint-disable no-unused-vars */
import * as S from './ProductDetails.css';
import { ProductDescription } from '../../components/Products/Description/Description';
import { ProductImage } from '../../components/Products/Image/Image';
import { ProductInfo } from '../../components/Products/Information/Information';
import { ProductSpecs } from '../../components/Products/Specifications/Specifications';
import { useParams } from 'react-router-dom';
import { useProductDetail } from '../../utils/hooks/useProductDetail';
import Button from '../../components/commons/Button/Button';
import Layout from '../../components/Layout/Layout';
import LoadingView from '../../components/commons/Loader/Loader';
import React from 'react';
import StylesGeneral from '../../components/commons/StylesGeneral/StylesG';

const ProductDetail = () => {
  const { productid } = useParams();
  const { data, isLoading } = useProductDetail(productid);
  if (isLoading) {
    return <LoadingView />;
  }
  return (
    <>
      {data && !isLoading && (
        <Layout>
          <S.ProductDetailWrapper>
            <S.ProductImageWrapper>
              <StylesGeneral variant="h2">{data.name}</StylesGeneral>
              <StylesGeneral variant="h6" color="#666">
                SKU: {data.sku}
              </StylesGeneral>
              <ProductImage product={data} />
            </S.ProductImageWrapper>
            <S.ProductDescription>
              <S.ButtonWrapper>
                <Button onClick={() => {}}>Add to cart </Button>
              </S.ButtonWrapper>
              <ProductInfo product={data} />
              <ProductDescription product={data} />
              <ProductSpecs product={data} />
            </S.ProductDescription>
          </S.ProductDetailWrapper>
        </Layout>
      )}
    </>
  );
};

export default ProductDetail;
