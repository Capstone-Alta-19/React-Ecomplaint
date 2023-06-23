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

// export const useGetProfile = () => {
//   const [isLoading, setIsLoading] = useState(false);
//   const [data, setData] = useState();

//   const getData = useCallback(async () => {
//     try {
//       setIsLoading(true);
//       const res = await api.getProfile();
//       setData(res.data);
//     } catch (err) {
//       message.open({
//         type: "error",
//         content: `${err?.message}`,
//       });
//     } finally {
//       setIsLoading(false);
//     }
//   }, []);

//   return [isLoading, data, getData];
// };

// export const useGetDasboardTotal = () => {
//   const [isLoading, setIsLoading] = useState(false);
//   const [data, setData] = useState();

//     const getDashboardTotalData = useCallback(async (body) => {
//       try {
//         setIsLoading(true);
//         const res = await api.dashboardTotal(body);
//         if (res) {
//           setData(res.data);
//           onSuccess && onSuccess();
//           message.open({
//             type: "success",
//             content: " Data berhasil dimuat",
//           });
//           setIsLoading(false);
//         }
//       } catch (err) {
//         message.open({
//           type: "error",
//           content: `${err?.message}`,
//         });
//       } finally {
//         setIsLoading(false);
//       }
//     }, []);

//   return [isLoading, data, getDashboardTotalData];
// };
