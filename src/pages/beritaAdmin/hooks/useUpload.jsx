

export const useSingleUploader = () => {
    const [isLoading, setIsLoading] = useState(false);
  
    const upload = useCallback(async (body, onSuccess) => {
      try {
        setIsLoading(true);
        const bodyData = new FormData();
        bodyData.append("photo_url", data)
        const res = await api.uploader(bodyData);
        if (res) {
          onSuccess && onSuccess(res.data);
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
  
    return [isLoading, upload];
  };