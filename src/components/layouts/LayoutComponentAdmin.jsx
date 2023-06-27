import React, { useState } from "react";
import { Layout, Button, Modal } from "antd";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Bell, EcomplainzWhite, ImageAdmin } from "../../assets";
import styles from "./layoutComponenAdmin.module.css";
import Gap from "../gap/Gap";
import {
  ControlOutlined,
  UsergroupAddOutlined,
  ReadOutlined,
  ContainerOutlined,
  FundOutlined,
} from "@ant-design/icons";
import Cookies from "js-cookie";

const LayoutComponentAdmin = ({ children }) => {
  const { Content, Sider } = Layout;
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  return (
    <>
      <Layout
        style={{
          minHeight: "100vh",
        }}
        className={styles.Layout}
      >
        <Sider width="260" className={styles.sidebar}>
          <div className={styles.menu}>
            <Gap height={1} />

            <div>
              <img src={EcomplainzWhite} alt="  EcomplainzWhite" height={45} />
            </div>
            <Gap height={40} />

            <Link to={"/dashboard"} className={styles.icon}>
              <FundOutlined />
              <p>Dashboard</p>
            </Link>

            <Link to={"/laporan/All"} className={styles.icon}>
              <ContainerOutlined />
              <p>Laporan</p>
            </Link>
            <Link to={"/berita"} className={styles.icon}>
              <ReadOutlined />
              <p>Berita</p>
            </Link>
            <Link to={"/tambahadmin"} className={styles.icon}>
              <UsergroupAddOutlined />
              <p>Tambah Admin</p>
            </Link>
            <Link to={"/pengaturan"} className={styles.icon}>
              <ControlOutlined />
              <p>Pengaturan</p>
            </Link>
          </div>

          <div className={styles.logout}>
            <Link to="/admin">
              <Button
                type="primary"
                onClick={() => {
                  Cookies.remove("token");
                  navigate("/admin");
                  window.location.reload();
                }}
                danger
              >
                Logout
              </Button>
            </Link>
          </div>
        </Sider>

        <Content className={styles.content} style={{ minHeight: 500 }}>
          {children}
        </Content>

        <Sider className="sidebarContainer2">
          <div className="sidebar2Menu">
            <Gap height={30} />
            <div>
              <Button onClick={() => setOpen(true)}>
                <img src={Bell} alt="Bell Notif" height={30} />
              </Button>
              <Modal
                centered
                open={open}
                onOk={() => setOpen(false)}
                onCancel={() => setOpen(false)}
                width={2000}
              >
                <p className="notifikasiTitle"> &lt; Notifikasi</p>
                <Gap height={30} />

                <p>some contents...</p>
                <p>some contents...</p>
                <p>some contents...</p>
                <p>some contents...</p>
                <p>some contents...</p>
                <p>some contents...</p>
                <p>some contents...</p>
                <p>some contents...</p>
                <p>some contents...</p>
              </Modal>
            </div>

            <div className="adminProfile">
              <img src={ImageAdmin} alt="Admin Picture" />
              <strong>Admin 1</strong>
              <p>Super Admin</p>
            </div>
          </div>
        </Sider>
      </Layout>
    </>
  );
};

export default LayoutComponentAdmin;
