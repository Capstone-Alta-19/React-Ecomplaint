import { useCallback, useState } from "react";
import { api } from "../../../api";
import { message } from "antd";

export const useGetLaporan = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState();

  const getLaporanData = useCallback(
    async (sort, type, search, page, limit, onSuccess) => {
      try {
        setIsLoading(true);
        const res = await api.dashboard(sort, type, search, page, limit);
        if (res) {
          setData(res.data);
          onSuccess && onSuccess();
          message.open({
            type: "success",
            content: " Data berhasil dimuat",
          });
          setIsLoading(false);
        }
      } catch (err) {
        message.open({
          type: "error",
          content: `${err?.message}`,
        });
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  return [isLoading, data, getLaporanData];
};

export const useGetProfile = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState();

  const getData = useCallback(async () => {
    try {
      setIsLoading(true);
      const res = await api.getProfile();
      setData(res.data);
    } catch (err) {
      message.open({
        type: "error",
        content: `${err?.message}`,
      });
    } finally {
      setIsLoading(false);
    }
  }, []);

  return [isLoading, data, getData];
};

export const useGetDashboardTotal = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState();

  const getDashboardTotalData = useCallback(async () => {
    try {
      const res = await api.dashboardTotal();
      setData(res.data);
      message.open({
        type: "success",
        content: " Data berhasil dimuat",
      });
      setIsLoading(false);
      // }
    } catch (err) {
      message.open({
        type: "error",
        content: `${err?.message}`,
      });
    } finally {
      setIsLoading(false);
    }
  }, []);

  return [isLoading, data, getDashboardTotalData];
};

export const useGetLaporanById = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState();

  const getLaporanById = useCallback(async (id, body )=> {
    try {
      const res = await api.getLaporanById(id, body);
      if (res) {
        setData(res.data);
        // onSuccess && onSuccess();
        message.open({
          type: "success",
          content: " Data berhasil dimuat",
        });
        setIsLoading(false);
      }
      // setData(res.data);
      // message.open({
      //   type: "success",
      //   content: " Data berhasil dimuat",
      // });
      // setIsLoading(false);
      // // }
    } catch (err) {
      message.open({
        type: "error",
        content: `${err?.message}`,
      });
    } finally {
      setIsLoading(false);
    }
  }, []);

  return [isLoading, data, getLaporanById];
};
