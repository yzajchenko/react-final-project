const styles = () => ({
  progress: {
    position: "absolute",
    top: "50%",
    left: "50%",
    position: "fixed"
  },
  root: {
    width: "100%",
    maxWidth: 700,
    margin: "0 auto"
  },
  productImg: {
    width: "100px",
    height: "100px"
  },
  "productImg img": {
    width: "100%",
    height: "auto"
  },
  name: {
    width: 100,
    textAlign: "left",
    textTransform: "capitalize"
  },
  price: {
    textAlign: "center",
    fontSize: "14px"
  },
  title: {
    textAlign: "center",
    margin: "10px 0 0 0",
    fontSize: "18px"
  },
  totalPrice: {
    textAlign: "center",
    margin: "10px 0 0 0",
    fontSize: "16px"
  },
  btn: {
    margin: "30px auto",
    display: "block"
  },
  ".btn a": {
    textDecoration: "none"
  },
  quantity: { textAlign: "center", maxWidth: "50px" },
  btnCatalog: {
    margin: "30px auto",
    display: "block"
  }
});

export default styles;
