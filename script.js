// Function for scrolling smoothly to membership section
function scrollToMembership() {
    document.getElementById('membership').scrollIntoView({ 
        behavior: 'smooth' 
    });
}

// Function to handle Membership Selection
function selectPlan(planName) {
    alert("Great choice! You have selected the " + planName + " plan. Please visit our front desk to complete your registration.");
}

// Function to Calculate BMI
function calculateBMI() {
    // Get values from input fields
    let weight = parseFloat(document.getElementById('weight').value);
    let heightCm = parseFloat(document.getElementById('height').value);
    let resultDisplay = document.getElementById('bmi-result');

    // Validation to ensure numbers are entered
    if (isNaN(weight) || isNaN(heightCm) || weight <= 0 || heightCm <= 0) {
        resultDisplay.innerHTML = "Please enter valid weight and height!";
        resultDisplay.style.color = "red";
        return;
    }

    // Convert height to meters
    let heightM = heightCm / 100;

    // Calculate BMI
    let bmi = (weight / (heightM * heightM)).toFixed(1);

    // Determine category
    let category = "";
    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = "Normal Weight";
    } else if (bmi >= 25 && bmi < 29.9) {
        category = "Overweight";
    } else {
        category = "Obese";
    }

    // Display Result
    resultDisplay.style.color = "#ff5722";
    resultDisplay.innerHTML = `Your BMI is <strong>${bmi}</strong>.<br>Category: ${category}`;
}