import Product from "./Product";
import { FaSpinner } from "react-icons/fa";
import "./Products.scss";
import { useSelector } from "react-redux";
function Products({ isloading, iserror, errormessage }) {
  const ProductReducer = useSelector((state) => state.ProductReducer.product);

  const displaydata = () => {
    return (
      <>
        <div className="productcont">
          {ProductReducer.map((datas) => {
            return <Product key={datas._id} prod={datas}></Product>;
          })}
        </div>
        <div className="footer">
          <h5>akibrotsamuelas@gmail.com</h5>
        </div>
      </>
    );
  };

  return (
    <div>
      {isloading ? (
        <div className="spinner">
          <FaSpinner className="spinnericon" />
        </div>
      ) : iserror ? (
        <div className="error">{errormessage}</div>
      ) : (
        displaydata()
      )}
    </div>
  );
}

export default Products;
