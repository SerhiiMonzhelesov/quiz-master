import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { BtnHeartS, FiHeartS } from "./BtnHeartStyled";
import { updateFavoriteQuizThunk } from "../../../../redux/quiz/quizThunks";
import { notifyBtnHeartReject } from "../../../NotificationToastify/Toasts";
import { selectIsAuth } from "../../../../redux/user/userSelectors";


const BtnHeart = ({ id, isFavorite, updateFavoriteQuizes }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const authorized = useSelector(selectIsAuth)
  const [isActive, setIsActive] = useState(true);

  const isLocationFavorite = location.pathname === "/favorite";  
  const newClassName =
    (isFavorite && isActive) || (!isFavorite && !isActive) || isLocationFavorite
      ? "favorite"
      : "";

  const handlerOnHeartClick = (evt) => {
    if(!authorized){
      notifyBtnHeartReject()
      return;
    }
    const id = evt.currentTarget.id;
    const quizId = {
      favorites: id,
    };    
    dispatch(updateFavoriteQuizThunk(quizId));
    setIsActive(!isActive);
  };

  return (
    <BtnHeartS
      type="button"
      id={id}
      onClick={(evt) =>
        isLocationFavorite
          ? updateFavoriteQuizes(evt)
          : handlerOnHeartClick(evt)
      }
    >
      <FiHeartS className={newClassName} />
    </BtnHeartS>
  );
};

export default BtnHeart;
