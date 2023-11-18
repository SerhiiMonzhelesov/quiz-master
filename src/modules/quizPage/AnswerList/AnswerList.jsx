import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getQuizThunk } from "../../../redux/quiz/quizThunks";
import QuizQuestion from "../QuizQuestion";

const AnswerList = () => {
  const { quizId } = useParams();
  const dispatch = useDispatch();
  const [quizData, setQuizData] = useState([]);

  useEffect(() => {
    dispatch(getQuizThunk(quizId)).then((data) => {
      setQuizData(data.payload.questions);
    });
  }, [dispatch, quizId]);

  return (
    <div>
      {quizData.length > 0 && (
        <QuizQuestion questions={quizData} quizId={quizId} />
      )}
    </div>
  );
};

export default AnswerList;
