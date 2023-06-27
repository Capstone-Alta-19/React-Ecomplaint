import { Button, Card, Collapse, Row, Pagination, Table, List } from "antd";
import React, { useEffect } from "react";
import { useGetBerita } from "./hooks/useBerita";
import { PlusSquareOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import styles from "./beritaAdmin.module.css";
import Gap from "../../components/gap/Gap";
import LoadingComponent from "../../components/loadingComponent/LoadingComponent";

const BeritaAdmin = () => {
  const [isLoadingBerita, dataBerita, getBeritaData] = useGetBerita();

  useEffect(() => {
    getBeritaData();
  }, []);

  return (
    <>
      {isLoadingBerita ? (
        <LoadingComponent />
      ) : (
        <div className={styles.layout}>
          <div className={styles.button}>
            <Link to="/tambah-berita">
              <Button
                style={{
                  backgroundColor: "#3c486b",
                  border: "0",
                  fontSize: "1vw",
                  color: "white",
                }}
              >
                Tambah Berita <PlusSquareOutlined />
              </Button>
            </Link>
          </div>

          <Gap height={30} />
          <div className={styles.container}>
            <List
              className={styles.list}
              pagination={{
                showSizeChanger: true,
                pageSizeOptions: ["10", "20", "50", "100"],
              }}
              dataSource={dataBerita}
              renderItem={(item) => (
                <Collapse
                  className={styles.collapse}
                  expandIconPosition="end"
                  items={[
                    {
                      key: item.ID,
                      label: <h5>Super Admin: {item.admin_id}</h5>,
                      children: (
                        <Row
                          justify={"space-between"}
                          className={styles.underline}
                        >
                          <div>{item.news_name} </div>
                          <div>{item.CreatedAt}</div>
                        </Row>
                      ),
                    },
                  ]}
                />
              )}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default BeritaAdmin;
