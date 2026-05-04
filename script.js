const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

const buttons = document.querySelectorAll(".button-link");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log(`Membuka: ${button.textContent}`);
  });
});