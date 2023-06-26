import { useCallback, useState } from "react";
import { api } from "../../../api";
import { message } from "antd";

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

// Update ADMIN
export const UseUpdateAdmin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const updateData = useCallback(async (body, onSuccess) => {
    try {
      setIsLoading(true);
      await api.updateAdmin(body);
      onSuccess && onSuccess();
      message.open({
        type: "success",
        content: "Berhasil update data",
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

  return [isLoading, updateData];
};
