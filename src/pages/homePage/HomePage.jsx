import React from "react";
import "./homePage.css";
import { IconEcomplain, Phone } from "../../assets";
import Gap from "../../components/gap/Gap";
import HomePage2 from "./syafi/HomePage2";

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
              dengan com
              <img src={IconEcomplain} alt="Icon E Complainz" width={50} />
              lainz
            </p>

            <div className="titleDesc">
              <p>
                Tidak perlu repot-repot lagi menghubungi layanan pelanggan yang
                memakan waktu <br /> lama dan membingungkan
              </p>
            </div>
            <Gap height={30} />
            <button>Download Now</button>
          </div>
          <div className="homepageImage">
            <img src={Phone} alt="EComplain App" />
          </div>
        </div>
        <div className="homepage2-content">
          <HomePage2 />
        </div>
      </div>
    </>
  );
};

export default HomePage;
