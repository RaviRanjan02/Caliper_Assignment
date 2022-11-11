import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import ProductsCard from "../Components/ProductsCard";
import { getProduce } from "../Redux/ProductReducer/action";
import styles from "./Products.module.css";

const Product = () => {
  const dispatch = useDispatch();

  const Products = useSelector((state) => state.produce.produce);

  const navigate = useNavigate()

  useEffect(() => {
    dispatch(getProduce());
  }, []);

  return (
    <div className={styles.Products_Main}>
      <div className={styles.Product_Banner}>
        <h1>Products of Hydroponic Farming in India </h1>
      </div>
      <div>
        {Products.length > 0 &&
          Products.map((el) => {
            return (
              <div key={el.id} onClick={()=>navigate(`/${el.id}`)}>
               
                <ProductsCard key={el.id} data={el} />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Product;
