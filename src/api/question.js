import { instance } from "./auth";

const options = {
  headers: {
    "Content-Type": "multipart/form-data",
  },
};

export async function addQuestion({ quizId, currentQuestion }) {
  const { data } = await instance.post(
    `/questions/${quizId}`,
    currentQuestion,
    options
  );
  return data;
}

export async function getQuestion(questionId) {
  const { data } = await instance.get(`/questions/${questionId}`);
  return data;
}

export async function updateQuestion({ questionId, question }) {
  const { data } = await instance.put(
    `/questions/${questionId}`,
    question,
    options
  );
  return data;
}

export async function deleteQuestion(questionId) {
  const { data } = await instance.delete(`/questions/${questionId}`);
  return data;
}
