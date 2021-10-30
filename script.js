// var questionList1 = {
//     questionList: "True or false: the * selector in CSS selects all HTML elements and applies a style to them"

// a) 'true'
// b) 'false'

// }
// //a is correct

//var qustionList2= {
//questionLists: "The purpose of the .gitignore file is to prevent unwanted files from being committed.",
// a)'true'
// b) 'false'
//     }

// //a is correct

// var qustionList3= {
//     questionLists: " Git is the version control software on your computer. GitHub is a website that can host remote Git repositories"
// a)'true'
// b) 'false'
//     }
//     //a-correct
//     btnbtn-primary.addEventListener("click", questionList1);

//i created 2 div wecime to quiz and myDiv, myDiv i displaeyd as a  none that why i created a function to display it as a block
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



var question1 = {
  "question": "The purpose of the .gitignore file is to prevent unwanted files from being committed.",
  "answer1": "true",
  "answer2": "false",
  "correct": "true"
}

var question2 = {
  "question": "Git is the version control software on your computer. GitHub is a website that can host remote Git repositories",
  "answer1": "true",
  "answer2": "false",
  "correct": "true"
}

var question3 = {
  "question": " the * selector in CSS selects all HTML elements and applies a style to them ",
  "answer1": true,
  "answer2": false
}

var timeLeft = 90;
var userScore = 3;
var score = 0
//create an array with questions
var questions = [question1, question2, question3]
console.log(questions[0].question)
var currentQuestion = 0

function nextQuestion() {
  if (currentQuestion === 0) {
    document.getElementById('questions').innerHTML = questions[0].question
    document.getElementById('answer1').innerHTML = questions[0].answer1
    document.getElementById('answer2').innerHTML = questions[0].answer2
    currentQuestion++
  } else {
    document.getElementById('questions').innerHTML = questions[currentQuestion].question
    document.getElementById('answer1').innerHTML = questions[currentQuestion].answer1
    document.getElementById('answer2').innerHTML = questions[currentQuestion].answer2
    currentQuestion++
    console.log(currentQuestion)
  }

if (currentQuestion < questions.length) {
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
  if (selectedAnswer === currentQuestion.answer) {
    questionResultEl.textContent = 'Correct!';
    questionResultEl.setAttribute('class', 'question-results');
  }
  else {
    questionResultEl.textContent = 'Wrong!';
    questionResultEl.setAttribute('class', 'question-results');

    timeLeft -= 10;
    clockTick;

    timerID = setInterval(clockTick, 1000);
    generateNewQuestion();
  }
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
  questionZoneEl.style.display = 'none'
  finalScoreContainerEl.style.display = 'block'

  finalScoreEl.textContent = userScore;
}
      document.getElementById("button").addEventListener("click", nextQuestion);