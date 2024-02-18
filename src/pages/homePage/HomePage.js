import React, { useCallback, useEffect, useState } from "react";
import Loader from "../../components/loader/Loader";
import ProductList from "../../components/productList/ProductList";
import Sidebar from "../../components/slider/Slider";
import UseLoader from "../../hook/UseLoader";
import { getList } from "../../services/productListService";
import "./Home.css";
import { LeftSideBar } from "../../components/leftSideBar/LeftSideBar";
const HomePage = () => {
  const [loading, setLoading] = UseLoader(false);
  const [state, setState] = useState();

  const fetchData = useCallback(async () => {
    const data = await getList();
    setState(data);
  }, []);

  useEffect(() => {
    setLoading(true);
    fetchData();
    state?.products.length > 0 ? setLoading(false) : setLoading(true);
  }, [fetchData, setLoading, state?.products.length]);
  console.log("state", state);

  return (
    <div className="container my-2">
      <main>
        <Sidebar />
        <div className="container p-2">
          <div className="home-title-md">
            <h3>Ver nuestros productos</h3>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-3">
                <LeftSideBar />
              </div>
              <div className="col-9">
                {loading ? (
                  <Loader />
                ) : (
                  <ProductList products={state?.products} />
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
