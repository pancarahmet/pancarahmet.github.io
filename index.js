let yaz = document.getElementById("yaz");
let okunacak = document.getElementById("okunacak");
let basla = document.getElementById("basla");
let bitir = document.getElementById("bitir");
let oku = document.getElementById("oku");

let webSpeech = new webkitSpeechRecognition();
webSpeech.lang = "tr-Tr";
webSpeech.continuous = true;

basla.onclick = () => {
  webSpeech.start();
};
bitir.onclick = () => webSpeech.stop();

webSpeech.onresult = (event) => {
  let liste = event.results;
  yaz.value += liste[liste.length - 1][0].transcript;
  console.log(liste);
};
oku.addEventListener("click", () => {
  let text = okunacak.value;
  let uttr = new SpeechSynthesisUtterance(text);
  uttr.lang = "en";
  speechSynthesis.speak(uttr);
});
