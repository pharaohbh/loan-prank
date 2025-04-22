const button = document.getElementById("submitBtn");
const form = document.getElementById("loanForm");

form.addEventListener("mousemove", (e) => {
  const btnRect = button.getBoundingClientRect();
  const offset = 80; // how close before it bolts
  const distanceX = e.clientX - (btnRect.left + btnRect.width / 2);
  const distanceY = e.clientY - (btnRect.top + btnRect.height / 2);
  const distance = Math.hypot(distanceX, distanceY);

  if (distance < offset) {
    // calculate new random position within form wrapper
    const wrapper = document.querySelector(".form-wrapper").getBoundingClientRect();
    const maxX = wrapper.width - btnRect.width - 16;
    const maxY = wrapper.height - btnRect.height - 16;
    const newLeft = Math.random() * maxX + 8;  
    const newTop = Math.random() * maxY + 8;
    button.style.left = `${newLeft}px`;
    button.style.top = `${newTop}px`;
  }
});

button.addEventListener("click", (e) => {
  e.preventDefault();          // prevent actual submit
  button.innerText = "You Cheated! 😁";
  button.style.background = "#42b72a";
});
