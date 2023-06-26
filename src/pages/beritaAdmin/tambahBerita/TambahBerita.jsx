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
import "./tambahBerita.css";
import { UploadOutlined } from "@ant-design/icons";

import { useUpload } from "../hooks/useUpload";
import { BASE_URL } from "../../../utils";
import { baseAPI } from "../../../config/apiService";
import axios from "axios";
import Cookies from "js-cookie";

const TambahBerita = () => {
  const [isLoadingUpload, fileURLData, uploadFile] = useUpload();
  const [isloadingAddBerita, AddBerita, postAddBerita] = usePostBerita();
  const [isLoadingBerita, dataBerita, getBeritaData] = useGetBerita();
  const { TextArea } = Input;
  const [avatar, setAvatar] = useState(fileURLData);

  const postBerita = (body) => {
    // console.log(body);
    // const photos = body.photo_url;
    console.log(fileURLData);
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
  };
  const [files, setFiles] = useState({});
  const handleUpload = async (file) => {
    await uploadFile(file.file.originFileObj);
    //   console.log({files})
    //   setFiles(pre=>{
    //     return {...pre,[file.uid]:file}

    //   })
    //   const getFileObject = (progress) => {
    //     return {
    //       name: data.name,
    //       uid: data.uid,
    //       progress: progress
    //     }
    //   }

    // axios.post("http://178.128.210.192:8080/upload", file,

    // {
    //   headers: {
    //     "Content-Type": "multipart/form-data",
    //     Authorization: "Bearer " + Cookies.get("token")
    //   },

    //   onUploadProgress: (event) => {
    //     console.log(event)
    //     setFiles((pre)=>{
    //       return {...pre,[file.uid]:getFileObject(event.progress)}

    //     })
    //   }
    // })
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
          {fileURLData? <img src={fileURLData} /> :  <Upload
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
              icon={<UploadOutlined />}
              type={!avatar ? "dashed" : "default"}
            >
              {avatar ? "Change Avatar" : "Upload Avatar"}
            </Button>
          </Upload>}
         
          
        </Form.Item>
        <Button type="primary" htmlType="submit" className="btnAddBerita">
          Kirim
        </Button>
      </Form>
    </div>
  );
};

export default TambahBerita;
