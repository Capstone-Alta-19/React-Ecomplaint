import { Button, Form, Input, Radio, Select } from "antd";
import { React, useState } from "react";
import { useGetBerita, usePostBerita } from "../hooks/useBerita";
import "./tambahBerita.css";

// const [isloadingAddBerita, AddBerita, postAddBerita] = usePostBerita();
// const [isLoadingBerita, dataBerita, getBeritaData] = useGetBerita();

// const postBerita = (body) => {
//   postAddBerita(body, () => {
//     getBeritaData();
//   });
// };

const TambahBerita = () => {
  const { TextArea } = Input;
  return (
    <div className="add-berita">
      <h1 className="titlePage-berita">Add Berita</h1>
      <Form
        // className="formDetailData"
        // onFinish={postBerita}
        layout="horizontal"
        labelAlign="left"
        labelCol={{
          span: 6,
        }}
        colon={false}
        fields={[
          {
            name: "status",
            // value: rowData?.status,
          },
          {
            name: "type",
            // value: rowData?.type,
          },
        ]}
      >
        <Form.Item
          name="news_name"
          label="Judul Berita"
          rules={[
            {
              message: "Please Input Your Name!",
            },
          ]}
        >
          <Input placeholder="Masukkan Nama" />
        </Form.Item>
        <Form.Item label="Status" name="status">
          {/* <Select
            placeholder="Stats"
            options={[
              {
                value: "Pending",
                label: "Pending",
              },
              {
                value: "Proccess",
                label: "Proccess",
              },
              {
                value: "Resolved",
                label: "Resolved",
              },
            ]}
          ></Select> */}
          <Radio.Group size="large">
            <Radio.Button value="a">Akademik</Radio.Button>
            <Radio.Button value="b">Ormas</Radio.Button>
            <Radio.Button value="c">Mahasiswa</Radio.Button>
            <Radio.Button value="d">Dosen</Radio.Button>
            <Radio.Button value="e">Lainnya</Radio.Button>
            <Radio.Button value="f">Sarana dan Prasarana</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          label="Isi berita"
          name="description"
          rules={[
            {
              // required: true,
              message: "Please Input Your Name!",
            },
          ]}
        >
          <TextArea
            // className="inputFeedback"
            placeholder="Isi berita..."
            autoSize={{
              minRows: 6,
              maxRows: 10,
            }}
          />
        </Form.Item>
        <Button type="primary" htmlType="submit" className="btnAddBerita">
          Kirim
        </Button>
      </Form>
    </div>
  );
};

export default TambahBerita;
