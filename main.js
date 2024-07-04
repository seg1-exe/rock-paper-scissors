/*RULES*/

const btnRules = document.getElementById('rules-button');
const btnCloseRules = document.getElementById('close-rules');
const rulesModal = document.getElementById('rules-modal');

btnRules.addEventListener('click', () => {
    rulesModal.style.display = 'flex';
});

btnCloseRules.addEventListener('click', () => {
    rulesModal.style.display = 'none';
});

/* STEP 1 SELECTORS */
const rock = document.getElementById('step-1-rock');
const paper = document.getElementById('step-1-paper');
const scissors = document.getElementById('step-1-scissors');
const step1 = document.getElementById('step-1');
const step2 = document.getElementById('step-2');
const stepResult = document.getElementById('step-result');

var userChoice = '';

var computerChoice = Math.random() * 3;

if (computerChoice < 1) {
    computerChoice = 'rock';
} else if (computerChoice < 2) {
    computerChoice = 'paper';
} else {
    computerChoice = 'scissors';
}

rock.addEventListener('click', () => {
    userChoice = 'rock';
    console.log('Choix utilisateur : ' + userChoice);
    console.log('Choix ordinateur : ' + computerChoice);
    step1.style.display = 'none';
    step2.style.display = 'flex';
    updateChoices();
});

paper.addEventListener('click', () => {
    userChoice = 'paper';
    console.log('Choix utilisateur : ' + userChoice);
    console.log('Choix ordinateur : ' + computerChoice);
    step1.style.display = 'none';
    step2.style.display = 'flex';
    updateChoices();
});

scissors.addEventListener('click', () => {
    userChoice = 'scissors';
    console.log('Choix utilisateur : ' + userChoice);
    console.log('Choix ordinateur : ' + computerChoice);
    step1.style.display = 'none';
    step2.style.display = 'flex';
    updateChoices();
});


const userChoiceElement = document.getElementById('you-choice');
const computerChoiceElement = document.getElementById('house-choice');

function updateChoices() {
    userChoiceElement.innerHTML = `<img src="images/icon-${userChoice}.svg" alt="${userChoice}">`;
    userChoiceElement.classList.add(userChoice);
    computerChoiceElement.innerHTML = `<img src="images/icon-${computerChoice}.svg" alt="${computerChoice}">`;
    computerChoiceElement.classList.add(computerChoice);

    setTimeout(() => {
        checkWinner();
    }, 2000);
}

const resultText = document.getElementById('result-text');
const userChoiceResult = document.getElementById('you-choice-final');
const computerChoiceResult = document.getElementById('house-choice-final');
const scoreNumber = document.getElementById('score-number');

let score = 0;

checkWinner = () => {
    if (userChoice === computerChoice) {
        step2.style.display = 'none';
        stepResult.style.display = 'flex';
        resultText.innerHTML = `<h2>IT'S A DRAW</h2>`;
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        step2.style.display = 'none';
        stepResult.style.display = 'flex';
        resultText.innerHTML = `YOU WON`;
        score++;
        scoreNumber.innerHTML = score;
    } else {
        step2.style.display = 'none';
        stepResult.style.display = 'flex';
        resultText.innerHTML = `YOU LOSE`;
    }

    userChoiceResult.innerHTML = `<img src="images/icon-${userChoice}.svg" alt="${userChoice}">`;
    userChoiceResult.classList.add(userChoice);
    computerChoiceResult.innerHTML = `<img src="images/icon-${computerChoice}.svg" alt="${computerChoice}">`;
    computerChoiceResult.classList.add(computerChoice);
}

const playAgain = document.getElementById('play-again');

playAgain.addEventListener('click', () => {
    step1.style.display = 'flex';
    step2.style.display = 'none';
    stepResult.style.display = 'none';
    userChoiceElement.innerHTML = '';
    userChoiceElement.classList.remove(userChoice);
    computerChoiceElement.innerHTML = '';
    computerChoiceElement.classList.remove(computerChoice);
    userChoiceResult.innerHTML = '';
    userChoiceResult.classList.remove(userChoice);
    computerChoiceResult.innerHTML = '';
    computerChoiceResult.classList.remove(computerChoice);
    userChoice = '';
    computerChoice = Math.random() * 3;

    if (computerChoice < 1) {
        computerChoice = 'rock';
    } else if (computerChoice < 2) {
        computerChoice = 'paper';
    } else {
        computerChoice = 'scissors';
    }
});





