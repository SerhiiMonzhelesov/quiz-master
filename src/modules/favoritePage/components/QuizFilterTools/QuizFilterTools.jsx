import { FormFiltersWrapper } from "./QuizFilterToolsStyled";
import QuizeSearch from "../QuizSearch/QuizSearch";

const QuizeFilterTools = ({ setSearch, search }) => {
  return (
    <FormFiltersWrapper>
      <QuizeSearch search={search} setSearch={setSearch} />
    </FormFiltersWrapper>
  );
};

export default QuizeFilterTools;
