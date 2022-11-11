import React from "react";
import styles from "./Contact.module.css";
const Contact = () => {
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
            <form>
            <div className={styles.Contact_Sub_Main_Forms_Input}>
            <input type="text" placeholder="Name"></input></div>
            <div className={styles.Contact_Sub_Main_Forms_Input}>
            <input type="text" placeholder="Place"></input></div>
            <div className={styles.Contact_Sub_Main_Forms_Input}>
            <input type="text" placeholder="Email"></input></div>
            <div className={styles.Contact_Sub_Main_Forms_Input}>
            <input type="text" placeholder="Phone"></input></div>
            <div className={styles.Contact_Sub_Main_Forms_Input}> 
            <input type="text" placeholder="Description"></input></div>
            <div className={styles.Contact_Sub_Main_Forms_Input}>
            <input type="text" placeholder="Size of land"></input></div>
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
