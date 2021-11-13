
//i created 2 div wecime to quiz and myDiv, myDiv i displaeyd as a  none that why i created a function to display it as a block32`
//this function swith what was in html on opposite things block to nonne. none to block by the click
// function myFunction() {
//   var x = document.getElementById("myDIV");
//   var y = document.getElementById("welcomeInfo");

//   y.style.display = "none"
//   x.style.display = "block"
// }
// let currentQuestion=0
// const question = [
//   {
//   question: "The purpose of the .gitignore file is to prevent unwanted files from being committed.",
//   answer: true
// },
// {
//   question: " Git is the version control software on your computer. GitHub is a website that can host remote Git repositories",
//   answer: true,
// }
// ]




// function showQuestion(question) {

//   questionElement.innerText = question[currentQuestion]




// question.answers.forEach(answer => {
//   const button = document.createElement('button')
//   button.innerText = answer.text
//   button.classList.add('btn')
//   if (answer.correct) {
//     button.dataset.correct = answer.correct
//   }
//   button.addEventListener('click', selectAnswer)
//   answerButtonsElement.appendChild(button)
// })
// }
// showQuestion() 







// var arrayofAnswers = [ question2, question3]
// function myFunction() {
//   document.getElementById ('myDIV') .innerHTML = arrayofAnswers[1].question

// }




// var question1 = {
//   "question": "The purpose of the .gitignore file is to prevent unwanted files from being committed.",
//   "answer1": "true",
//   "answer2": "false",
// "correct": "true"
// }

// var question2 = {
//   "question": "Git is the version control software on your computer. GitHub is a website that can host remote Git repositories",
//   "answer1": "true",
//   "answer2": "false",
// "correct":"true"
// }
// var correct= "true"
// var score = 0
// var questions = [question1,question2]

// console.log(questions[0].question)

// var currentQuestion = 0
// var getQuestionFromArray = false

// function nextQuestion(){
//   console.log(this) 

// if (currentQuestion<questions.length) {
//   if (!getQuestionFromArray){
//     if (correct==this.innerHTML){
//       score++
//     }
//   getQuestionFromArray = true
//   }
//   else {
//     if (questions[currentQuestion].correct==this.innerHTML){
//       score++
//     }

//   }console.log (score)
//   var answer1 = document.getElementById('answer1')
// var answer2 = document.getElementById('answer2')
//   document.getElementById('answer1').innerHTML = questions[currentQuestion].answer1
//   document.getElementById('answer2').innerHTML = questions[currentQuestion].answer2
// document.getElementById('myDIV').innerHTML = questions[currentQuestion].question
// document.getElementById('myDIV').appendChild(answer1)
// document.getElementById('myDIV').appendChild(answer2)
//   currentQuestion++
//   console.log(currentQuestion)
// }
// }

// var buttons= document.getElementsByClassName("btn-secondary")

// for (let i=0; i< buttons.length; i++) {
// buttons[i].addEventListener("click",nextQuestion )
// }

// console.log(document.getElementsByClassName("btn-secondary"))


// var qexample = {
//   title:"whats afish?",
//   choices:["a fish", "a dog", "a bird", "a car"],
//   answer: "a fish"
// }

// document.getElementById('myDIV').appendChild(answer1)
// document.getElementById('myDIV').appendChild(answer2)

var question1 = {
  "question": "The purpose of the .gitignore file is to prevent unwanted files from being committed.",
  "answer1": true,
  "answer2": false,
  "correct": "true"
}

var question2 = {
  "question": "Git is the version control software on your computer. GitHub is a website that can host remote Git repositories",
  "answer1": true,
  "answer2": false,
  "correct": "true"
}

var question3 = {
  "question": " the * selector in CSS selects all HTML elements and applies a style to them ",
  "answer1": true,
  "answer2": false,
  "correct": "true"
}

var timeLeft = 90;

var score = 0

var questionsEl = document.getElementById("questions");
var choicesEl = document.getElementById("choices");
var start = document.getElementById("start");
var finalScoreContainerEl=document.getElementById("end");
//create an array with questions
var questions = [question1, question2, question3]
console.log(questions[0].question)
var currentQuestion = 0
var getQuestionFromArray = false

var selectedAnswer;
var questionResultEl = document.getElementById("results");
var timerID;

function startQuiz() {
  timerID = setInterval(clockTick, 1000);
  // hde start screen
  var introEl = document.getElementById("start-screen");
  introEl.setAttribute("class", "hide");

  // un-hide questions section
  questionsEl.removeAttribute("class");

  nextQuestion();
}
//created another event listener it will show in brawser as true or false
document.getElementById("choice1").addEventListener("click", checkAnswer1);

