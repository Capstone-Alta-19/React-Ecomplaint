import { Button, Form, Input, Radio, Select, Upload } from "antd";
import { React, useState } from "react";
import { useGetBerita, usePostBerita } from "../hooks/useBerita";
import "./tambahBerita.css";
import { UploadOutlined } from "@ant-design/icons";

import { useSingleUploader } from "../hooks/useSingleUploader";
import React from 'react';

const TambahBerita = () => {
 
  const [isLoadingUpload, uploadFile] = useSingleUploader();
  const [isloadingAddBerita, AddBerita, postAddBerita] = usePostBerita();
  const [isLoadingBerita, dataBerita, getBeritaData] = useGetBerita();
  const { TextArea } = Input;
  const [avatar, setAvatar] = useState();
  
  const postBerita = (body) => {
    console.log(body);
    const photos = body.photo_url;
    uploadFile(photos);

    postAddBerita(body, () => {
      getBeritaData();
    });
  };

  const handleUpload = async (data) => {
    uploadFile((data) => {
      setAvatar(data.url);
    });
  };

  console.log(avatar);
  return (
    <div className="add-berita">
      <h1 className="titlePage-berita">Add Berita</h1>
      <Form
        className="formDetailData"
        onFinish={postBerita}
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
        encType="multipart/form-data"
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
        <Form.Item label="Status" name="category_id">
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
            <Radio.Button value={1}>Akademik</Radio.Button>
            <Radio.Button value={2}>Ormas</Radio.Button>
            <Radio.Button value={3}>Mahasiswa</Radio.Button>
            <Radio.Button value={4}>Dosen</Radio.Button>
            <Radio.Button value={5}>Lainnya</Radio.Button>
            <Radio.Button value={6}>Sarana dan Prasarana</Radio.Button>
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
            className="inputFeedback"
            placeholder="Isi berita..."
            autoSize={{
              minRows: 6,
              maxRows: 10,
            }}
          />
        </Form.Item>
        <Form.Item name="photo_url">
          <Upload
            showUploadList={false}
            name="photo_url"
            maxCount={1}
            onRemove={() => {
              setAvatar("");
            }}
            type="file"
            customRequest={() => {}}
            onChange={handleUpload}
          >
            <Button
              icon={<UploadOutlined />}
              type={!avatar ? "dashed" : "default"}
            >
              {avatar ? "Change Avatar" : "Upload Avatar"}
            </Button>
          </Upload>
        </Form.Item>
        <Button type="primary" htmlType="submit" className="btnAddBerita">
          Kirim
        </Button>
      </Form>
    </div>
  );
};

export default TambahBerita;
