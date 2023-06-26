import { Button, Form, Input, Radio } from "antd";
import { User } from "../../assets";
import Gap from "../../components/gap/Gap";
import { usePostAdmin } from "./hooks/useTambahAdmin";
import { useGetAdmin } from "../pengaturanAdmin/hooks/usePengaturanAdmin";
import style from "./tambahAdmin.module.css";

const TambahAdmin = () => {
  const [isLoading, data, getAdmin] = useGetAdmin();
  const [isLoadingCreateBiodata, createAdmin] = usePostAdmin();
  const [form] = Form.useForm();

  const onAdd = (values) => {
    createAdmin(values, () => {
      getAdmin();
      form.resetFields();
    });
  };

  return (
    <div className={style.layout}>
      <div className={style.container}>
        <div className={style.tambahAdmin}>
          <img src={User} />
          <p>Tambah Admin</p>
        </div>

        <Gap height={60} />
        <Form
          autoComplete="off"
          form={form}
          layout="horizontal"
          onFinish={onAdd}
          name="basic"
          colon={false}
          style={{
            width: "800px",
          }}
          labelAlign="left"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 14,
          }}
        >
          <Form.Item label="Input Name" name="name">
            <Input placeholder="Input Name" />
          </Form.Item>

          <Form.Item label="Role" name="role">
            <Radio.Group>
              <Radio value="Admin">Admin</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item label="Input User Name" name="username">
            <Input placeholder="Input User name" />
          </Form.Item>

          <Form.Item label="Input Password" name="password">
            <Input.Password placeholder="Input Password" />
          </Form.Item>

          <Gap height={30} />
          <Form.Item
            wrapperCol={{
              offset: 7,
              span: 14,
            }}
          >
            <Button
              type="primary"
              htmlType="submit"
              direction="vertical"
              className="buttonTambahAdmin"
              style={{
                width: "75%",
                backgroundColor: "#3C486B",
              }}
            >
              SIMPAN
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default TambahAdmin;
