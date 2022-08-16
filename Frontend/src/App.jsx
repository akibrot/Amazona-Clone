import { Route } from "react-router-dom/cjs/react-router-dom.min";
import "./App.scss";
import Cart from "./components/Cart";
import NavBar from "./components/NavBar";
import ProductDetails from "./components/ProductDetails";
import Products from "./components/Products";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { Add_To_Products } from "./components/redux/actions/actions";
function App() {
  const [isloading, setisloading] = useState(true);
  const [iserror, setiserror] = useState(false);
  const [errormessage, seterrormessage] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios
          .get("http://localhost:8080/from")
          .then((result) => {
            console.log("loading data");
            console.log(result.data);
            dispatch(Add_To_Products(result.data));
          })
          .catch((err) => {
            console.log(err.message);
          });

        setTimeout(() => {
          setisloading(false);
        }, 1000);
      } catch (error) {
        setiserror(true);
        setisloading(false);
        seterrormessage(error.message);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="app">
      <NavBar />
      <div className="sections">
        <Route
          path="/"
          exact
          render={(props) => (
            <Products
              {...props}
              iserror={iserror}
              isloading={isloading}
              errormessage={errormessage}
            />
          )}
        />
        <Route
          path="/productdetails/:id"
          exact
          render={(props) => <ProductDetails {...props} />}
        />
        <Route path="/cart" exact render={(props) => <Cart {...props} />} />
      </div>
    </div>
  );
}

export default App;
