import React, { useState } from "react";
import { Layout, Button, Modal } from "antd";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Bell, EcomplainzWhite, ImageAdmin } from "../../assets";
import "./layoutComponentAdmin.css";
import Gap from "../gap/Gap";
import {
  ControlOutlined,
  UsergroupAddOutlined,
  ReadOutlined,
  ContainerOutlined,
  FundOutlined,
} from "@ant-design/icons";

const LayoutComponentAdmin = ({ children }) => {
  const { Content, Sider } = Layout;
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  return (
    <>
      <Layout>
        <Sider width="260" className="sidebarContainer">
          <div className="sidebarMenu">
            <Gap height={1} />

            <div>
              <img src={EcomplainzWhite} alt="EcomplainzWhite" height={45} />
            </div>
            <Gap height={20} />

            <Link to={"/dashboard"} className="linkIcon">
              <FundOutlined />
              <p>Dashboard</p>
            </Link>
            <Link to={"/laporan/All"} className="linkIcon">
              <ContainerOutlined />
              <p>Laporan</p>
            </Link>
            <Link to={"/berita"} className="linkIcon">
              <ReadOutlined />
              <p>Berita</p>
            </Link>
            <Link to={"/tambahadmin"} className="linkIcon">
              <UsergroupAddOutlined />
              <p>Tambah Admin</p>
            </Link>
            <Link to={"/pengaturan"} className="linkIcon">
              <ControlOutlined />
              <p>Pengaturan</p>
            </Link>
            <Gap height={350} />

            <div className="sidebarLogout">
              <Link to="/admin">
                <Button
                  type="primary"
                  onClick={() => {
                    localStorage.removeItem("token");
                    navigate("/admin");
                  }}
                  danger
                >
                  Logout
                </Button>
              </Link>
            </div>
          </div>
        </Sider>
        <Content className="contentContainer">{children}</Content>
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
            <Gap height={95} />
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
