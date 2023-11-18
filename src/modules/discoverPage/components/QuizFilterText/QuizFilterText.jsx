import RatingStarsRadio from "../RatingStarsRadio/RatingStarsRadio";
import {
  PStyled,
  RatingBox,
  ResultBox,
  SpanStyled,
  TextWrapper,
} from "./QuizFilterTextStyled";

const QuizFilterText = ({
  handleStarSelection,
  totalResults = 0,
  selectedCategoryNames,
}) => {
  const { childrenCategoryNames, adultCategoryNames } = selectedCategoryNames;

  return (
    <>
      <TextWrapper>
        <ResultBox>
          <SpanStyled>Result:</SpanStyled>
          <PStyled>{totalResults}</PStyled>
          <SpanStyled>
            {childrenCategoryNames?.length
              ? `(For children, themes: ${childrenCategoryNames.join(", ")})`
              : ""}
            {adultCategoryNames?.length
              ? `(For adults, themes: ${adultCategoryNames.join(", ")})`
              : ""}
          </SpanStyled>
        </ResultBox>
        <RatingBox>
          <SpanStyled>Specify the desired rating:</SpanStyled>
          <RatingStarsRadio handleStarSelection={handleStarSelection} />
        </RatingBox>
      </TextWrapper>
    </>
  );
};

export default QuizFilterText;
