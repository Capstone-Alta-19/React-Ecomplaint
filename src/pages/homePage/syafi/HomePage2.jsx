import React from "react";
import { RightOutlined } from "@ant-design/icons";
import Gap from "../../../components/gap/Gap";
import { WhatAppIcon } from "../../../assets";
import { USERS_INDO } from "../constants";
import "./homePage2.css";

const HomePage2 = () => {
  return (
    <>
      <h1 className="about-bantuan">Perlu Bantuan ?</h1>
      <div className="WhatsApp">
        <img src={WhatAppIcon} />
      </div>
      <div className="content-quest">
        <div className="quest">
          <h2>Kami akan membantu</h2>
          <Gap height={30} />
          {USERS_INDO.map((teks, index) => (
            <div className="bantuan" key={index}>
              <a className="konten">{teks.teks1}</a>
              <a className="konten">{teks.teks2}</a>
              <a className="konten">{teks.teks3}</a>
              <a className="konten">{teks.teks4}</a>
              <Gap height={10} />
              <div className="icon">
                <RightOutlined justify="end" />
              </div>
              <hr />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage2;
