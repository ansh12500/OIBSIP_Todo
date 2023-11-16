const inputTask = document.querySelector('#inputTask');
let soundEffect = document.getElementById('sound');
let relaxingSound = document.getElementById('relax');
let allCompletedTask = document.getElementById('allCompletedTask');
let completedNumber = document.getElementById('completedNumber');
let rainy = document.getElementById('playSound');
let close = document.querySelector('.close');
let open = document.querySelector('.completed');

soundEffect.volume = .05;
relaxingSound.volume = .5;
open.addEventListener('click', () => {
    document.querySelector('.taskC').classList.add('open')
})
close.addEventListener('click', () => {
    document.querySelector('.taskC').classList.add('hide')
    document.querySelector('.taskC').classList.remove('open')
})
rainy.addEventListener('click', () => {
    if (!rainy.classList.contains('play')) {
        rainy.classList.add("play")
        rainy.src = "./pause-solid.svg"
        relaxingSound.src = "./relax.mp3";
        relaxingSound.loop = true
        relaxingSound.play()
        console.log("Playing...");
    }
    else {
        rainy.classList.remove("play")
        rainy.src = "./play-solid.svg"
        relaxingSound.src = "";
        relaxingSound.pause()
        console.log("Paused");
    }
})


funcy();
inputTask.addEventListener('click', () => {
    let addNote = document.getElementById('addNote');
    let localData = localStorage.getItem('taskSame');

    localData == null ? alltask = [] : alltask = JSON.parse(localData);

    if (addNote.value) {
        alltask.push(addNote.value);
        soundEffect.src = "./ting.mp3"
        soundEffect.play()
    }
    localStorage.setItem('taskSame', JSON.stringify(alltask));
    addNote.value = "";
    funcy();
});


