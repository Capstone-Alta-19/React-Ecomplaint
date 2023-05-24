import { Row, Card } from "antd";
import React from "react";
import "./card.css";

const CardLanding = () => {
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
      <Row align="center">
        <Card className="card-landing">
          <h3 className="title-Landing">Hatomerpati</h3>
          <p className="para-landing">Lorem ipsum dolor sit amet</p>
        </Card>
        <Card className="card-landing">
          <h3 className="title-Landing">Hatomerpati</h3>
          <p className="para-landing">Lorem ipsum dolor sit amet</p>
        </Card>
        <Card className="card-landing">
          <h3 className="title-Landing">Hatomerpati</h3>
          <p className="para-landing">Lorem ipsum dolor sit amet</p>
        </Card>
        <Card className="card-landing">
          <h3 className="title-Landing">Hatomerpati</h3>
          <p className="para-landing">Lorem ipsum dolor sit amet</p>
        </Card>
      </Row>
    </div>
  );
};

export default CardLanding;
