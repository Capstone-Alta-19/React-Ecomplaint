import { Row } from "antd";
import React from "react";
import "./HomePage3.css";
import {verif,verif2,email,isiform} from "../../../assets";


const HomePage3 = () => {
  return (
    <div className="box-card-row">
      <Row justify="end" className="box-title">
        <div className="box-title-box">

  
        <h2 className="card-row-title">
          Cara Memasukan Komplain (Public/Private)
        </h2>
        <br></br>
        <p className="card-row-para">
          Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate <br></br>libero et velit interdum, ac aliquet odio mattis
        </p>
        
        </div>

      </Row>
      <Row align="center" className="img-row">
       <img src={verif} alt="" />
       <img src={isiform} alt="" />
       <img src={verif2} alt="" />
       <img src={email} alt="" />
      </Row>
    </div>
  );
};

export default HomePage3;
