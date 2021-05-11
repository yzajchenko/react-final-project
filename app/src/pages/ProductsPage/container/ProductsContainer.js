import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { PRODUCTS_REQUEST } from "../actions";
import { ADD_PRODUCT } from "../../BasketPage/actions";
import ProductsPageLayout from "../components/ProductsPageLayout";
import ROUTES from "../../../routes/routesNames";

const ProductsContainer = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { products, isLoading } = useSelector(state => state.products);

  useEffect(() => {
    dispatch(PRODUCTS_REQUEST());
  }, []);

  const handleGoToProductDetails = useCallback(
    productId => {
      history.push(`${ROUTES.PRODUCTS_PAGE}/${productId}`);
    },
    [dispatch]
  );

  const handleChangeToPage = useCallback(
    event => {
      const numberPage = event.target.innerText;
      dispatch(PRODUCTS_REQUEST(numberPage));
    },
    [dispatch]
  );

  const handleAddToOrder = useCallback(
    product => {
      dispatch(ADD_PRODUCT(product));
    },
    [dispatch]
  );

  return (
    <ProductsPageLayout
      productsList={products}
      isLoading={isLoading}
      handleGoToProductDetails={handleGoToProductDetails}
      handleChangeToPage={event => handleChangeToPage(event)}
      handleAddToOrder={product => handleAddToOrder(product)}
    />
  );
};

export default ProductsContainer;
