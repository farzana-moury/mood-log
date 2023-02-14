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
    const xBtn = document.createElement('button');
    const container = document.createElement('form');

    emoji.id = 'emoji-btn';
    emoji.src = emojiBtn.src;
    mood.textContent = inputField.value;
    xBtn.textContent = 'X';
    
    container.append(emoji, mood, xBtn);
    logsDiv.append(container);

    inputField.value = '';

    xBtn.addEventListener('click', () => {
        logsDiv.removeChild(container);
    });
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