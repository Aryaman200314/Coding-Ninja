const typing_ground = document.querySelector('#text-area');
const btn = document.querySelector('#start-button');
const score = document.querySelector('.score');
const show_sentence = document.querySelector('#show-typinng-text');
const scoreBtn = document.querySelector('#show-score-btn');
let startTime, endTime, totalTimeTaken;

const sentences = [
    "The quick brown fox jumps over the lazy dog, while the sun sets in the west and the stars begin to twinkle in the night sky.",
    "A journey of a thousand miles begins with a single step, but it's important to keep moving forward, even when the path seems difficult and unclear.",
    "In the heart of the forest, the sound of leaves rustling and birds chirping creates a serene atmosphere, perfect for reflection and meditation on life's mysteries.",
    "Technology has rapidly advanced over the past few decades, transforming the way we communicate, work, and live, making our lives more connected than ever before.",
    "Learning to code is like learning a new language; it requires practice, patience, and persistence, but the rewards are worth the effort in the end.",
    "The ocean waves crash against the shore, bringing with them a sense of peace and tranquility, reminding us of the vastness and beauty of nature.",
    "She picked up the old book, its pages yellowed with age, and began to read, losing herself in the story of a distant time and place.",
    "A strong foundation in basic principles is essential for success in any field, whether it be science, art, business, or any other area of expertise.",
    "As the rain poured down, the streets glistened with reflections of city lights, creating a magical and almost surreal atmosphere in the bustling urban landscape.",
    "Creativity is the spark that ignites innovation, leading to new ideas and solutions that can change the world for the better, one step at a time.",
    "Words are good because that is what we use everyday. Ummm.... fast fingers is sooooooo good. Fidgets spinners are so popular anyways a story",
    "Digby The Littlest Duckling, Digby was the littlest duckling you've ever seen. He hatched from a tiny egg and did not grow",
    "Now that you have a feeling for the keyboard and typing easy words, you will move on to full sentences with capitalization.",
    "Take your time and focus on keeping your eyes off of your keyboard!"
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