import { useCallback, useState } from "react";
import { api } from "../../../api";
import { message } from "antd";

export const usePostAdmin = () => {
  const [isLoading, setIsLoading] = useState(false);

  const createData = useCallback(async (body, onSuccess) => {
    try {
      setIsLoading(true);
      await api.createAdmin(body);
      onSuccess && onSuccess();
      message.open({
        type: "success",
        content: "Data baru berhasil dibuat",
      });
      setIsLoading(false);
    } catch (err) {
      message.open({
        type: "error",
        content: `${err?.message}`,
      });
    } finally {
      setIsLoading(false);
    }
  }, []);

  return [isLoading, createData];
};

export const useGetAdmin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState();

  const getAdmin = useCallback(async (body) => {
    try {
      const res = await api.getAdmin();
      setData(res?.data);
    } catch (err) {
      message.open({
        type: "error",
        content: `${err?.message}`,
      });
    } finally {
      setIsLoading(false);
      message.open({
        type: "success",
        content: "Berhasil Fetching Data",
      });
    }
  }, []);
  return [isLoading, data, getAdmin];
};
