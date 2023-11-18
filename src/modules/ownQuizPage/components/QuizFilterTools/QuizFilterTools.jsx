import { FormFiltersWrapper } from "./QuizFilterToolsStyled";
import QuizeSearch from "../QuizSearch/QuizSearch";

const QuizeFilterTools = ({ filteredQuizeCards }) => {
  return (
    <FormFiltersWrapper>
      <QuizeSearch filteredQuizeCards={filteredQuizeCards} />
    </FormFiltersWrapper>
  );
};

export default QuizeFilterTools;
