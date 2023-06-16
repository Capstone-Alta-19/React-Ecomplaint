import React from "react";
import { RightOutlined } from "@ant-design/icons";
import Gap from "../../../components/gap/Gap";
import { WAIcon } from "../../../assets";
import { Link } from "react-router-dom";
import { USERS_INDO } from "../constants";
import "./homePage2.css";

const HomePage2 = () => {
  return (
    <>
      <h1 className="about-bantuan">
        Perlu Bantuan ?
        <a
          href="https://wa.me/6282257665673"
          target="_blank"
          className="WAIcon"
        >
          <img src={WAIcon} />
          <div class="teks">
            Ada Pertanyaan ? <br></br>
            Silahkan hubungi kami via WhatsApp
          </div>
        </a>
      </h1>
      <div className="content-quest">
        <div className="class-quest">
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
                <Link to={"/syafibantuan"}>
                  <RightOutlined justify="end" />
                </Link>
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
