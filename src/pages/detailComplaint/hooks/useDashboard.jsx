import { useCallback, useState } from "react";
import { api } from "../../../api";
import { message } from "antd";

export const useGetDashboard = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState();

  const getDashbordData = useCallback(
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

  return [isLoading, data, getDashbordData];
};

export const useUpdateDashboard = () => {
  const [isLoading, setIsLoading] = useState(false);

  const updateDashboardData = useCallback(async (id, body, onSuccess) => {
    try {
      console.log(id);
      setIsLoading(true);
      await api.dashboardUpdate(id, body);
      onSuccess && onSuccess();
    } catch (err) {
      message.open({
        type: "error",
        content: `${err?.message}`,
      });
    } finally {
      setIsLoading(false);
      message.open({
        type: "success",
        content: "berhasil update",
      });
      console.log(id);
    }
  }, []);

  return [isLoading, updateDashboardData];
};

export const useDeleteDashboard = () => {
  const [isLoading, setIsLoading] = useState(false);

  const deleteDashboardData = useCallback(async (id, onSuccess) => {
    try {
      setIsLoading(true);
      await api.dashboardDelete(id);
      onSuccess && onSuccess();
    } catch (err) {
      message.open({
        type: "error",
        content: `${err?.message}`,
      });
    } finally {
      setIsLoading(false);
      message.open({
        type: "success",
        content: "berhasil hilang",
      });
    }
  }, []);

  return [isLoading, deleteDashboardData];
};

export const useGetCSV = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState();

  const getCSV = useCallback(async (sort, type, search, limit, onSuccess) => {
    try {
      setIsLoading(true);
      const res = await api.getCSVData(sort, type, search, limit);
      if (res) {
        setData(res.data);

        //onSuccess && onSuccess();
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
  }, []);

  return [isLoading, data, getCSV];
};
