import React from "react";
import styles from "./Services.module.css";

const Services = () => {
  const data = [
    {
      image:
        "https://static.wixstatic.com/media/da6885_2805988b152c48c8ae833fc1e2e8fb11~mv2.png/v1/fill/w_500,h_312,al_c,q_85,enc_auto/vertical%20NFT%20system.png",
      Title: "VERTICAL NFT SYSTEM",
    },
    {
      image:
        "https://static.wixstatic.com/media/da6885_4aee51ce063048249bada911f575e0d7~mv2.jpg/v1/fill/w_500,h_312,al_c,q_80,enc_auto/aeroponic.jpg",
      Title: "AEROPONIC SYSTEM",
    },
    {
      image:
        "https://static.wixstatic.com/media/da6885_e9b5fd9a33e24a1693700fc21c01123d~mv2.png/v1/fill/w_500,h_318,al_c,lg_1,q_85,enc_auto/Horizontal%20NFT%20system.png",
      Title: "HORIZONTAL NFT SYSTEM",
    },
    {
      image:
        "https://static.wixstatic.com/media/da6885_f4405da518e44f6389d9603b3582dba6~mv2.png/v1/fill/w_500,h_317,al_c,lg_1,q_85,enc_auto/Indoor%20grow%20system.png",
      Title: "INDOOR GROW SYSTEM",
    },
    {
      image:
        "https://static.wixstatic.com/media/da6885_a55d7a099a804bb59b1e2a02a9295fcc~mv2.png/v1/fill/w_500,h_310,al_c,q_85,enc_auto/DWC%20system%20(Raft%20system).png",
      Title: "DWC SYSTEM OR RAFT SYSTEM",
    },
    {
      image:
        "https://static.wixstatic.com/media/da6885_06205fb0ad6140448ce12fa771af2cbd~mv2.jpg/v1/fill/w_500,h_313,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/dutch-bucket.jpg",
      Title: "DUTCH BUCKET GROW SYSTEM",
    },
    {
      image:
        "https://static.wixstatic.com/media/da6885_5f205ef1e1ac4cfe8f200d734d843223~mv2.png/v1/fill/w_500,h_315,al_c,lg_1,q_85,enc_auto/Zip%20Grow%20System.png",
      Title: "ZIP GROW SYSTEM",
    },
  ];

  return (
    <div className={styles.Services_Main}>
      <div className={styles.Services_Banner}>
        <h1>Commercial Hydroponic Farming System in India</h1>
      </div>
      <div className={styles.Services_Sub_Main}>
        <h2>Technologies for commercial hydroponic urban farming</h2>
        {data.length > 0 &&
          data.map((el) => {
            return (
              <div
                className={styles.Services_Technology_commercial_farming}
                key={el.id}
              >
                <div
                  className={
                    styles.Services_Technology_commercial_farming_Image
                  }
                >
                  <img src={el.image} alt="" />
                </div>
                <div
                  className={
                    styles.Services_Technology_commercial_farming_Title
                  }
                >
                  <p>{el.Title}</p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Services;
