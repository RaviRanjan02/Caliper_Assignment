import React, { useEffect, useState } from "react";
import styles from "./Contact.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addEmployee, getEmployee } from "../Redux/ContactReducer/action";
import { ADD_EMPLOYEE_SUCCESS } from "../Redux/ContactReducer/actionTypes";

const Contact = () => {
  
    const [formData, setFormData] = useState({});
  
    const navigate = useNavigate();
  
    const dispatch = useDispatch();

    const employeeData = useSelector((state) => state.user.employee);


    const handleData = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addEmployee(formData)).then((res) => {
          if (res.type == ADD_EMPLOYEE_SUCCESS) {
            alert("Data is Added Successfully !");
            dispatch(getEmployee());
          }
        });
      };

      useEffect(() => {
        dispatch(getEmployee());
      }, []);

return (
    <div className={styles.Contact_Main}>
      <div className={styles.Contact_Banner}>
        <h1>Contact Us to SetUp Your of Hydroponic Farm in India </h1>
      </div>
      <div className={styles.Contact_Sub_Main}>
        <div className={styles.Contact_Sub_Main_Forms}>
            <div><h2>HYDROPONIC FARMING!
             GET YOUR OWN FARM NOW!</h2></div>
            
            
            <div><h3>
            FILL THIS SHORT FORM,
            WE WILL CALL YOU RIGHT AWAY 
            </h3></div>
            
            <div className={styles.Contact_Sub_Main_Forms_Box}>
            <form onSubmit={handleSubmit}>
            <div className={styles.Contact_Sub_Main_Forms_Input}>
            <input type="text" placeholder="Name" name="name" onChange={handleData}></input></div>
            <div className={styles.Contact_Sub_Main_Forms_Input}>
            <input type="text" placeholder="Place" onChange={handleData} name="place"></input></div>
            <div className={styles.Contact_Sub_Main_Forms_Input}>
            <input type="text" placeholder="Email" onChange={handleData} name="email"></input></div>
            <div className={styles.Contact_Sub_Main_Forms_Input}>
            <input type="text" placeholder="Phone" onChange={handleData} name="phone"></input></div>
            <div className={styles.Contact_Sub_Main_Forms_Input}> 
            <input type="text" placeholder="Description" onChange={handleData} name="description"></input></div>
            <div className={styles.Contact_Sub_Main_Forms_Input}>
            <input type="text" placeholder="Size of land" onChange={handleData} name="sizeofland"></input></div>
            <div className={styles.Contact_Sub_Main_Forms_Input_submit}><input type="submit"></input></div>
            </form>
            </div>
        </div>
        <div className={styles.Contact_Sub_Main_Image}>
          <img
            src="https://static.wixstatic.com/media/da6885_167cbc754c584a67863295fec634c015~mv2.jpg/v1/fill/w_282,h_500,al_c,lg_1,q_80,enc_auto/da6885_167cbc754c584a67863295fec634c015~mv2.jpg"
            alt=""
            width={"100%"}
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
