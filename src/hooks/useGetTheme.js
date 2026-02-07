import { useSelector } from "react-redux";
export const useGetTheme = () => {
  return useSelector((state) => state?.local?.themeReducer?.value);
};
