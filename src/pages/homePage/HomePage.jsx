import React from "react";
import "./homePage.css";
import {
  Carousel1,
  Carousel2,
  Carousel3,
  Carousel4,
  IconEcomplain,
} from "../../assets";
import Gap from "../../components/gap/Gap";
import HomePage2 from "./syafi/HomePage2";
import HomePage4 from "./abi/HomePage4";
import { Col, Row, Carousel } from "antd";

const styleDefaults = {
  height: "auto",
  color: "white",
  fontSize: 100,
  textAlign: "center",
};

const HomePage = () => {
  return (
    <>
      <div className="homepageLayout">
        <div className="homepageContent">
          <Row>
            <Col span={12} className="homepageTitle">
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
                  Tidak perlu repot-repot lagi menghubungi layanan pelanggan
                  yang memakan waktu <br /> lama dan membingungkan
                </p>
              </div>
              <Gap height={30} />
              <button>Download Now</button>
            </Col>
            <Col span={12}>
              <Carousel
                autoplay
                effect="fade"
                dots={false}
                autoplaySpeed={2000}
              >
                <img src={Carousel1} alt="Carousel 1" />
                <img src={Carousel2} alt="Carousel 2" />
                <img src={Carousel3} alt="Carousel 3" />
                <img src={Carousel4} alt="Carousel 4" />
              </Carousel>
            </Col>
          </Row>
        </div>
        <div className="homepage2-content">
          <HomePage2 />
        </div>
        <Gap height={150} />
        {/* <div>
          <HomePage3 />
        </div> */}
        <Gap height={175} />
        <div>
          <HomePage4 />
        </div>
        <Gap height={200} />
      </div>
    </>
  );
};

export default HomePage;
