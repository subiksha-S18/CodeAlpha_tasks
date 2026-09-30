let cards = [
    {
        question: "What is HTML?",
        answer: "HTML stands for HyperText Markup Language."
    },
    {
        question: "What is CSS?",
        answer: "CSS stands for Cascading Style Sheets."
    },
    {
        question: "What is JavaScript?",
        answer: "JavaScript is a programming language used to make web pages interactive."
    },
    {
        question: "What is a database?",
        answer: "A database is a collection of organized data."
    },
    {
        question: "What is Python?",
        answer: "Python is a high-level programming language."
    }
];

let currentCard = 0;

const questionElement = document.getElementById("question");
const answerElement = document.getElementById("answer");
const counterElement = document.getElementById("counter");
const showAnswerBtn = document.getElementById("showAnswerBtn");

function displayCard() {

    questionElement.textContent = cards[currentCard].question;

    answerElement.textContent = cards[currentCard].answer;

    answerElement.style.display = "none";

    showAnswerBtn.textContent = "Show Answer";

    counterElement.textContent =
        `${currentCard + 1} / ${cards.length}`;
}

function showAnswer() {

    if (answerElement.style.display === "none") {

        answerElement.style.display = "block";

        showAnswerBtn.textContent = "Hide Answer";

    } else {

        answerElement.style.display = "none";

        showAnswerBtn.textContent = "Show Answer";
    }
}

function nextCard() {

    if (currentCard < cards.length - 1) {

        currentCard++;

    } else {

        currentCard = 0;
    }

    displayCard();
}

function previousCard() {

    if (currentCard > 0) {

        currentCard--;

    } else {

        currentCard = cards.length - 1;
    }

    displayCard();
}

function addCard() {

    let question = prompt("Enter your question:");

    if (!question) {
        return;
    }

    let answer = prompt("Enter the answer:");

    if (!answer) {
        return;
    }

    cards.push({
        question: question,
        answer: answer
    });

    currentCard = cards.length - 1;

    displayCard();

    alert("Flashcard added successfully!");
}

function editCard() {

    let newQuestion = prompt(
        "Edit question:",
        cards[currentCard].question
    );

    if (!newQuestion) {
        return;
    }

    let newAnswer = prompt(
        "Edit answer:",
        cards[currentCard].answer
    );

    if (!newAnswer) {
        return;
    }

    cards[currentCard].question = newQuestion;
    cards[currentCard].answer = newAnswer;

    displayCard();

    alert("Flashcard updated successfully!");
}

function deleteCard() {

    if (cards.length === 1) {

        alert("You must have at least one flashcard.");

        return;
    }

    let confirmDelete = confirm(
        "Are you sure you want to delete this flashcard?"
    );

    if (confirmDelete) {

        cards.splice(currentCard, 1);

        if (currentCard >= cards.length) {
            currentCard = cards.length - 1;
        }

        displayCard();

        alert("Flashcard deleted!");
    }
}

displayCard();