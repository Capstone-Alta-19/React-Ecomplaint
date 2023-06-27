import { useCallback, useState } from "react";
import { api } from "../../../api";
import { message } from "antd";

export const useGetBerita = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState();

  const getBerita = useCallback(async () => {
    try {
      const res = await api.newsGet();
      setData(res.data.News);
    } catch (err) {
      message.open({
        type: "error",
        content: `${err?.message}`,
      });
    } finally {
      setIsLoading(false);
    }
  }, []);

  return [isLoading, data, getBerita];
};
export const usePostBerita = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState();

  const addBerita = useCallback(async (body) => {
    try {
      const res = await api.postBerita(body);
      setData(res.data.News);
    } catch (err) {
      message.open({
        type: "error",
        content: `${err?.message}`,
      });
    } finally {
      setIsLoading(false);
      message.open({
        type: "success",
        content: "Berita berhasil ditambah",
      });
    }
  }, []);

  return [isLoading, data, addBerita];
};
