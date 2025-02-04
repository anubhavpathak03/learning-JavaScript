document.addEventListener('DOMContentLoaded', () => {
    const startBtn = document.getElementById("start-btn");
    const restartBtn = document.getElementById("restart-btn");
    const nextBtn = document.getElementById("next-btn");
    const choicesList = document.getElementById("choices-list");
    const questionContainer = document.getElementById("question-container");
    const questionText = document.getElementById("question-text");
    const resultContainer = document.getElementById("result-container");
    const scoreDisplay = document.getElementById("score");
    const showCorrectAnswer = document.getElementById("correct-answer");
    
    const questions = [
        {
            question: "What is the capital of France?",
            choices: ["Paris", "London", "Berlin", "Madrid"],
            answer: "Paris",
        },
        {
            question: "Which planet is known as the Red Planet?",
            choices: ["Mars", "Venus", "Jupiter", "Saturn"],
            answer: "Mars",
        },
        {
            question: "Who wrote 'Hamlet'?",
            choices: [
                "Charles Dickens",
                "Jane Austen",
                "William Shakespeare",
                "Mark Twain",
            ],
            answer: "William Shakespeare",
        },
    ];

    let currentQuestionIndex = 0;
    let score = 0;

    startBtn.addEventListener('click', startQuiz);

    function startQuiz() {
        startBtn.classList.add("hidden"); // after click event statbtn hide
        resultContainer.classList.add("hidden");
        questionContainer.classList.remove("hidden");

        showQuestion();
    }

    function showQuestion() {
        nextBtn.classList.add('hidden');
        questionText.textContent = questions[currentQuestionIndex].question;
        choicesList.innerHTML = ""; // clear previous choices
        questions[currentQuestionIndex].choices.map((x) => {
            const li = document.createElement('li');
            li.textContent = x;
            li.addEventListener('click', () => selectAnswer(li, x));
            choicesList.appendChild(li)
        });
    }

    function selectAnswer(li, x) {
        showCorrectAnswer.classList.remove('hidden');
        showCorrectAnswer.textContent = "";
        const correctAnswer = questions[currentQuestionIndex].answer;
        Array.from(choicesList.children).forEach(child => {
            child.classList.add('disabled');
            child.style.pointerEvents = "none"
        });
        
        if(x === correctAnswer) {
            score++;
            li.style.backgroundColor = 'green'; // correct answer color
        } else {
            li.style.backgroundColor = 'red'; // incorrect answer color
            showCorrectAnswer.textContent = `Correct Answer is: ${correctAnswer}`;
        }
        nextBtn.classList.remove('hidden');

    }


    nextBtn.addEventListener('click', goingToNextQuestion);

    function goingToNextQuestion() {
        showCorrectAnswer.classList.add('hidden');
        currentQuestionIndex++;
        if(currentQuestionIndex < questions.length) {
            showQuestion();
        }else {
            showResult();
        }
    };

    function showResult() {
        questionContainer.classList.add('hidden');
        resultContainer.classList.remove('hidden');
        scoreDisplay.textContent = `${score} out of ${questions.length}`;
    };

    restartBtn.addEventListener('click', () => {
        currentQuestionIndex = 0;
        score = 0;
        resultContainer.classList.add('hidden');
        startQuiz();
    });
});