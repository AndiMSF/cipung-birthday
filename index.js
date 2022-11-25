const audio = new Audio("song/hbd.mp3");
const buttons = document.querySelectorAll(".btn1");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    audio.play();
  });
});

