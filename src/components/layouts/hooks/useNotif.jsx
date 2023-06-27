import { useCallback, useState } from "react";
import { api } from "../../../api";
import { message } from "antd";

export const useGetNotif = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState();

  const getNotif = useCallback(async (onSuccess) => {
    try {
      const res = await api.getNotif();
      console.log(res.data?.notifications);
      setData(res.data?.notifications);
      onSuccess && onSuccess();
    } catch (err) {
      message.open({
        type: "error",
        content: `${err?.message}`,
      });
    } finally {
      setIsLoading(false);
    }
  }, []);

  return [isLoading, data, getNotif];
};
