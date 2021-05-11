import { useState, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";

import HeaderPageLayout from "../components/HeaderPageLayout";
import { HANDLE_LOG_OUT } from "../../../pages/SingInPage/actions";

import { useSelector } from "react-redux";
const HeaderContainer = () => {
  const dispatch = useDispatch();
  const { isAuth } = useSelector(state => state.signIn);
  const { itemList } = useSelector(state => state.order);
  const [anchorEl, setAnchorEl] = useState(false);

  const handleMenu = useCallback(event => {
    setAnchorEl(event.currentTarget);
  }, []);

  const handleClose = useCallback(() => {
    setAnchorEl(null);
  }, []);

  useEffect(() => {
    document.body.style.margin = "0";
  }, []);

  const handleLogOut = useCallback(() => {
    localStorage.clear();
    dispatch(HANDLE_LOG_OUT());
  }, []);

  return (
    <HeaderPageLayout
      handleMenu={handleMenu}
      handleClose={handleClose}
      isAuth={isAuth}
      anchorEl={anchorEl}
      handleLogOut={handleLogOut}
      itemList={itemList}
    />
  );
};

export default HeaderContainer;
