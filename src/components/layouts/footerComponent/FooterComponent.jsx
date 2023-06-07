import React from "react";
import { Footer } from "antd/es/layout/layout";
import { Col, Row } from "antd";
import Gap from "../../gap/Gap";
import {
  AppStore,
  EcomplainzWhite,
  GmailIcon,
  GoogleplayIcon,
  WAIcon,
} from "../../../assets";
import "./footerCoponent.css";

const FooterComponent = () => {
  return (
    <Footer className="allfooter">
      <Row>
        <Col span={12}>
          <div className="definisi">
            <img
              src={EcomplainzWhite}
              alt="Logo Ecomplainz"
              width={300}
              height={75}
            ></img>
            <Gap height={50} />
            <Col span={13}>
              <p>
                Complainz adalah sebuah aplikasi yang dirancang untuk memudahkan
                mahasiswa dalam memberikan laporan dan aspirasi terkait dengan
                keadaan di kampus. Dengan menggunakan aplikasi ini, pengguna
                dapat dengan mudah membuat laporan terkait masalah kampus
                seperti fasilitas yang rusak, kurangnya fasilitas, perilaku
                tidak etis dari staf atau dosen, atau hal-hal lainnya yang
                mempengaruhi kualitas hidup mahasiswa di kampus.{" "}
              </p>
            </Col>
          </div>
        </Col>

        <Col span={12}>
          <Row className="row1">
            <div className="wrap-unduh-footer">
              <h2 className="h2-footer-unduh">
                <b>Unduh Kami di</b>
              </h2>

              <Row gutter={60}>
                <Col className="gplay" span={12}>
                  <img
                    src={GoogleplayIcon}
                    alt="google play"
                    width={270}
                    height={270}
                  ></img>
                </Col>

                <Col className="apstore" span={12}>
                  <img
                    src={AppStore}
                    alt="app store"
                    width={270}
                    height={270}
                  ></img>
                </Col>
              </Row>
            </div>
          </Row>

          <Row className="row2">
            <div className="contactus">
              <p>
                <b>Contact Us</b>
              </p>

              <div className="gmail-footer">
                <img src={GmailIcon} width={45} height={45}></img>
                <p>
                  <b>complainzyuk@mail.co.id</b>
                </p>
              </div>
              <Gap height={20} />
              <div className="wa-footer">
                <img src={WAIcon} width={45} height={45}></img>
                <p>
                  <b>+6282257665673</b>
                </p>
              </div>
              <br />
            </div>
          </Row>
        </Col>
      </Row>
    </Footer>
  );
};

export default FooterComponent;
