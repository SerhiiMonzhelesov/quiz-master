import { instance } from "./auth";

export async function getRandomQuizzes(params) {
  const { data } = await instance.get("/quizzes/random", { params });
  return data;
}

export async function getFilteredQuizzes(params) {
  const { ratingStars, categoryNames, inputValue, page=1 } = params;
  const categoryIds = categoryNames?.join("+");
  const { data } = await instance.get(
    `/quizzes?page=${page}${inputValue ? `&q=${inputValue}` : ""}${
      categoryIds ? `&category=${categoryIds}` : ""
    }${ratingStars || ratingStars === 0 ? `&rate=${ratingStars}` : ""}`
  );
  return data;
}

export async function getQuizCategories() {
  const { data } = await instance.get(`/categories`);
  return data;
}

export async function getPassedQuizzes(params) {
  const { data } = await instance.get("/quizzes/passedquiz", { params });
  return data;
}

export async function getUserQuizzes(page=1) {
  const { data } = await instance.get(`/quizzes/myQuiz?page=${page}`);
  return data;
}

export async function getTotalPassed() {
  const { data } = await instance.get("quizzes/total");
  return data;
}

export async function getQuiz(id) {
  const { data } = await instance.get(`/quizzes/${id}`);
  return data;
}

export async function getFavoriteQuizzes(page = 1) {  
  const { data } = await instance.get(`/users/favorites?page=${page}`);
  return data;
}

export async function createQuiz(quiz) {
  const { data } = await instance.post("/quizzes/", quiz);
  return data;
}

export async function quizResult({ quizId, result }) {
  const { data } = await instance.patch(`/quizzes/${quizId}`, result);
  return data;
}

export async function patchPassedQuiz({ result }) {
  const { data } = await instance.patch(`users/passed-quiz`, result);
  return data;
}

export async function retakePassedQuiz({ result }) {
  const { data } = await instance.patch(`users/retake-passed-quiz`, result);
  return data;
}

export async function updateQuiz(quizId) {
  const { data } = await instance.patch(`/quizzes/${quizId}`);
  return data;
}

export async function updateFavoriteQuiz(quizId) {
  const { data } = await instance.patch(`/users/favorites`, quizId);
  return data;
}

export async function deleteQuiz(quizId) {
  const { data } = await instance.delete(`/quizzes/${quizId}`);
  return data;
}
