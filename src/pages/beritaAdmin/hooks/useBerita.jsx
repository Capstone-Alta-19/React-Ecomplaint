import { useCallback, useState } from "react";
import { api } from "../../../api";
import { message } from "antd";

export const useGetBerita = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState();

    const getBerita = useCallback(async () => {
        try{
            const res = await api.newsGet()
            console.log(res)
            setData(res.data.News)
        } catch (err) {
            message.open({
                type: 'error',
                content:   `${err?.message}`,
              });
        } finally {
            setIsLoading(false);
            message.open({
                type: 'success',
                content: 'This is a success message',
              });

        }
        },[])
  

  return [isLoading, data, getBerita];
};
