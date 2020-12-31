
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
      question: "Which is correct about dip and strike?",
      answers: {
        a: "Both are perpendicular to each other",
        b: "Both are parallel to each other",
        c: "Intersect at some angle other than 90 degree",
        d: "None of above"
      },
      correctAnswer: "a"
    },
    {
      question: "Relation between true dip and apparent dip",
      answers: {
        a: "True dip=apparent dip",
        b: "True dip>apparent dip",
        c: "True dip<apparent dip",
        d: "Depends on topographic condition"
      },
      correctAnswer: "b"
    },
    {
      question: "Determine dip of the line AB (approx.)<br>Length of AB=5cm Scale:1cm=400m<br><img src=\"images/eq21.png\"\ height='150' width='300'/>",
      answers: {
        a: "15 degree",
        b: "11 degree",
        c: "10 degree",
        d: "5 degree"
      },
      correctAnswer: "b"
    },
    {
      question: "Instrument used for contouring?",
      answers: {
        a: "Compass",
        b: "Clinometer",
        c: "Leveller",
        d: "All of the above",
      },
      correctAnswer: "d"
    },
    {
      question: " __is the direction of the line that is formed by the intersection of the plane of the rock bed with a horizontal surface",
      answers: {
        a: "Dip",
        b: "Strike",
        c: "Fold",
        d: "None of the above"
      },
      correctAnswer: "b"
    }
  ];



// ---------------------------- End -------------------------------








  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();
