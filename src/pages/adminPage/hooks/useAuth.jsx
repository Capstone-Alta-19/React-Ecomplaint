import { message } from "antd";
import { useCallback, useState } from "react";
import { api } from "../../../api";

export const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false);

  const login = useCallback(async (body, onSuccess) => {
    try {
      setIsLoading(true);
      const res = await api.login(body);

      if (res) {
        localStorage.setItem("token", res.data?.admin?.token);
        message.open({
          type: "success",
          content: "Login Berhasil",
        });
        onSuccess && onSuccess();
      }
    } catch (err) {
      message.open({
        type: "error",
        content: "Login Gagal",
      });
    } finally {
      setIsLoading(false);
    }
  }, []);

  return [isLoading, login];
};
