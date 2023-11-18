export const selectIsLoading = (state) => state.root.isLoading;
export const selectReviews = (state) => state.feedback.reviews;

export const selectTotal = (state) => state.quiz.quizzes.total;
export const selectRandomAdult = (state) => state.quiz.quizzes.random.adult;
export const selectRandomChildren = (state) =>
  state.quiz.quizzes.random.children;

export const selectDiscoverAdult = (state) => state.quiz.categoryType.adult;
export const selectDiscoverChildren = (state) =>
  state.quiz.categoryType.children;
export const selectDiscoverAllCategories = (state) => state.quiz.allCategories;
export const selectDiscoverFilteredQuizes = (state) =>
  state.quiz.quizzes.filtered;
export const selectDiscoverFilteredQty = (state) =>
  state.quiz.quizzes.filteredQty;
export const selectFavorite = (state) => state.quiz.quizzes.favorites;
export const selectFavoriteQty = (state) => state.quiz.quizzes.favoritesQty;
export const selectOwnQuizes = (state) => state.quiz.quizzes.ownQuizes;
export const selectOwnQuizesQty = (state) => state.quiz.quizzes.ownQuizesQty;
export const selectPassed = (state) => state.quiz.quizzes.passed;
export const currentCreated = (state) => state.quiz.quizzes.currentCreated;

export const selectReview = (state) => state.feedback.reviews;
export const selectReviewPage = (state) => state.feedback.page;
export const selectTotalReviews = (state) => state.feedback.total;
