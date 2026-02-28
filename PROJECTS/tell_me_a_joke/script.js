let joke = document.getElementById("jokeContainer");

const jokeArray = [
    "I told my computer I needed a break, and now it won't stop sending me vacation ads.",
    "Why don't scientists trust atoms? Because they make up everything!",
    "I'm reading a book on anti-gravity. It's impossible to put down!",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "I don't play tennis. I get no love.",
    "What do you call a fish with no eyes? A fsh.",
    "I used to be a baker, but I couldn't make enough dough.",
    "Parallel lines have so much in common. It’s a shame they’ll never meet.",
    "My boss told me to have a good day. So I went home.",
    "I have a fear of speed bumps. I'm slowly getting over it."
];
    let jokeIndex = Math.floor(Math.random()*jokeArray.length);
    let randomJoke = jokeArray[jokeIndex];

    joke.innerHTML = randomJoke;

