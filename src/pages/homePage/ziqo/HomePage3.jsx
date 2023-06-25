import React from "react";
import "./homePage3.css";
import { Row, Space } from "antd";
import { Link } from "react-router-dom";

const HomePage3 = () => {
  return (
    <div className="body-cat">
        <Row justify={"center"}
           className=""
        >
      <Space>
        <Link to="">
          <div className="image-46"></div>
        </Link>
        <Link to="">
          <div className="image-48"></div>
        </Link>
      </Space>
      </Row>
    </div>
  );
};

export default HomePage3;
