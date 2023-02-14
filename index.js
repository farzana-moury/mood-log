let logsDiv = document.querySelector('.logs');
let inputField = document.querySelector('.moodField');
let enterBtn = document.querySelector('#enter-btn');
let clearBtn = document.querySelector('#clear-btn');
let emojiBtn = document.querySelector('#emoji-btn');
let emojiIndex = 2;
let clearAllBtn = document.querySelector('#clear-all-btn');

let emojis = ['images/angry.png', 'images/silly.png', 'images/happy.png', 'images/sick.png',
    'images/cute.png', 'images/sad.png', 'images/scared.png', 'images/lovey.png',
    'images/meh.png', 'images/emo.png'];

enterBtn.addEventListener('click', () => {
    if(!inputField.value == ''){
        setLog();
    }
    else {
        alert('Choose an emoji and enter your mood first!');
    }
});

function setLog(){
    let mood = document.createElement('p');
    let emoji = document.createElement('img');
    let xBtn = document.createElement('button');
    let container = document.createElement('div');

    emoji.src = emojiBtn.src;
    mood.textContent = inputField.value;
    emoji.id = 'emoji-btn';
    xBtn.textContent = 'X';
    
    container.append(emoji, mood, xBtn);
    logsDiv.append(container);

    inputField.value = '';

    xBtn.addEventListener('click', () => {
        logsDiv.removeChild(container);
    });
}

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

clearAllBtn.addEventListener('click', () => {
    logsDiv.innerHTML = '';
    localStorage.clear();
});