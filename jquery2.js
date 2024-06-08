// function changeAlignment() {
//   const content = document.querySelectorAll('main');
//   // content.classList.toggle('center-align');
//   content.classList.toggle('left-align');
// }

function DarkMode() {
  document.body.style.background="#001e4d";
  document.querySelector('img').src="darklogo.png";

  document.querySelectorAll('h1').forEach(e=>e.style.color="#fff");
  document.querySelectorAll('h2').forEach(e=>e.style.color="#fff");
  document.querySelectorAll('p').forEach(e=>e.style.color="#fff");

  document.querySelector('nav').style.background="#fff";
  document.querySelectorAll('nav a').forEach(e=>e.style.color="#001e4d");
  
  document.querySelectorAll('input').forEach(e=>e.style.color="#fff");
  document.querySelectorAll('button').forEach(e=>e.style.background="#fff");
  document.querySelectorAll('button').forEach(e=>e.style.color="#001e4d");

  document.querySelectorAll('label').forEach(e=>e.style.color="#fff");

  document.todo.style.background="#001e4d";

}

function LightMode() {
  // Reset background color to its default:
  document.body.style.background = "";

  // Reset logo image:
  document.querySelector('img').src = "lightlogo.png"; // Replace with your default logo

  // Remove any inline styles added for dark mode:
  const elementsToReset = document.querySelectorAll('h1, h2, p, nav, nav a, button, label');
  elementsToReset.forEach(element => element.style.removeProperty('color'));
  elementsToReset.forEach(element => element.style.removeProperty('background'));

  // Optionally trigger a reflow for visual consistency (if needed):
  document.body.offsetHeight;
}
