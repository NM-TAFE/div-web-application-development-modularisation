function handleClickMeButton() {
  const button = document.getElementById("button1");
  button.addEventListener("click", function () {
    alert("Button Clicked!");
  });
}

function handleHoverButton() {
  const button = document.getElementById("button2");
  button.addEventListener("mouseover", function () {
    alert("Button Hovered Over!");
  });
}

function handleDoubleClickButton() {
  const button = document.getElementById("button3");
  button.addEventListener("dblclick", function () {
    alert("Button Double Clicked!");
  });
}

export { handleClickMeButton, handleHoverButton, handleDoubleClickButton };
