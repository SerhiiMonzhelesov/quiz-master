import { Main } from "../../modules/mainPage";
import { useSelector, useDispatch } from "react-redux";
import {
  selectReviews,
  selectRandomAdult,
  selectRandomChildren,
  selectTotalReviews,
} from "../../redux/selectors";
import { selectIsAuth } from "../../redux/user/userSelectors";
import {
  getRandomQuizzesThunk
} from "../../redux/quiz/quizThunks";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getAllReviewsThunk } from "../../redux/feedback/feedbackThunks";

const MainPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const reviews = useSelector(selectReviews);
  const totalReviews = useSelector(selectTotalReviews);
  const randomAdultQuizzes = useSelector(selectRandomAdult);
  const randomChildrenQuizzes = useSelector(selectRandomChildren);
  const user = useSelector(selectIsAuth);

  const handleChooseTest = () => {
    if (user) {
      navigate("/discover");
    } else {
      navigate("/randomquiz/Adults");
    }
  };

  const handleCreateTest = () => {
    if (user) {
      navigate("/createquiz");
    } else {
      toast.info("Available only for authorized users");
    }
  };

  useEffect(() => {
    if (reviews.length === 0) {
      dispatch(getAllReviewsThunk({ page: 1, limit: 8 }));
    }
  }, [dispatch, reviews]);

  useEffect(() => {
    if (
      randomAdultQuizzes.length === 0 ||
      !randomChildrenQuizzes.length === 0
    ) {
      dispatch(getRandomQuizzesThunk({ page: 1, limit: 8 }));
    }
  }, [dispatch, randomAdultQuizzes, randomChildrenQuizzes]);

  return (
    <Main
      data={{
        user,
        reviews,
        totalReviews,
        randomAdultQuizzes,
        randomChildrenQuizzes,
        handleChooseTest,
        handleCreateTest,
      }}
    />
  );
};

export default MainPage;
