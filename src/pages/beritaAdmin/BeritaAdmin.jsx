import { Button, Card, Collapse, Divider, Row } from "antd";
import React, { Children, useEffect } from "react";
import "./style.css";
import { useGetBerita } from "./hooks/useBerita";
import { PlusSquareOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
const BeritaAdmin = () => {
  const [isLoadingBerita, dataBerita, getBeritaData] = useGetBerita();
  console.log(dataBerita);
  useEffect(() => {
    getBeritaData();
  }, []);

  return (
    <>
    
    <Row align={"center"}>
      <Link to="/tambah-berita"><Button className="berita-padding tambah_berita_button"> <h5>Tambah Berita</h5> <PlusSquareOutlined /></Button></Link>
      </Row>
      <Card className="berita-padding">
        {dataBerita?.map((data) => (
          <Collapse className="accordion"
          expandIconPosition="end"
            items={[
              {
                key: data.ID,
                label: <h5>Super Admin: {data.admin_id}</h5>,
                children: (
                  <div>
                    <Row justify={"space-between"} className="underlined_text"><div>{data.news_name} </div><div className="div_left">{data.CreatedAt}</div></Row>


                  </div>
                ),
              },
            ]}
          />
        ))}
        
      </Card>
    </>
  );
};

export default BeritaAdmin;
