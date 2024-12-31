// Function to calculate BMI
function calculateBMI(weight, height) {
    // Convert height from cm to meters
    height = height / 100;
    return weight / (height * height);
    }
    
    // // Function to determine BMI category
    function getBMICategory(bmi) {
        if (bmi < 18.5) {
            return "Underweight";
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            return "Normal weight";
        } else if (bmi >= 25 && bmi <= 29.9) {
            return "Overweight";
        } else {
            return "Obese";
        }
    }
    
    // Handle form submission
    document.getElementById('bmi-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting and refreshing the page
    
    // Get input values (weight and height)
        const weight = parseFloat(document.getElementById('weight').value);
        const height = parseFloat(document.getElementById('height').value);
    
    // Validate inputs
        if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
            alert("Please enter valid weight and height.");
            return;
        }
    
    // Calculate BMI
        const bmi = calculateBMI(weight, height);
    
    // Get BMI category
        const category = getBMICategory(bmi);
    
    // Display result
        document.getElementById('bmi-value').textContent = bmi.toFixed(2); // Display BMI value with 2 decimal points
        document.getElementById('bmi-category').textContent = `Category: ${category}`; // Display BMI category
        document.getElementById('result').style.display = 'block'; // Show result section
    });    