import { useDispatch } from "react-redux";
import { addTheme } from "../store/features/theme/themeSlice";

export const useHandleTheme = () => {
  const dispatch = useDispatch();
  const handleTheme = (theme) => {
    if (!theme) return;
    document.body.classList.remove("dark", "light"); // Remove both classes
    document.body.classList.add(theme); // Add the desired class
    dispatch(addTheme(theme));
  };

  return handleTheme;
};
