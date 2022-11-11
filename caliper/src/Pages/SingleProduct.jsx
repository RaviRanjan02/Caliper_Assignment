import React, { useState, useEffect } from "react";
import styles from "../Components/ProductCard.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProduce } from "../Redux/ProductReducer/action";

const SingleProduct = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  const dispatch = useDispatch();

  const data = useSelector((state) => state.produce.produce);

  const [currentData, SetCurrentData] = useState({});

  useEffect(() => {
    if (data?.length === 0) {
      dispatch(getProduce());
    }
  }, [data?.length, dispatch]);

  useEffect(() => {
    if (id) {
      const temprest = data?.find((rest) => rest.id === Number(id));
      temprest && SetCurrentData(temprest);
    }
  }, [data, id]);

  return (
    <div className={styles.ProductsCard_Main}>
      <div className={styles.ProductsCard_Sub_Main}>
        <div className={styles.ProductsCard_Box}>
          <div className={styles.ProductsCard_Image}>
            <img src={currentData?.image} alt=""></img>
          </div>
          <div className={styles.ProductsCard_Name}>
            <p className={styles.ProductsCard_para}>
              Name: {currentData?.Name}
            </p>
          </div>
          <div className={styles.ProductsCard_Categories_Price}>
            <div>
              <p className={styles.ProductsCard_para}>
                Categories: {currentData?.categories}
              </p>
            </div>
            <div>
              <p className={styles.ProductsCard_para}>
                Price: {currentData?.price}
              </p>
            </div>
          </div>
          <div className={styles.ProductsCard_Cart_Buy}>
            <div>
              <button
                className={styles.ProductsCard_button}
                onClick={() => navigate(alert("Item Added Sucessfully"))}
              >
                Add to Cart
              </button>
            </div>
            <div>
              <button
                className={styles.ProductsCard_button}
                onClick={() =>
                  navigate(alert("Your Order has been sucessfully  Placed"))
                }
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
