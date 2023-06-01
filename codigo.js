alert ("Está pagina é perca de tempo")

function playAudioAndChangeBackground(button) {
  playAudio();
  changeBackground();
  hideButton(button);
}

function playAudio() {
  var audio = document.getElementById("myAudio");
  audio.play();
}

function changeBackground() {
  document.body.classList.add("change");
}

function hideButton(button) {
  button.style.display = "none";
}
