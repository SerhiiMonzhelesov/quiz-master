import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFilteredQuizzesThunk } from "../../redux/quiz/quizThunks";
import { updateFiltered, updateFilteredQty } from "../../redux/quiz/quizSlice";
import {
  selectDiscoverFilteredQty,
  selectDiscoverFilteredQuizes,
} from "../../redux/selectors";
import BtnLoadMore from "../../shared/components/Buttons/BtnLoadMore/BtnLoadMore";
import PageTopBar from "../../shared/components/PageTopBar/PageTopBar";
import QuizesList from "../../shared/components/QuizesList/QuizesList";
import QuizeFilterTools from "../../modules/discoverPage/components/QuizFilterTools/QuizFilterTools";
import { PageWrapper, SectionWrapper } from "./DiscoverPageStyled";

const DiscoverPage = () => {
  const dispatch = useDispatch();

  const filteredQuizes = useSelector(selectDiscoverFilteredQuizes);
  const totalQty = useSelector(selectDiscoverFilteredQty);
  const [childrenCategoryNames, setChildrenCategoryNames] = useState([]);
  const [adultCategoryNames, setAdultCategoryNames] = useState([]);
  const [page, setPage] = useState(2);
  const [commonFilter, setCommonFilter] = useState({
    ratingStars: null,
    categoryNames: [],
  });

  useEffect(() => {
    if (
      !commonFilter.ratingStars &&
      commonFilter.ratingStars !== 0 &&
      !commonFilter.categoryNames.length
    )
      return;
    dispatch(updateFiltered([]));
    dispatch(getFilteredQuizzesThunk({ ...commonFilter }));
    

    return () => {
      dispatch(updateFiltered([]));
      dispatch(updateFilteredQty(null))
    };
  }, [dispatch, commonFilter]);

  const handleCategorySelection = (data, selectTitle) => {
    const isChecked = data.target.checked;
    const selectedCategoryName = data.target.value;
    const selectedCategoryId = data.target.id;

    if (isChecked) {
      setCommonFilter((prevCommonFilter) => ({
        ...prevCommonFilter,
        categoryNames: [...prevCommonFilter.categoryNames, selectedCategoryId],
      }));
      if (selectTitle === "For children") {
        setChildrenCategoryNames((prevChildrenCategoryNames) => [
          ...prevChildrenCategoryNames,
          selectedCategoryName,
        ]);
      } else {
        setAdultCategoryNames((prevAdultCategoryNames) => [
          ...prevAdultCategoryNames,
          selectedCategoryName,
        ]);
      }
    } else {
      const updatedCategoryName = commonFilter.categoryNames.filter(
        (name) => name !== selectedCategoryId
      );
      setCommonFilter((prevCommonFilter) => ({
        ...prevCommonFilter,
        categoryNames: updatedCategoryName,
      }));

      if (selectTitle === "For children") {
        const updatedChildrenCategoryName = childrenCategoryNames.filter(
          (name) => name !== selectedCategoryName
        );
        setChildrenCategoryNames(updatedChildrenCategoryName);
      } else {
        const updatedAdultCategoryName = adultCategoryNames.filter(
          (name) => name !== selectedCategoryName
        );
        setAdultCategoryNames(updatedAdultCategoryName);
      }
    }
  };

  const handleStarSelection = (starsQty) => {
    setCommonFilter((prevCommonFilter) => ({
      ...prevCommonFilter,
      ratingStars: Number(starsQty),
    }));
  };

  const selectedCategoryNames = {
    childrenCategoryNames,
    adultCategoryNames,
  };

  const handleLoadMore = () => {
    dispatch(getFilteredQuizzesThunk({ page, ...commonFilter }));
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <PageWrapper>
      <SectionWrapper>
        <PageTopBar titlePage="Discover" />
        <QuizeFilterTools
          handleStarSelection={handleStarSelection}
          handleCategorySelection={handleCategorySelection}          
          totalResults={totalQty}
          selectedCategoryNames={selectedCategoryNames}
          commonFilter={commonFilter}
        />
        <QuizesList quizzesArr={filteredQuizes} className={"bottomVariant"} />
        {totalQty > 8 && filteredQuizes.length !== totalQty && (
          <BtnLoadMore handleLoadMore={handleLoadMore} />
        )}
      </SectionWrapper>
    </PageWrapper>
  );
};

export default DiscoverPage;
