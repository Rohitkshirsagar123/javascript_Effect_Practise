// Function to fetch questions from the Open Trivia Database API
function fetchQuestions() {
    fetch('https://opentdb.com/api.php?amount=10&category=9&type=multiple')
      .then((response) => response.json())
      .then((data) => {
        // Extract the questions and answers from the API response
        quiz = data.results.map((questionData) => ({
          question: questionData.question,
          ans1text: questionData.incorrect_answers[0],
          ans2text: questionData.incorrect_answers[1],
          ans3text: questionData.incorrect_answers[2],
          ans4text: questionData.correct_answer,
          answer: questionData.correct_answer,
        }));
  
        setupQuestion(0);
      })
      .catch((error) => {
        console.error('Error fetching questions:', error);
      });
  }
  
  // Function to set up the question and answer choices
  function setupQuestion(index) {
    const question_val = document.querySelector("#q");
    const option_a = document.getElementById("que_i_a");
    const option_b = document.getElementById("que_i_b");
    const option_c = document.getElementById("que_i_c");
    const option_d = document.getElementById("que_i_d");
    let gap=". "
  
    question_val.textContent = `${currentQuestion+1}${gap}${quiz[index].question}`;
    option_a.textContent = quiz[index].ans1text;
    option_b.textContent = quiz[index].ans2text;
    option_c.textContent = quiz[index].ans3text;
    option_d.textContent = quiz[index].ans4text;
  }
  
  // Function to handle the submit button click event
  function handleAnswerSubmission() {
    const checkedAns = document.querySelector('input[type="radio"]:checked');
    
    if (checkedAns === null) {
      alert("Please select an answer");
    } else {
      if (checkedAns.nextElementSibling.textContent === quiz[currentQuestion].answer) {
        score++;
      }
  
      currentQuestion++;
      if (currentQuestion < quiz.length) {
        setupQuestion(currentQuestion);
        checkedAns.checked = false;
      } else {
        alert("Your score is " + score + " out of " + quiz.length);
        location.reload();
      }
    }
  }
  
  // Event listener for the submit button
  const submit = document.getElementById("submit");
  submit.addEventListener("click", handleAnswerSubmission);
  
  // Initialize the quiz when the page loads
  let currentQuestion = 0;
  let score = 0;
  let quiz = [];
  
  fetchQuestions();
  