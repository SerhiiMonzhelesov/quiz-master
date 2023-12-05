export default function makeFieldsAnswers(
  type,
  value,
  selectAnswers,
  currentQuestion
) {
  let fields = {};

  if ((type || currentQuestion?.type) === "quiz") {
    selectAnswers.forEach((item, idx) => {
      fields = {
        ...fields,
        [`answers[${idx}][correctAnswer]`]: value === item ? true : false,
      };
    });
  } else {
    selectAnswers.forEach(
      (item, idx) =>
        (fields = {
          ...fields,
          [`answers[${idx}][answer]`]: idx === 0 ? "True" : "False",
          [`answers[${idx}][correctAnswer]`]: value === item ? true : false,
        })
    );
  }
  return fields;
}
