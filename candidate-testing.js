const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = input.question("What is your name? " );
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = " ";
let questions = ['Who was the first American woman in space? ', 'True or false: 5000 meters = 5 kilometers. ', '(5 + 3)/2 * 10 = ? ', "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", 'What is the minimum crew size for the International Space Station (ISS)? '];
let correctAnswers = ['Sallly Ride', 'True', '40', 'Trajectory', '3'] ;
let candidateAnswers = [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
const input = require('readline-sync');


}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  /*const input = require('readline-sync');*/
 for(let i=0;i<=questions.length-1;i++){ 
   candidateAnswers[i] = input.question(questions[i])
 }
 /*  
   console.log([i+1] +") " + questions[i])
   let candidateAnswer = input.question("Your Answer:  ");
   console.log("Correct Answer: "+correctAnswers[i]);
       
}

for (let i = 0; i <= questions.length-1; i++){ 
  console.log([i+1] + ")" + questions[i])
  let candidateAnswer = (input.question("Your Answer: ")
  console.log("Correct Answer: " + correctAnswers[i])
*/



}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
/*
let i = 0
let grade = [];
let gradeTotal = ""

while (i < candidateAnswers.length){
  if(candidateAnswers.toLowerCase[i] == correctAnswers.toLowerCase[i]){
    gradeTotal = grade + 1;

  }
  else {
    gradeTotal += 0
  }
  console.log(`${Number([i])+1})${questions[i]}\n Your answer: ${candidateAnswers[i]} \n Correct Answer: ${correctAnswers[i]} \n Grade: ${grade[i]}`)
  i ++
}
gradeTotal = ((grade) / 5) * 100

console.log(`>>> Overall Grade: ${Number(gradeTotal)}% (${Number(grade)} of 5 responses correct) <<< \n >>>Status: <<<`)*/
let gradeTotal = 0
let numQuestions = questions.length
for (let i = 0; i < questions.length; i++){
  if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()){
    gradeTotal++
    }
   console.log(`${([i])+1})${questions[i]}\n Your answer: ${candidateAnswers[i]} \n Correct Answer: ${correctAnswers[i]} \n Grade: ${gradeTotal}`)
   } 
   let grade = (gradeTotal / questions.length) * 100
   console.log(`>>> Overall Grade: ${grade}% (${gradeTotal} of ${questions.length} responses correct)`);
   if (grade >= 80){
     coonsole.log(`>>> Status: PASSED <<<`)
   } else {
     console.log(`>>> Status: FAILED <<<`)
   }

  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.log("Candidate Name: " + candidateName);
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};