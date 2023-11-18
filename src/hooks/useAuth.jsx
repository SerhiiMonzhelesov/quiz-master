import { useSelector } from "react-redux";
import {
  selectIsAuth,
  selectIsRefreshing,
  selectUser,
} from "../redux/user/userSelectors";

export const useAuth = () => {
  return {
    user: useSelector(selectUser),
    isAuth: useSelector(selectIsAuth),
    isRefreshing: useSelector(selectIsRefreshing),
  };
};
