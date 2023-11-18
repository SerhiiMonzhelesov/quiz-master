import { instance } from "./auth";

export async function getAllReviews(params) {
  const { data } = await instance.get("/feedback", {
    params,
  });
  return data;
}

export async function createReview(review) {
  const { data } = await instance.post("/feedback", review);
  return data;
}

export async function createReviewQuiz({ quizId, rate }) {
  const { data } = await instance.post(`/feedback/${quizId}`, { rate });
  return data;
}

export async function createQuizReview(reviewData) {
  const obj = {
    rate: reviewData.reviewData.rate,
    comment: reviewData.reviewData.comment,
    userName: reviewData.reviewData.userName,
  };
  if (reviewData.reviewData.userAvatar) {
    obj.userAvatar = reviewData.reviewData.userAvatar;
  }
  const { data } = await instance.post(`/feedback/${reviewData.quizId}`, obj);
  return data;
}
