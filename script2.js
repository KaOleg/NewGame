let alphaRu = [
    "А",
    "Б",
    "В",
    "Г",
    "Д",
    "Е",
    "Ё",
    "Ж",
    "З",
    "И",
    "Й",
    "К",
    "Л",
    "М",
    "Н",
    "О",
    "П",
    "Р",
    "С",
    "Т",
    "У",
    "Ф",
    "Х",
    "Ц",
    "Ч",
    "Ш",
    "Щ",
    "Ъ",
    "Ы",
    "Ь",
    "Э",
    "Ю",
    "Я",
];
let alphaEg = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
];
let input = document.querySelector(".words")
let words = [
    "веник",
    "букашка",
    "лента",
    "вертолет",
    "борода",
    "шприц",
    "пальма",
    "табло",
    "зимовка",
    "посох",
    "ацетон",
    "купюра",
    "кирпич",
    "белка",
    "башмак",
    "кнопка",
    "лак",
    "конверт",
    "веер",
    "сюрприз",
    "ключ",
    "пелёнка",
    "пингвин",
    "корона",
    "желе",
    "самолёт",
    "цыплёнок",
    "чернила",
    "хвост",
    "приемник",
    "секунда",
    "поролон",
    "коньки",
    "свеча",
    "фольга",
    "керосин",
    "рюмка",
    "джинн",
    "ириска",
    "волна",
    "локатор",
    "пюре",
    "этикетка",
    "пиявка",
    "ручей",
    "стрелка",
    "кувшин",
    "тыква",
    "волан",
    "крепость",
    "валенки",
    "вихрь",
    "ласты",
    "банк",
    "драчун",
    "антрекот",
    "наушники",
    "самокат",
    "водопад",
    "ярмарка",
    "сушка",
    "Китай",
    "звонок",
    "студия",
    "прививка",
    "пила",
    "заря",
    "пружина",
    "карась",
    "степь",
    "танго",
    "яйцо",
    "вагон",
    "майка",
    "снегопад",
    "район",
    "конура",
    "лилия",
    "ступенька",
    "пробка",
    "десерт",
    "ралли",
    "карантин",
    "вулкан",
    "утюг",
    "муравей",
    "сальто",
    "дупло",
    "мотор",
    "писк",
    "сметана",
    "розетка",
    "линейка",
    "подвал",
    "лесник",
    "парус",
];
let secretWord = words[Math.floor(Math.random() * words.length)].toUpperCase();
for(let letter of secretWord) {
    input.value = input.value + "*"
}
let userLetters = []
let allButtons = document.querySelector(".allbuttons")
let attempsF = document.querySelector(".attempsNum")
let attemps = 10
let hint = document.querySelector(".hint")
let startNewGame = document.querySelector(".startNew")
for (let i = 0; i < alphaRu.length; i++) {
    let button = document.createElement("button");
    button.innerHTML = alphaRu[i];
    allButtons.appendChild(button);
}
let buttons = allButtons.querySelectorAll("button")
allButtons.addEventListener("click", function (event) {
    input.value = ""
    let t = event.target
    if(t.tagName != "BUTTON") {
        return
    }
    console.log(t)
    let letter = t.innerHTML
    console.log(letter)
    userLetters.push(letter)
    console.log(userLetters)
    for(let l of secretWord) {
        if(userLetters.indexOf(l) == -1){
            input.value = input.value + "*"

        }else{
          input.value = input.value + l
           
        }

    }
    
    if(secretWord.indexOf(letter) != -1) {
        hint.textContent = "Ты угадал, продолжай в том же духе"
        t.classList.add("right")
    }else{
        hint.textContent = "Ты не угадал, продолжай я в тебя верю"
        attemps = attemps - 1
        attempsF.textContent = attemps
        t.classList.add("wrong")
    }
    if(attemps == 0) {
        hint.textContent = "К сожелению ты проиграл, нажимай на кнопку новая игра и попробуй снова"
        buttons.forEach(function (btn) {
            btn.disabled = true
        })
        input.value = secretWord
    }
    if(secretWord == input.value) {
        hint.textContent = "Ты выиграл, нажимай на кнопку новая игра"
        buttons.forEach(function (btn) {
            btn.disabled = true
        })
    }
})
startNewGame.onclick = function () {
    attemps = 10
    attempsF.textContent = attemps
    hint.textContent = "Попробуй еще раз"
    buttons.forEach(function(btn) {
        btn.disabled = false
        btn.classList.remove("right" , "wrong")
    })
    input.value = ""
    secretWord = words[Math.floor(Math.random() * words.length)].toUpperCase();
    for(let letter of secretWord) {
        input.value = input.value + "*"
    }
    userLetters = []
}

