import React from "react";
import styles from "./Navbar.module.css";
import { RiPlantFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate()
  return (
    <div className={styles.Navbar_Main}>
      <div className={styles.Navbar_Sub_Main}>
        <div className={styles.Navbar_Logo} onClick={()=> navigate("/")}>
          <RiPlantFill />
          𝓐𝓬𝓶𝓮𝓕𝓻𝓮𝓼𝓱
        </div>
        <div className={styles.Navbar_Tabs}>
          <div onClick={()=> navigate("/services")}>Services</div>
          <div onClick={()=> navigate("/products")}>Products</div>
          <div onClick={()=> navigate("/contact")}>Contact</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
