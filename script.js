const toggleIngredientsBtn = document.getElementById("toggle-ingredients");
const toggleStepsBtn = document.getElementById("toggle-steps");
const ingredientsList = document.querySelector(".ingredients");
const stepsList = document.querySelector(".steps");

const startBtn = document.getElementById("start-btn");
const nextBtn = document.getElementById("next-btn");
const progressBar = document.getElementById("progress-bar");
const steps = document.querySelectorAll(".steps li");

let currentStep = 0;

toggleIngredientsBtn.addEventListener("click", () => {
  ingredientsList.classList.toggle("hidden");
  toggleIngredientsBtn.textContent =
    ingredientsList.classList.contains("hidden") ? "Show Ingredients" : "Hide Ingredients";
});

toggleStepsBtn.addEventListener("click", () => {
  stepsList.classList.toggle("hidden");
  toggleStepsBtn.textContent =
    stepsList.classList.contains("hidden") ? "Show Steps" : "Hide Steps";
});

startBtn.addEventListener("click", () => {
  if (steps.length === 0) return;
  stepsList.classList.remove("hidden");
  steps.forEach(step => step.style.background = "none");
  currentStep = 0;
  highlightStep(currentStep);
  progressBar.style.width = "0%";
  nextBtn.classList.remove("hidden");
});

nextBtn.addEventListener("click", () => {
  if (currentStep < steps.length - 1) {
    currentStep++;
    highlightStep(currentStep);
  } else {
    nextBtn.textContent = "Done!";
    nextBtn.disabled = true;
  }
});

function highlightStep(index) {
  steps.forEach((step, i) => {
    step.style.background = i === index ? "#ffe6ee" : "none";
  });
  const progress = ((index + 1) / steps.length) * 100;
  progressBar.style.width = `${progress}%`;
}