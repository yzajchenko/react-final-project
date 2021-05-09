import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { PRODUCTS_DETAILS_REQUEST } from "../actions";
import ProductsDetailsPageLayout from "../components/ProductsDetailsPageLayout";

const ProductsDetailsContainer = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const { productInfo, isLoading } = useSelector(
    state => state.productsDetails
  );

  useEffect(() => {
    dispatch(PRODUCTS_DETAILS_REQUEST(productId));
  }, []);

  return (
    <ProductsDetailsPageLayout isLoading={isLoading} products={productInfo} />
  );
};

export default ProductsDetailsContainer;
