const typing_ground = document.querySelector('#text-area');
const btn = document.querySelector('#start-button');
const score = document.querySelector('.score');
const show_sentence = document.querySelector('#show-typinng-text');
const scoreBtn = document.querySelector('#show-score-btn');
let startTime, endTime, totalTimeTaken;

const sentences = [
    "Words are good because that is what we use everyday. Ummm.... fast fingers is sooooooo good. Fidgets spinners are so popular anyways a story",
    "Digby The Littlest Duckling, Digby was the littlest duckling you've ever seen. He hatched from a tiny egg and did not grow",
    "Now that you have a feeling for the keyboard and typing easy words, you will move on to full sentences with capitalization.",
    "Take your time and focus on keeping your eyes off of your keyboard!",
    "If you're visiting this page, you're likely here because you're searching for a random sentence. Sometimes a random word just isn't enough, and that is where the random sentence generator comes into play. By inputting the desired number, you can make a list of as many random sentences as you want or need. Producing random sentences can be helpful in a number of different ways."
];

const calculateTotalTypingTime = (time) => {
    let totalWords = typing_ground.value.trim();
    let without_spaces = totalWords === '' ? 0 : totalWords.split(" ").length;
    if (without_spaces !== 0) {
        let typingSpeed = (without_spaces / time) * 60;
        typingSpeed = Math.round(typingSpeed);
        score.innerHTML = `Your typing speed is ${typingSpeed} words per minute, you wrote ${without_spaces} words, and the time taken was ${time} seconds.`;
    } else {
        score.innerHTML = "Please click on start button and type something";
    }
};

const startTyping = () => {
    let randomNumber = Math.floor(Math.random() * sentences.length);
    console.log(randomNumber);
    show_sentence.innerHTML = sentences[randomNumber];
    let date = new Date();
    startTime = date.getTime();
    btn.innerHTML = "Done";
};

const endTyping = () => {
    btn.innerText = "Start";
    let date = new Date();
    endTime = date.getTime();

    totalTimeTaken = (endTime - startTime) / 1000;
    calculateTotalTypingTime(totalTimeTaken);
    show_sentence.innerHTML = "";
    typing_ground.value = "";
};

btn.addEventListener('click', () => {
    switch (btn.innerText.toLowerCase()) {
        case "start":
            typing_ground.removeAttribute('disabled');
            startTyping();
            break;

        case "done":
            typing_ground.setAttribute('disabled', 'true');
            endTyping();
            break;
    }
});

scoreBtn.addEventListener('click', () => {
    console.log("clicked");
    
})