import React from "react";
import { Layout, Button } from "antd";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  Bell,
  Berita,
  Dashboard,
  EcomplainzWhite,
  ImageAdmin,
  Laporan,
  Pengaturan,
  Tambah,
} from "../../assets";
import "./layoutComponentAdmin.css";
import Gap from "../gap/Gap";

const LayoutComponentAdmin = ({ children }) => {
  const { Content, Sider } = Layout;
  const navigate = useNavigate();

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

            <Link to={"/dashboard"}>
              <img
                src={Dashboard}
                alt="Dashboard"
                className="dashboard-admin"
              />
            </Link>
            <Link to={"/laporan"}>
              <img src={Laporan} alt="Laporan" />
            </Link>
            <Link to={"/berita"}>
              <img src={Berita} alt="Berita" />
            </Link>
            <Link to={"/tambahadmin"}>
              <img src={Tambah} alt="Tambah" />
            </Link>
            <Link to={"/pengaturan"}>
              <img src={Pengaturan} alt="Pengaturan" />
            </Link>
            <Gap height={300} />

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
              <img src={Bell} alt="Bell Notif" />
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
