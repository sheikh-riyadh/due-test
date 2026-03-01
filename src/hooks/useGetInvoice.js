import { useSelector } from "react-redux";
export const useGetInvoice = () => {
  return useSelector((state) => state?.session?.invoiceReducer?.value);
};
