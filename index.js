var selectSound = (key) => {
  keyAudio = new Audio();
  keyAudio.volume = 0.3; //ปรับเสียง 30%
  switch (key) {
    case "w":
      keyAudio.src = "sounds/sounds_tom-1.mp3";
    case "a":
      keyAudio.src = "sounds/sounds_tom-2.mp3";
      break;
    case "s":
      keyAudio.src = "sounds/sounds_tom-3.mp3";
      break;
    case "d":
      keyAudio.src = "sounds/sounds_tom-4.mp3";
      break;
    case "j":
      keyAudio.src = "sounds/sounds_crash.mp3";
      break;
    case "k":
      keyAudio.src = "sounds/sounds_kick-bass.mp3";
      break;
    case "l":
      keyAudio.src = "sounds/sounds_snare.mp3";
      break;
  }
  keyAudio.play();
  console.log(`ปุ่ม ${key} เสียง ${keyAudio.src.slice(29)}`);
};

var eventClick = () => {
  $("button").click((value) => {
    let { innerHTML } = value.target;
    selectSound(innerHTML);
  });
};

var eventkeyboard = () => {
  $(document).keydown((valueDown) => {
    let { key } = valueDown;

    selectSound(key);
    document.querySelector(`.${key}`).classList.add("hitted");
  });

  $(document).keyup((valueUp) => {
    let { key } = valueUp;
    document.querySelector(`.${key}`).classList.remove("hitted");
  });
};

eventClick();
eventkeyboard();
