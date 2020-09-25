const correctAnswers = ["B", "A", "B", "A", "A"];
const form = document.querySelector(".quiz-form");
const resultPanel = document.querySelector(".result");
const scoreTable = resultPanel.querySelector("span");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let score = 0;

  const userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
    form.q5.value,
  ];

  // check answers

  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 20;
    }
  });

  // Display Score

  scrollTo(0, 0);

  let counter = 0;

  const timer = setInterval(() => {
    scoreTable.textContent = `${counter}%`;
    if (counter == score) {
      clearInterval(timer);
    } else {
      counter++;
    }
  }, 15);

  //   resultPanel.setAttribute("class", "result py-4 bg-light text-center");
  resultPanel.classList.remove("d-none");
});
