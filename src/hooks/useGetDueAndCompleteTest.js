import { useSelector } from "react-redux";
export const useGetDueAndCompleteTest = () => {
  return useSelector((state) => state?.session?.testReducer?.value);
};
