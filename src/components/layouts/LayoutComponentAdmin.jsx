import React, { useEffect, useState } from "react";
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
import { useGetNotif } from "./hooks/useNotif";
import "./Layout.css";

const LayoutComponentAdmin = ({ children }) => {
  const { Content, Sider } = Layout;
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [isLoading, data, getNotif] = useGetNotif();

  const [selected, setSelected] = useState("dashboard");
  const path = window.location.pathname;

  useEffect(() => {
    if (path === "/dashboard") {
      setSelected("dashboard");
    } else if (path === "/laporan/All") {
      setSelected("laporan");
    } else if (path === "/berita") {
      setSelected("berita");
    } else if (path === "/tambahadmin") {
      setSelected("tambahadmin");
    } else if (path === "/pengaturan") {
      setSelected("pengaturan");
    } else {
      setSelected("");
    }
  }, [path]);

  return (
    <>
      <Layout
        style={{
          minHeight: "100vh",
        }}
        className={styles.Layout}
      >
        <Sider
          style={{
            height: "100vh",
            position: "fixed",
          }}
          width="260"
          className={styles.sidebar}
        >
          <div className={styles.menu}>
            <Gap height={1} />

            <div>
              <img src={EcomplainzWhite} alt="  EcomplainzWhite" height={45} />
            </div>
            <Gap height={40} />

            <Link to={"/dashboard"} className={styles.icon}>
              <FundOutlined />
              <p
                className={`link ${
                  selected === "dashboard" ? "selectedHeader" : ""
                }`}
              >
                Dashboard
              </p>
            </Link>

            <Link to={"/laporan/All"} className={styles.icon}>
              <ContainerOutlined />
              <p
                className={`link ${
                  selected === "laporan" ? "selectedHeader" : ""
                }`}
              >
                Laporan
              </p>
            </Link>
            <Link to={"/berita"} className={styles.icon}>
              <ReadOutlined />
              <p
                className={`link ${
                  selected === "berita" ? "selectedHeader" : ""
                }`}
              >
                Berita
              </p>
            </Link>
            <Link to={"/tambahadmin"} className={styles.icon}>
              <UsergroupAddOutlined />
              <p
                className={`link ${
                  selected === "tambahadmin" ? "selectedHeader" : ""
                }`}
              >
                Tambah Admin
              </p>
            </Link>
            <Link to={"/pengaturan"} className={styles.icon}>
              <ControlOutlined />
              <p
                className={`link ${
                  selected === "pengaturan" ? "selectedHeader" : ""
                }`}
              >
                Pengaturan
              </p>
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

        <Content className={styles.conten}>{children}</Content>

        <Sider className={styles.sidebar2}>
          <Gap height={30} />
          <div className={styles.adminbar}>
            <Button
              onClick={() => {
                getNotif(() => setOpen(true));
              }}
            >
              <img src={Bell} alt="Bell Notif" height={30} />
            </Button>
            <Gap height={100} />
            <Modal
              centered
              open={open}
              onOk={() => setOpen(false)}
              onCancel={() => setOpen(false)}
              width={2000}
            >
              <p className={styles.notif}> &lt; Notifikasi</p>
              <Gap height={30} />
              <div className={styles.box}>
                {data?.map((item, index) => (
                  <div key={index} className={styles.notif1}>
                    <div style={{ fontWeight: "bold" }}>{item.category}</div>
                    <div className={styles.dateNotif}>
                      <div>{item.description}</div>
                      <div>{item.created_at}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Modal>
          </div>

          <div className={styles.menu}>
            <img src={ImageAdmin} alt="Admin Picture" height={150} />
            <strong>Admin 1</strong>
            <p>Super Admin</p>
          </div>
        </Sider>
      </Layout>
    </>
  );
};

export default LayoutComponentAdmin;
