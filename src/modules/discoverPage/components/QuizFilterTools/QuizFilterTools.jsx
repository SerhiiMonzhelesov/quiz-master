import { FormFiltersWrapper } from "./QuizFilterToolsStyled";
import QuizeSearch from "../QuizesSearch/QuizesSearch";
import QuizFilterText from "../QuizFilterText/QuizFilterText";

const QuizeFilterTools = ({
  handleStarSelection,
  handleCategorySelection,
  totalResults,
  selectedCategoryNames,
  commonFilter,
}) => {
  return (
    <FormFiltersWrapper>
      <QuizeSearch
        handleCategorySelection={handleCategorySelection}
        commonFilter={commonFilter}
      />
      <QuizFilterText
        handleStarSelection={handleStarSelection}
        totalResults={totalResults}
        selectedCategoryNames={selectedCategoryNames}
      />
    </FormFiltersWrapper>
  );
};

export default QuizeFilterTools;
