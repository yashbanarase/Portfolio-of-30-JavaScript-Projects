let speech = new SpeechSynthesisUtterance();
let voices = [];

let button = document.getElementById("button");
let textArea = document.getElementById("text");
let voiceSelect = document.querySelector("select");

button.addEventListener("click", () => {
  speech.text = textArea.value;
  window.speechSynthesis.speak(speech);
});

window.speechSynthesis.onvoiceschanged = () => {
  voices = window.speechSynthesis.getVoices();
  speech.voice = voices[0];

  voices.forEach(
    (voice, i) => (voiceSelect.options[i] = new Option(voice.name, i))
  );
};

voiceSelect.addEventListener("change", () => {
  speech.voice = voices[voiceSelect.value];
});
