import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import BasketPageLayout from "../components/BasketPageLayout";
import {
  INCREMENT_PRODUCT,
  DECREMENT_PRODUCT,
  ORDER_REQUEST
} from "../actions";

const BasketContainer = () => {
  const dispatch = useDispatch();
  const { itemList, totalPrice } = useSelector(state => state.order);
  const { token } = useSelector(state => state.signIn);

  const handleIncrementQuantity = useCallback(
    product => {
      dispatch(INCREMENT_PRODUCT(product));
    },
    [dispatch]
  );
  const handleDecrementQuantity = useCallback(
    product => {
      if (product.quantity > 0) {
        dispatch(DECREMENT_PRODUCT(product));
      }
    },
    [dispatch]
  );

  const handleOrder = useCallback(() => {
    const order = { customerId: token, totalPrice, itemList };
    dispatch(ORDER_REQUEST(order));
  }, [dispatch]);

  return (
    <BasketPageLayout
      handleIncrementQuantity={product => handleIncrementQuantity(product)}
      handleDecrementQuantity={product => handleDecrementQuantity(product)}
      itemList={itemList}
      totalPrice={totalPrice}
      handleOrder={handleOrder}
    />
  );
};

export default BasketContainer;
