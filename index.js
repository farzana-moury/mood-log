let logsDiv = document.querySelector('.logs');
let inputField = document.querySelector('.moodField');
let enterBtn = document.querySelector('#enter-btn');
let clearBtn = document.querySelector('#clear-btn');
let emojiBtn = document.querySelector('#emoji-btn');
let emojiIndex = 2;

let emojis = ['images/angry.png', 'images/silly.png', 'images/happy.png', 'images/sick.png',
    'images/cute.png', 'images/sad.png', 'images/scared.png', 'images/lovey.png',
    'images/meh.png', 'images/emo.png'];

enterBtn.addEventListener('click', () => {
    const mood = document.createElement('p');
    const emoji = document.createElement('img');
    emoji.id = 'emoji-btn';
    emoji.src = emojiBtn.src;
    mood.textContent = inputField.value;
    logsDiv.append(emoji, mood);
});

clearBtn.addEventListener('click', () => {
    inputField.value = '';
});

emojiBtn.addEventListener('click', () => {
    if(emojiIndex < 9){
        emojiIndex++;
        emojiBtn.setAttribute('src', emojis[emojiIndex]);
    }else{
        emojiIndex = 0;
        emojiBtn.setAttribute('src', emojis[emojiIndex]);
    }
});