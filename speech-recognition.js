//Speech Recognition
var recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();
recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.start();

recognition.onresult = (event) => {
    console.log('You said: ', event.results[0][0].transcript);
};

