import {
  Button,
  Form,
  Input,
  Radio,
  Select,
  Space,
  Typography,
  Upload,
} from "antd";
import { React, useState } from "react";
import { useGetBerita, usePostBerita } from "../hooks/useBerita";
import { UploadOutlined } from "@ant-design/icons";
import { useUpload } from "../hooks/useUpload";
import { BASE_URL } from "../../../utils";
import { baseAPI } from "../../../config/apiService";
import axios from "axios";
import Cookies from "js-cookie";
import { UploadImg } from "../../../assets/index";

const TambahBerita = () => {
  const [form] = Form.useForm();
  const [isLoadingUpload, fileURLData, uploadFile] = useUpload();
  const [isloadingAddBerita, AddBerita, postAddBerita] = usePostBerita();
  const [isLoadingBerita, dataBerita, getBeritaData] = useGetBerita();
  const { TextArea } = Input;
  const [avatar, setAvatar] = useState(fileURLData);

  const postBerita = (body) => {
    const value = {
      news_name: body.news_name,
      photo_url: fileURLData,
      category_id: body.category_id,
      description: body.description,
    };
    console.log(value);
    postAddBerita(value, () => {
      getBeritaData();
    });
    form.resetFields();
  };
  const [files, setFiles] = useState({});
  const handleUpload = async (file) => {
    await uploadFile(file.file.originFileObj);
  };

  console.log(avatar);
  return (
    <div className="add-berita">
      {Object.values(files).map((file, index) => {
        return (
          <Space>
            <Typography>{file.name}</Typography>
          </Space>
        );
      })}
      <h1 className="titlePage-berita">Add Berita</h1>
      <Form
        form={form}
        className="formInputBerita"
        onFinish={postBerita}
        layout="horizontal"
        labelAlign="left"
        labelCol={{
          span: 6,
        }}
        colon={false}
        encType="multipart/form-data"
      >
        <Form.Item
          name="news_name"
          label="Judul Berita"
          rules={[
            {
              message: "Masukkan Judul Berita ",
            },
          ]}
        >
          <Input placeholder="Masukkan Judul Berita" />
        </Form.Item>
        <Form.Item label="Status" name="category_id">
          <Radio.Group size="middle" style={{ fontWeight: "normal" }}>
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
              message: "Masukkan Isi Berita!",
            },
          ]}
        >
          <TextArea
            className="isiBerita"
            placeholder="Isi berita..."
            autoSize={{
              minRows: 8,
              maxRows: 10,
            }}
          />
        </Form.Item>
        <Form.Item name="photo_url" label="Add File">
          {fileURLData ? (
            <img src={fileURLData} width="20%" height="20%" />
          ) : (
            <Upload
              showUploadList={false}
              maxCount={1}
              customRequest={() => {}}
              onRemove={() => {
                setAvatar("");
              }}
              type="picture-list"
              onChange={handleUpload}
            >
              <Button
                className="buttonUploader"
                type={!avatar ? "dashed" : "default"}
              >
                <img src={UploadImg} />
              </Button>
            </Upload>
          )}
        </Form.Item>
        <Button type="default" htmlType="submit" className="btnAddBerita">
          Kirim
        </Button>
      </Form>
    </div>
  );
};
