import { Button, Form, Input, Radio, Space, Typography, Upload } from "antd";
import { React, useState } from "react";
import { useGetBerita, usePostBerita } from "../hooks/useBerita";
import { useUpload } from "../hooks/useUpload";
import { UploadImg } from "../../../assets/index";
import styles from "./tambahBerita.module.css";

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

    postAddBerita(value, () => {
      getBeritaData();
    });
    form.resetFields();
  };

  const [files, setFiles] = useState({});

  const handleUpload = async (file) => {
    await uploadFile(file.file.originFileObj);
  };

  return (
    <div className={styles.layout}>
      <div className={styles.container}>
        {Object.values(files).map((file, index) => {
          return (
            <Space>
              <Typography>{file.name}</Typography>
            </Space>
          );
        })}
        <h1 className={styles.h1}>Add Berita</h1>
        <Form
          form={form}
          className={styles.form}
          onFinish={postBerita}
          layout="horizontal"
          labelAlign="left"
          autoComplete="off"
          labelCol={{
            span: 7,
          }}
          wrapperCol={{
            span: 14,
          }}
          colon={false}
          encType="multipart/form-data"
        >
          <Form.Item
            name="news_name"
            label="Judul Berita"
            rules={[
              {
                required: true,
                message: "Masukkan Judul Berita ",
              },
            ]}
          >
            <Input placeholder="Masukkan Judul Berita" />
          </Form.Item>

          <Form.Item
            label="Status"
            name="category_id"
            rules={[
              {
                required: true,
                message: "Pilih status",
              },
            ]}
          >
            <Radio.Group>
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
                required: true,
                message: "Masukkan Isi Berita ",
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

          <Form.Item
            name="photo_url"
            label="Add File"
            rules={[
              {
                required: true,
                message: "Add file",
              },
            ]}
          >
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
                  className={styles.upload}
                  type={!avatar ? "dashed" : "default"}
                >
                  <img src={UploadImg} />
                </Button>
              </Upload>
            )}
          </Form.Item>

          <Form.Item className={styles.buttonForm}>
            <Button type="default" htmlType="submit" className={styles.button}>
              Kirim
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default TambahBerita;
