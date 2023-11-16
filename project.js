// modal

let modal = document.querySelector('.modal');
let nameInpt = document.querySelector('.modal-inpt');
let saveBtn = document.querySelector('.modal-btn');
let nameUser = document.querySelector('.headr-name-user');

function showModal() {
    modal.style.display = 'block';
}

function hideModal() {
    modal.style.display = 'none';
}

function saveName() {
    let name = nameInpt.value;
    nameUser.textContent = 'Вітаємо, ' + name + '!';
    hideModal();
}

window.addEventListener('load', showModal);
saveBtn.addEventListener('click', saveName);


let modalClose = document.querySelector('.modal-close');
modalClose.addEventListener('click', hideModal);


// game Камінь, Ножиці, Папір

let computerScore = 0;
let playerScore = 0;


document.querySelector(".stone").addEventListener("click", function() {
    playRound("stone");
});

document.querySelector(".scissors").addEventListener("click", function() {
    playRound("scissors");
});

document.querySelector(".paper").addEventListener("click", function() {
    playRound("paper");
});

function playRound(playerChoice) {
    const choices = ["stone", "scissors", "paper"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    let roundResult = "";
    console.log(playerChoice, computerChoice);
    if (playerChoice === computerChoice) {
        roundResult = "Нічия!";
        document.querySelector(".result-game").style.color = "#000000";

    } else if (
        (playerChoice === "stone" && computerChoice === "scissors") ||
        (playerChoice === "scissors" && computerChoice === "paper") ||
        (playerChoice === "paper" && computerChoice === "stone")
    ) {
        roundResult = "Ви виграли раунд!";
        playerScore++;
        document.querySelector(".result-game").style.color = "#039900";
    } else {
        roundResult = "Комп'ютер виграв раунд!";
        computerScore++;
         document.querySelector(".result-game").style.color = "#990000";
    }

    document.querySelector(".result-text").textContent = computerChoice
    document.querySelector(".result-game").textContent = roundResult;
    document.querySelector(".computer-score").textContent = computerScore;
    document.querySelector(".player-score").textContent = playerScore;
}

// гра введіть 3 числа


let inpts = document.querySelectorAll(".inpt-three-numbers");
let resultThreeNumbers = document.querySelector(".max-number");

inpts.forEach(function (inpt) {
    inpt.addEventListener("input", function () {
        let inputValues = [];

        inpts.forEach(function (inpt) {
            inputValues.push(parseFloat(inpt.value) || 0);
        });

        const max = Math.max(...inputValues);
        resultThreeNumbers.textContent = `Найбільше число, яке ви ввели - ${max}`;
    });
});

//  footer & footer modal

document.addEventListener('DOMContentLoaded', function() {
    const ftrBtnClose = document.querySelector(".ftr-modal-close");
    const ftrModal = document.querySelector(".ftr-modal");
    const subInpt = document.querySelector(".sub-inpt");
    const subBtn = document.querySelector(".sub-btn");

    subBtn.addEventListener('click', function() {
        const subValue = subInpt.value.trim(); 
        if (isValidEmail(subValue)) {
            ftrModal.style.display = 'block';
            subInpt.value = '';
        }
    });

    function isValidEmail(email) {
        const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
        return emailRegex.test(email);
    }

    function hideFtrModal() {
        ftrModal.style.display = 'none';
    }
    ftrBtnClose.addEventListener("click", hideFtrModal);
});

function hideFtrModal() {
    ftrModal.style.display = 'none';
}

// slider

document.addEventListener("DOMContentLoaded", function () {
    const prevBtn = document.querySelector(".itc-slider_btn_prev");
    const nextBtn = document.querySelector(".itc-slider_btn_next");
    const sliderItems = document.querySelectorAll(".itc-slider_item");
    let currentIndex = 0;

    nextBtn.addEventListener("click", function () {
        if (currentIndex < sliderItems.length - 1) {
            sliderItems[currentIndex].classList.add("hide");
            currentIndex++;
            sliderItems[currentIndex].classList.remove("hide");
        }
    });

    prevBtn.addEventListener("click", function () {
        if (currentIndex > 0) {
            sliderItems[currentIndex].classList.add("hide");
            currentIndex--;
            sliderItems[currentIndex].classList.remove("hide");
        }
    });
});


// header 

const navigationSelect = document.querySelector(".navigation-select");

navigationSelect.addEventListener("change", function () {
    const navigationSelected = navigationSelect.value
    const gamePaperScissorsStone = document.querySelector(".calculate");
    const calculateTime = document.querySelector(".calculate-time");
    const googleDino = document.querySelector('.google-dino')

    if (navigationSelected == 'game'){
        gamePaperScissorsStone.scrollIntoView({behavior:'smooth'});
    }
    else if (navigationSelected == 'numeric'){
        calculateTime.scrollIntoView({behavior:'smooth'});
    } 
    else if (navigationSelected == 'introductory'){
        googleDino.scrollIntoView({behavior:'smooth'});
    }
});



