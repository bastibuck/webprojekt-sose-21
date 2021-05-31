let isLarge = false;

function changeSize() {
  // wenn btn groß, dann verkleinern
  if (isLarge) {
    document.getElementById("my-cool-btn").style.padding = "20px 40px";
    document.getElementById("my-cool-btn").style.fontSize = "50px";
    isLarge = false;
  } else {
    // sonst vergrößern
    const padding = "30px 50px";
    document.getElementById("my-cool-btn").style.padding = padding;
    document.getElementById("my-cool-btn").style.fontSize = "70px";
    isLarge = true;
  }

  // document.getElementById("my-cool-btn").classList.toggle("larger");
}
