/*
const character = document.getElementById("character");
const block = document.getElementById("block");

function jump() {
  if (character.classList !== "animate") {
    character.classList.add("animate");
    setTimeout(() => {
      character.classList.remove("animate");
    }, 500);
  }
}

document.addEventListener("keydown", (event) => {
  if (event.code === "Space") {
    jump();
  }
});

setInterval(() => {
  const characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
  const blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));

  if (blockLeft < 0) {
    block.style.left = "60vw";
  } else {
    block.style.left = `${blockLeft - 10}px`;
  }

  if (characterTop >= 130) {
    alert("Game over!");
    character.style.bottom = "0";
    block.style.left = "60vw";
  }
}, 10);
/*