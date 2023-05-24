import React from "react";
import "./homePage.css";
import { Phone } from "../../assets";
import Gap from "../../components/gap/Gap";

const HomePage = () => {
  return (
    <>
      <div className="homepageLayout">
        <div className="homepageContent">
          <div className="homepageTitle">
            <p>
              Sampaikan keluhan lebih
              <br />
              mudah, <br />
              dengan com lainz
            </p>
            <div className="titleDesc">
              <p>
                Tidak perlu repot-repot lagi menghubungi layanan pelanggan yang
                memakan waktu <br /> lama dan membingungkan
              </p>
            </div>
            <Gap height={50} />
            <button>Download Now</button>
          </div>
          <div className="homepageImage">
            <img src={Phone} alt="EComplain App" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