function checkAnswer1() {
  selectedAnswer = this.innerHTML
  console.log(selectedAnswer)
  console.log(questions[currentQuestion].correct)
  if (selectedAnswer === questions[currentQuestion].correct) {
    questionResultEl.innerHTML = 'Correct!';
    questionResultEl.setAttribute('class', 'question-results');
    score++
  }
}
//creating a eventistener for answer false
document.getElementById("choice2").addEventListener("click", checkAnswer2);

function checkAnswer2() {
  selectedAnswer = this.innerHTML
  console.log(selectedAnswer)
  console.log(questions[currentQuestion].correct)
  if (selectedAnswer !== questions[currentQuestion].correct) {
    questionResultEl.innerHTML = 'Wrong!';
    questionResultEl.setAttribute('class', 'question-results');

  }
}


function nextQuestion() {
  questionResultEl.innerHTML = ""
  if (currentQuestion === 0) {
    document.getElementById('questions').innerHTML = questions[0].question
    document.getElementById('choice1').innerHTML = questions[0].answer1
    document.getElementById('choice2').innerHTML = questions[0].answer2
    currentQuestion++
  } else if (currentQuestion < questions.length) {

    document.getElementById('questions').innerHTML = questions[currentQuestion].question
    document.getElementById('choice1').innerHTML = questions[currentQuestion].answer1
    document.getElementById('choice2').innerHTML = questions[currentQuestion].answer2
    currentQuestion++
    console.log(currentQuestion)
    if (!getQuestionFromArray) {
      if (correct == this.innerHTML) {
        score++
      }
      getQuestionFromArray = true
    }
    else {
      if (questions[currentQuestion].correct == this.innerHTML) {
        score++
      }
    }
  }
  // to be reviewed
  //   if (currentQuestion < questions.length) {
  //     if (!getQuestionFromArray) {
  //       if (correct == this.innerHTML) {
  //         score++
  //       }
  //       getQuestionFromArray = true
  //     }
  //     else {
  //       if (questions[currentQuestion].correct == this.innerHTML) {
  //         score++
  //       }
  //     } 
  //   }
  else {
    endQuiz()

  } 
  // console.log (selectedAnswer)
  // if (selectedAnswer === currentQuestion.answer) {
  //   questionResultEl.textContent = 'Correct!';
  //   questionResultEl.setAttribute('class', 'question-results');
  // }
  // else {
  //   questionResultEl.textContent = 'Wrong!';
  //   questionResultEl.setAttribute('class', 'question-results');

  //   timeLeft -= 10;
  //   clockTick;

  //   timerID = setInterval(clockTick, 1000);
  //   generateNewQuestion();
  // }

}

function time() {
  timeLeft--
  timerCountdown.textContent = timeLeft;

  if (timeLeft <= 0) {
    endQuiz();
  };
};

function endQuiz() {
  clearInterval(timerID);
  
  questionsEl.style.display = 'none'
  questionResultEl.style.display = 'none'
  finalScoreContainerEl.style.display = 'block'
  document.getElementById("choice1").style.display="none"
  document.getElementById("choice2").style.display="none"
  document.getElementById("button").style.display="none"
  document.getElementById("score").textContent= score;

}
document.getElementById("button").addEventListener("click", nextQuestion);

function submitIn(e){ 
  e.preventDefault();
  console.log("hello")
var fname = document.getElementById("fname").value;
  localStorage.setItem("initials", fname);
  console.log(fname)

}
// currentQuestion.choices.forEach(function (choice, i) {
  document.getElementById("submitButton").addEventListener("click", submitIn);

//   var temp = document.createElement('button');

//   temp.textContent = element;
//   temp.setAttribute('class', 'cta cta-primary quiz-button');
//   temp.setAttribute('value', element);

//   temp.onclick = validateAnswer;

//   quizAnswersEl.appendChild(temp);

// });

function validateAnswer() {
  var currentQuestion = questions[questionIndex];
  var selectedAnswer = this.value;

  if (selectedAnswer === currentQuestion.answer) {
    questionResultEl.textContent = 'Correct!';
    questionResultEl.setAttribute('class', 'question-results');
  }
  else {
    questionResultEl.textContent = 'Wrong!';
    questionResultEl.setAttribute('class', 'question-results');

    timeLeft -= 10;
    clockTick;

    userScoreEl.textContent = userScore -= randomNumber(9, 21);
  };

  questionIndex++;

  generateNewQuestion();
};

