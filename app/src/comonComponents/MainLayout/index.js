import HeaderContainer from "../Header/container/HeaderContainer";
const MainLayout = ({ children }) => {
  return (
    <>
      <HeaderContainer />
      <div>{children}</div>
    </>
  );
};

export default MainLayout;
