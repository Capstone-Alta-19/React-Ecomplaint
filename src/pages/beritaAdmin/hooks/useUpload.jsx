import { useCallback } from "react";
import { useState } from "react";

import { message } from "antd";
import { api } from "../../../api";

export const useUpload = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [imageURL, setImageURL] = useState();

  const upload = useCallback(async (body, onSuccess) => {
    try {
      setIsLoading(true);
      const bodyData = new FormData();
      bodyData.append("file", body);
      const res = await api.uploader(bodyData);
      if (res) {
        console.log({ res });
        setImageURL(res.data.url);
        onSuccess && onSuccess();
      }
    } catch (err) {
      message.open({
        type: "error",
        content: `${err?.message}`,
      });
    } finally {
      setIsLoading(false);
      message.open({
        type: "success",
        content: "Image berhasil di upload!",
      });
    }
  }, []);

  return [isLoading, imageURL, upload];
};
