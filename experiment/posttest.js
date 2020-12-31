
// Don't touch the below code

(function() {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        //answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");


// Don't touch the above code




// Write your MCQs here --- Start --- --------------------

  const myQuestions = [
    {
      question: "Determine the angle of dip in the following<br><img src=\"images/dip2.png\"\ height='253' width='300' />",
      answers: {
      a: "26.565&deg; to North",
      b: "63.435&deg; to North",
      c: "0&deg; to North",
      d: "90&deg; to North"
      },
      correctAnswer: "b"
    },
    {
        question: "The dip angle is",
        answers: {
          a: "tan<sup>-1</sup>(gradient)",
          b: "sin<sup>-1</sup>(gradient)",
          c: "cos<sup>-1</sup>(gradient)",
          d: "cot<sup>-1</sup>(gradient)"
        },
        correctAnswer: "a"
    },
    {
      question: "Contour lines (thinner lines) between index contours are called",
      answers: {
          a: "Primary contour lines",
          b: "Intermediate contour lines",
          c: "Isolated contour lines",
          d: "None of the above"
      },
      correctAnswer: "b"
    },
    {
      question: "Which of the following is true for Direction of dip",
      answers: {
        a: "Direction in which water would flow if poured onto the plane",
        b: "Compass direction towards which the plane slopes",
        c: "Both A and B",
        d: "None of the above"
      },
      correctAnswer: "c"
    },
    {
      question: "Contour map is given below based on it answer the following questions with best possible answer.?<br><img src=\"images/dip3.png\"\ height='253' width='300'><br>Scale: 1cm=100m<br>Given that: AD=1.80cm, AB=1.15m, BD=0.6cm, DC=0.5cm, CE=1m",
      answers: {
        a: "45",
        b: "54",
        c: "60",
        d: "30"
      },
      correctAnswer: "a"
    }
  ];




// ---------------------------- End -------------------------------








  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();
