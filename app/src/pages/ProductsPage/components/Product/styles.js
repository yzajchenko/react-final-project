const styles = () => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  product: {
    padding: "40px 24px 32px",
    background: "#fff",
    boxShadow: "16px 16px 48px rgb(0 0 0 / 10%)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    margin: "5px"
  },
  productImg: {
    width: "100px",
    height: "100px"
  },
  name: {
    margin: "30px 0 0",
    textTransform: "capitalize"
  },
  "productImg img": {
    width: "100%",
    height: "auto"
  },
  handle: {
    margin: "10px 0 0 0"
  },
  btn: {
    marginRight: "10px"
  }
});

export default styles;
