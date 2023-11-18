import { StyledStats } from "./Stats.styled";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectTotal } from "../../../../redux/selectors";
import Paragraph from "../../../../shared/components/Paragraph/Paragraph";
import { useEffect } from "react";
import { getTotalPassedThunk } from "../../../../redux/quiz/quizThunks";

function Stats() {
const total = useSelector(selectTotal);
 const dispatch = useDispatch();
  useEffect(() => {
    if (total === null) {
      dispatch(getTotalPassedThunk())
    }
  }, [dispatch,total]);



  return (
    <StyledStats>
      <div>
        <h2>{total}</h2>
        <Paragraph>People passed the quiz</Paragraph>
      </div>
      <div>
        <p>© QuizMaster 2023 All rights reserved</p>
        <ul>
          <li>
            <Link to="/">Privacy Policy</Link>
          </li>
          <li>
            <Link to="/">Terms of Service</Link>
          </li>
        </ul>
      </div>
    </StyledStats>
  );
}

export default Stats;
