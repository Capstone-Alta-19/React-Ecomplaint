import React from "react";
import "./homePage.css";
import { USERS_INDO } from "./constant";
import { RightOutlined } from "@ant-design/icons";
import image from "./assets/img/CallWA.png";
import Gap from "../../components/gap/Gap";

const HomePage = () => {
  return (
    <>
      <h1>Perlu Bantuan ?</h1>
      <div className="WhatsApp">
        <img src={image} height={50} width={250} />
      </div>
      <Gap height={20} />
      <div className="quest">
        <h2 className="bantu">Kami akan membantu</h2>
        <Gap height={10} />
        {USERS_INDO.map((teks, index) => (
          <div className="bantuan" key={index}>
            <a className="konten">{teks.teks1}</a>
            <a className="konten">{teks.teks2}</a>
            <a className="konten">{teks.teks3}</a>
            <a className="konten">{teks.teks4}</a>
            <div className="icon">
              <RightOutlined justify="end" />
            </div>
            <hr />
          </div>
        ))}
      </div>
    </>
  );
};

export default HomePage;
