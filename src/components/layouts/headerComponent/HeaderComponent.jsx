import React from "react";
import "./headerComponent.css";
import { EComplain } from "../../../assets";
import { Select } from "antd";

const HeaderComponent = () => {
  return (
    <>
      <div className="headerLayout">
        <div className="headerContent">
          <img src={EComplain} alt="E-Complain" />
          <div className="headerMenu">
            <a href="#">
              <p>Home</p>
            </a>

            <a href="#">
              <p>Bantuan</p>
            </a>

            <a href="#">
              <p>About Us</p>
            </a>

            <Select
              placeholder="Pilih Bahasa"
              bordered={false}
              options={[
                {
                  value: "bahasa",
                  label: "Bahasa",
                },
                {
                  value: "english",
                  label: "English",
                },
              ]}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderComponent;
