export default function getMissedFields(
  questionChanges,
  quizChanges,
  currentQuiz,
  allCategories
) {
  const requiredFields = {
    quiz: {
      quizName: "Quiz theme",
      quizType: "Audience",
      quizCategory: "Category",
    },
    question: {
      type: "Create",
      time: "Time",
      question: "Enter a question",
      answers: "Enter answer",
    },
  };
  let fields = {};
  if (Object.keys(quizChanges).length <= 3) {
    fields.quiz = [];
    for (const key in requiredFields.quiz) {
      if (
        key !== "quizType" &&
        (!(key in quizChanges) || quizChanges[key] === "")
      ) {
        fields.quiz.push(requiredFields.quiz[key]);
      }
    }
  }
  if (
    (Object.keys(questionChanges).length <= 7 &&
      questionChanges.type === "true or false") ||
    (Object.keys(questionChanges).length <= 11 &&
      questionChanges.type === "quiz") ||
    !questionChanges.type
  ) {
    fields.question = [];
    for (const key in requiredFields.question) {
      if (
        !(key in questionChanges) ||
        questionChanges[key] === "" ||
        Object.keys(questionChanges).includes(key)
      ) {
        console.log(
          "!Object.keys(questionChanges).includes([key]): ",
          Object.keys(questionChanges)
        );
        fields.question.push(requiredFields.question[key]);
      }
    }
  }
  return fields;
}
