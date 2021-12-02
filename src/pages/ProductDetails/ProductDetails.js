import * as S from './ProductDetailWrapper.style';
import { Button } from '../../components/Button/Button';
import { Layout } from '../../components/Layout/Layout';
import { LoadingView } from '../../components/LoadingView/LoadingView';
import { ProductDescription } from '../../components/ProductDescription/ProductDescription';
import { ProductImage } from '../../components/ProductImage/ProductImage';
import { ProductInfo } from '../../components/ProductInfo/ProductInfo';
import { ProductSpecs } from '../../components/ProductSpecs/ProductSpecs';
import { Typography } from '../../components/Typogrphy/Typography';
import { useParams } from 'react-router-dom';
import { useProductDetail } from '../../hooks/useProductDetail';
import React from 'react';
export const ProductDetail = () => {
  const { productid } = useParams();
  const { data, isLoading } = useProductDetail(productid);
  if (isLoading) {
    return React.createElement(LoadingView, null);
  }
  return (
    <>
      {data && !isLoading && (
        <Layout>
          <S.ProductDetailWrapper>
            <S.ProductImageWrapper>
              <Typography variant="h2">{data.name}</Typography>
              <Typography variant="h6" color="#666">
                SKU: {data.sku}
              </Typography>
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

