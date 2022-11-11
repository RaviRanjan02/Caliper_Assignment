import React from "react";
import styles from "./ProductCard.module.css";

const ProductsCard = ({ data }) => {
  return (
    <div className={styles.ProductsCard_Main}>
      <div className={styles.ProductsCard_Sub_Main}>
        <div className={styles.ProductsCard_Box}>
          <div className={styles.ProductsCard_Image}>
            <img src={data.image} alt=""></img>
          </div>
          <div className={styles.ProductsCard_Name}>
            <p className={styles.ProductsCard_para}>Name: {data.Name}</p>
          </div>
          <div className={styles.ProductsCard_Categories_Price}>
            <div>
              <p className={styles.ProductsCard_para}>
                Categories: {data.categories}
              </p>
            </div>
            <div>
              <p className={styles.ProductsCard_para}>Price: {data.price}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
