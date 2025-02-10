document.addEventListener("DOMContentLoaded", () => {
    const welcomePage = document.querySelector(".welcome-page");
    const mainPage = document.querySelector(".main-page");
    const resultTab = document.querySelector(".result-tab");
    const startBtn = document.querySelector(".start-btn");
    const options = document.querySelectorAll(".option");
    const playerChoiceText = document.querySelector(".player-choice");
    const computerChoiceText = document.querySelector(".compt-choice");
    const scoreCount = document.querySelector(".score-count");
    const playAgainBtn = document.querySelector(".play-again");
    const quitBtn = document.querySelector(".quit");
    const rulesBtn = document.querySelector(".rules-btn");
    const rulesDisplay = document.querySelector(".rules-display");
    const closeBtn = document.querySelector(".close-btn");

    let score = 0;
    const choices = ["rock", "paper", "scissors"];

    startBtn.addEventListener("click", () => {
        welcomePage.style.display = "none";
        mainPage.style.display = "block";
    });

    options.forEach(option => {
        option.addEventListener("click", () => {
            const playerChoice = option.children[0].alt.toLowerCase();
            const computerChoice = choices[Math.floor(Math.random() * choices.length)];
            
            displayResult(playerChoice, computerChoice);
        });
    });

    function displayResult(player, computer) {
        mainPage.style.display = "none";
        resultTab.style.display = "block";
        playerChoiceText.innerText = `You Chose: ${player}`;
        computerChoiceText.innerText = "Computer Choosing...";

        setTimeout(() => {
            computerChoiceText.innerText = `Computer Chose: ${computer}`;
            const result = getWinner(player, computer);
            updateScore(result);
        }, 2000);
    }

    function getWinner(player, computer) {
        if (player === computer) return "draw";
        if ((player === "rock" && computer === "scissors") ||
            (player === "paper" && computer === "rock") ||
            (player === "scissors" && computer === "paper")) {
            return "player";
        }
        return "computer";
    }

    function updateScore(winner) {
        if (winner === "player") {
            score++;
        } else if (winner === "computer") {
            score--;
        }
        scoreCount.innerText = score;
    }

    playAgainBtn.addEventListener("click", () => {
        resultTab.style.display = "none";
        mainPage.style.display = "block";
    });

    quitBtn.addEventListener("click", () => {
        resultTab.style.display = "none";
        welcomePage.style.display = "block";
        score = 0;
        scoreCount.innerText = score;
    });

    rulesBtn.addEventListener("click", () => {
        rulesDisplay.style.display = "block";
    });

    closeBtn.addEventListener("click", () => {
        rulesDisplay.style.display = "none";
    });
});
