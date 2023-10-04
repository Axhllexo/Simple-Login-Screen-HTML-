gsap.fromTo(
  ".insideContainer",
  { x: -350 },
  { duration: 3, x: 815, ease: "power2.inOut" }
);

function hoverPassOver() {
  if (document.getElementById("passwordField") === document.activeElement) {
    gsap.to(".passField", { duration: 0.2, width: 225, height: 30 });
  } else {
    gsap.to(".passField", { duration: 0.2, width: 200, height: 25 });
  }
}

function hoverPassOut() {
  if (document.getElementById("passwordField") === document.activeElement) {
    return;
  } else {
    gsap.to(".passField", { duration: 0.2, width: 175, height: 20 });
  }
}

function hoverUserOver() {
  if (document.getElementById("loginField") === document.activeElement) {
    gsap.to(".loginField", { duration: 0.2, width: 225, height: 30 });
  } else {
    gsap.to(".loginField", { duration: 0.2, width: 200, height: 25 });
  }
}

function hoverUserOut() {
  if (document.getElementById("loginField") === document.activeElement) {
    return;
  } else {
    gsap.to(".loginField", { duration: 0.2, width: 175, height: 20 });
  }
}

document
  .getElementById("passwordField")
  .addEventListener("mouseover", hoverPassOver);
document
  .getElementById("passwordField")
  .addEventListener("mouseout", hoverPassOut);
document
  .getElementById("passwordField")
  .addEventListener("focus", hoverPassOver);
document
  .getElementById("passwordField")
  .addEventListener("focusout", hoverPassOut);
document
  .getElementById("loginField")
  .addEventListener("mouseover", hoverUserOver);
document
  .getElementById("loginField")
  .addEventListener("mouseout", hoverUserOut);
document.getElementById("loginField").addEventListener("focus", hoverUserOver);
document
  .getElementById("loginField")
  .addEventListener("focusout", hoverUserOut);
