document.addEventListener("DOMContentLoaded", function () {
  const weightInput = document.getElementById("weight");
  const heightInput = document.getElementById("height");
  const calculateBtn = document.querySelector("button");
  const resultDiv = document.querySelector(".result");
  const gradeDiv = document.querySelector(".grade");

  calculateBtn.addEventListener("click", function () {
    const weight = parseFloat(weightInput.value);
    const height = parseFloat(heightInput.value) / 100; // Convert cm to meters

    if (isNaN(weight) || isNaN(height) || height <= 0 || weight <= 0) {
      resultDiv.textContent = "Please enter valid values";
      resultDiv.style.display = "block";
      gradeDiv.style.display = "none";
      return;
    }

    const bmi = (weight / (height * height)).toFixed(2);
    let category = "";

    if (bmi < 18.5) {
      category = "Underweight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      category = "Healthy weight";
    } else {
      category = "Overweight";
    }

    resultDiv.innerHTML = `Your BMI is <strong>${bmi}</strong> (${category})`;
    resultDiv.style.display = "block";
    gradeDiv.style.display = "flex";
  });
});
