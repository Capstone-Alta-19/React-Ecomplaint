import React from "react";
import { RightOutlined } from "@ant-design/icons";
import Gap from "../../../components/gap/Gap";
import { WAIcon } from "../../../assets";
import { USERS_INDO } from "../constants";
import "./homePage2.css";
import { Link } from "react-router-dom";

const HomePage2 = () => {
  return (
    <div className="homepage-bantuan-master">
      <h1 className="about-bantuan">
        Perlu Bantuan ?
        <a
          href="https://wa.me/6282257665673"
          target="_blank"
          className="WAIICON-about"
        >
          <img src={WAIcon} />
        </a>
      </h1>
      <div className="content-quest">
        <div className="class-quest-bantu">
          <h2>Kami akan membantu</h2>
          <Gap height={30} />
          {USERS_INDO.map((teks, index) => (
            <div className="bantuan-homepage1" key={index}>
              <a className="konten-homepage1">{teks.teks1}</a>
              <a className="konten-homepage1">{teks.teks2}</a>
              <a className="konten-homepage1">{teks.teks3}</a>
              <a className="konten-homepage1">{teks.teks4}</a>
              <Gap height={10} />
              <div className="icon-homepage-bantuan">
                <Link to={"/homepagebantuan"}>
                  <RightOutlined justify="end" />
                </Link>
              </div>
              <hr />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage2;
