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
      resultDiv.innerHTML = "Please enter valid values";
      resultDiv.style.display = "block";
      gradeDiv.style.display = "none";
      return;
    }

    const bmi = (weight / (height * height)).toFixed(2);
    let category = "";
    let link = "";

    if (bmi < 18.5) {
      category = "Underweight";
      link =
        '<a href="https://www.healthline.com/nutrition/how-to-gain-weight" target="_blank">click for Tips to gain weight </a>';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      category = "Healthy weight";
      link = "";
    } else {
      category = "Overweight";
      link =
        '<a href="https://www.cdc.gov/healthy-weight-growth/losing-weight/?CDC_AAref_Val=https://www.cdc.gov/healthyweight/losing_weight/index.html" target="_blank">click for Tips on healthy weight loss</a>';
    }

    resultDiv.innerHTML = `Your BMI is <strong>${bmi}</strong> (${category}) <br> ${link}`;
    resultDiv.style.display = "block";
    gradeDiv.style.display = "flex";
  });
});
