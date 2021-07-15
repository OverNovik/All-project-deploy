
const piano = document.querySelector('.piano');
const pianoKeys = document.querySelectorAll('.piano-key');
const notesBtn = document.querySelector('.btn-notes');
const lettersBtn = document.querySelector('.btn-letters');
const fullscreenBtn = document.querySelector('.fullscreen');


const mapKeyboardKeys = {
    "68": "c",
    "70": "d",
    "71": "e",
    "72": "f",
    "74": "g",
    "75": "a",
    "76": "b",
    "82": "c♯",
    "84": "d♯",
    "85": "f♯",
    "73": "g♯",
    "79": "a♯"
};

piano.addEventListener('mousedown', (e) => {
    let currentNote = '';
    const playPiano = (e) => {
        if(currentNote != e.target.dataset.note) {
            e.target.classList.add('piano-key-active');
            e.target.classList.add('piano-key-active-pseudo');
            currentNote = e.target.dataset.note;
            const src = createAudioSrcByNote(currentNote);
            playAudio(src)
        };
    };
    playPiano(e);
    piano.addEventListener('mouseout', () => {
        e.target.classList.remove('piano-key-active')
    })
    piano.addEventListener('mousemove', playPiano);
    piano.addEventListener('mouseup', () => {
        e.target.classList.remove('piano-key-active');
        e.target.classList.add('piano-key-active-pseudo');
        piano.removeEventListener('mousemove', playPiano)
      });
    });

window.addEventListener('keydown', (e) => {
   let currentKeyboard = '';
   const playPianoKeyboard = (e) => {
        if(currentKeyboard != mapKeyboardKeys[e.keyCode]) {
            e.target.classList.add('piano-key-active');
            currentKeyboard = mapKeyboardKeys[e.keyCode];
            const src = createAudioSrcByNote(currentKeyboard);
            playAudio(src);
       }
   }
   playPianoKeyboard(e);
   window.addEventListener('keyup', () => {
        e.target.classList.remove('piano-key-active');
   })
});

fullscreenBtn.addEventListener('click', () => {
    if(document.documentElement.requestFullscreen) document.documentElement.requestFullscreen();
    if(document.fullscreenEnabled) document.exitFullscreen();
});

lettersBtn.addEventListener('click', () => {
    lettersBtn.classList.toggle('btn-active');
    notesBtn.classList.toggle('btn-active');
    pianoKeys.forEach(key => {
        key.classList.toggle('piano-key-letter');
    });
});

notesBtn.addEventListener('click', (e) => {
    notesBtn.classList.toggle('btn-active');
    lettersBtn.classList.toggle('btn-active');
    pianoKeys.forEach(key => {
        key.classList.toggle('piano-key-letter');
    });
});

function playAudio(src) {
    const audio = new Audio(src);

    audio.play();
};

function createAudioSrcByNote(note) {
        return `assets/audio/${note}.mp3`;       
};

