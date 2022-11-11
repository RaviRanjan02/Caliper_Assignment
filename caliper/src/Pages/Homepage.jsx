import React from "react";
import styles from "./Homepage.module.css";

const Homepage = () => {
  const infoImage = [
    {
      image:
        "https://user-images.githubusercontent.com/91020498/201287705-a5a5d968-c390-4728-9d5f-023c67f011e0.jpg",
    },
    {
      image:
        "https://user-images.githubusercontent.com/91020498/201287723-4cb7efa2-1c4f-472d-a4c8-69b0a08b021b.jpg",
    },
    {
      image:
        "https://user-images.githubusercontent.com/91020498/201287674-2dfc24e0-2b12-45b3-bb08-642936edcc2e.jpg",
    },
  ];

  const whatwedoTop = [
    {
      image:
        "https://risehydroponics.in/wp-content/uploads/2021/04/Outdoor-Hydroponics-Farm-Setup-1.png",
      header: "Outdoor Hydroponics Farm Setup",
      description:
        "A 360 degree solution for setting up commercially profitable outdoor hydroponics farms that deliver maximum crop yield.",
    },
    {
      image:
        "https://risehydroponics.in/wp-content/uploads/2021/04/Indoor-Hydroponics-Farm-Setup.png",
      header: "Indoor Hydroponics Farm Setup",
      description:
        "Indoor Farms by Rise Hydroponics, raises crops In an all-round controlled environment monitored by latest technologies.",
    },
    {
      image:
        "https://risehydroponics.in/wp-content/uploads/2021/04/Polyhouse-Structure-Development.png",
      header: "Polyhouse Structure Development",
      description:
        " We build and Install Hydroponics based Poly house- Farming Setups for growing various seasonal and non-seasonal crops.",
    },
  ];

  const whatwedoBottom = [
    {
      image:
        "https://risehydroponics.in/wp-content/uploads/2021/04/Live-Hydroponics-Training-Workshops.png",
      header: "Live Hydroponic Farming Training & Workshops",
      description:
        "Learn Hydroponic Farming on multiple operational farms and gain rich insights on crops, setups and scope.",
    },
    {
      image:
        "https://risehydroponics.in/wp-content/uploads/2021/04/Subsidy-Based-Soilless-Agriculture-Farm.png",
      header: "Subsidy Based Soilless Agriculture Farm",
      description:
        "Avail handsome subsidies by Central & State Governments By installing special soil-less farming systems in your space.",
    },
    {
      image:
        "https://risehydroponics.in/wp-content/uploads/2021/04/Hydroponics-System-Installations.png",
      header: "Project Development",
      description:
        "Choose from widest range of Hydroponics Systems and Rise Hydroponics will implement turnkey solutions for all projects.",
    },
  ];

  return (
    <div className={styles.Homepage_Main}>
      <div className={styles.Homepage_Video}>
        <video width="100%" autoPlay="autoPlay" muted loop={true}>
          <source
            src="https://www.absolute.ag/images/vertical-open-farm.webm"
            type="video/webm"
          />
        </video>
        <div className={styles.Homepage_Video_text}>
          <p>Welcome to Future of Farming: Hydroponics</p>
        </div>
      </div>
      <div className={styles.Homepage_Sub_Main}>
        <h2>What and Why of Hydroponics</h2>
        <div className={styles.Homepage_definition}>
          <p>
            <strong>Hydroponic Farming:</strong> Rise Hydroponics serves the
            widest range of solutions for Hydroponics farm setups. With a
            brilliant and exceptional team of Agronomists, Engineers and
            Agritech experts, We always deliver outstanding results for
            Corporates, Individuals, HoReCa, Government Institutions and more
          </p>
        </div>
        <div className={styles.Homepage_Info_Images}>
          {infoImage.length > 0 &&
            infoImage.map((el) => {
              return (
                <div key={el.id}>
                  <img src={el.image} alt="facts of hydroponics" />
                </div>
              );
            })}
        </div>
        <h2>What we do</h2>
        <div className={styles.Homepage_diiferent_services_top}>
          {whatwedoTop.length > 0 &&
            whatwedoTop.map((el) => {
              return (
                <div key={el.id}>
                  <div>
                    <img src={el.image} alt="Outdoor Hydroponics Farm" />
                  </div>
                  <div>
                    <h4>{el.header}</h4>
                  </div>
                  <div>
                    <p>{el.description}</p>
                  </div>
                </div>
              );
            })}
        </div>
        <div className={styles.Homepage_diiferent_services_bottom}>
          {whatwedoBottom.length > 0 &&
            whatwedoBottom.map((el) => {
              return (
                <div key={el.id}>
                  <div>
                    <img
                      src={el.image}
                      alt="Live Hydroponic Farming Training & Workshops"
                    />
                  </div>
                  <div>
                    <h4>{el.header}</h4>
                  </div>
                  <div>
                    <p>{el.description}</p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
