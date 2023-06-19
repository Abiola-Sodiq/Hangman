const wordList = [
  {
    word: "javascript",
    hint: "programming language",
  },
  {
    word: "twitter",
    hint: "social media platform",
  },
  {
    word: "earth",
    hint: "planet of our solar system",
  },
  {
    word: "gold",
    hint: "a yellow precious metal",
  },
  {
    word: "jumia",
    hint: "online shopping site",
  },
  {
    word: "coding",
    hint: "related to programming",
  },
  {
    word: "bugs",
    hint: "related to programming",
  },
  {
    word: "jola",
    hint: "member of the group",
  },
  {
    word: "ayodeji",
    hint: "member of the group",
  },
  {
    word: "bolanle",
    hint: "member of the group",
  },
  {
    word: "shakur",
    hint: "member of the group",
  },
  {
    word: "abiola",
    hint: "member of the group",
  },
  {
    word: "ibrahim",
    hint: "member of the group",
  },
  {
    word: "chess",
    hint: " indoor game",
  },
  {
    word: "github",
    hint: "code hosting platform",
  },
  {
    word: "png",
    hint: "a image file format",
  },
  {
    word: "iphone",
    hint: "an electronic device",
  },
  {
    word: "java",
    hint: "programming language",
  },
  {
    word: "google",
    hint: "famous search engine",
  },
  {
    word: "phillip",
    hint: "sail facilitator",
  },
  {
    word: "sail",
    hint: "a tech facility in ikorodu",
  },
  {
    word: "flute",
    hint: "a musical instrument",
  },
  {
    word: "bitcoin",
    hint: "related to cryptocurrency",
  },
  {
    word: "matthew",
    hint: "sail facilitator",
  },
  {
    word: "john",
    hint: "sail facilitator",
  },
  {
    word: "email",
    hint: "related to exchanging message",
  },
  {
    word: "html",
    hint: "markup language for the web",
  },
  {
    word: "air",
    hint: "related to a gas",
  },
  {
    word: "idea",
    hint: "a thought or suggestion",
  },
  {
    word: "server",
    hint: "related to computer or system",
  },
  {
    word: "jpeg",
    hint: "a image file format",
  },
  {
    word: "search",
    hint: "act to find something",
  },
  {
    word: "nigeria",
    hint: "a country name",
  },
  {
    word: "naija",
    hint: "developed country name",
  },
  {
    word: "photo",
    hint: "representation of person or scene",
  },
  {
    word: "tinubu",
    hint: "balablue",
  },
];
const inputs = document.querySelector(".inputs")
  const hintTag = document.querySelector(".hint span")
  const guessLeft = document.querySelector(".guess-left span")
 const wrongLetter = document.querySelector(".wrong-letter span")
 const resetBtn = document.querySelector(".reset-btn")
  const typingInput = document.querySelector(".typing-input");

let word 
let maxGuesses 
let incorrectLetters = []
let correctLetters = [];

function randomWord() {
  let randomCharacter = wordList[Math.floor(Math.random() * wordList.length)];
  word = randomCharacter.word;
  let maxGuesses;
  if (word.length <1 ) {
    maxGuesses = 5
  }
  correctLetters = [];
  incorrectLetters = [];
  hintTag.innerText = randomCharacter.hint;
  guessLeft.innerText = maxGuesses;
  wrongLetter.innerText = incorrectLetters;

  let html = "";
  for (let i = 0; i < word.length; i++) {
    html += `<input type="text" disabled>`;
    inputs.innerHTML = html;
  }
}
randomWord();

function initGame(e) {
  let key = e.target.value.toLowerCase();
  
  if (
    key.match(/^[A-Za-z]+$/) &&
    !incorrectLetters.includes(` ${key}`) &&
    !correctLetters.includes(key)
  ) {
    if (word.includes(key)) {
      for (let i = 0; i < word.length; i++) {
        if (word[i] == key) {
          correctLetters += key;
          inputs.querySelectorAll("input")[i].value = key;
        }
      }
    } else {
      maxGuesses--;
      incorrectLetters.push(` ${key}`);
    }
    guessLeft.innerText = maxGuesses;
    wrongLetter.innerText = incorrectLetters;
  }
  typingInput.value = "";

  setTimeout(() => {
    if (correctLetters.length === word.length) {
      alert(`Congrats!You won't be hanged ${word.toUpperCase()}`);
      return randomWord();
    } else if (maxGuesses < 1) {
      alert("Game over! You don lose!");
      for (let i = 0; i < word.length; i++) {
        inputs.querySelectorAll("input")[i].value = word[i];
      }
    }
  }, 100);
}

resetBtn.addEventListener("click", randomWord);
typingInput.addEventListener("input", initGame);
inputs.addEventListener("click", () => typingInput.focus());
document.addEventListener("keydown", () => typingInput.focus());
