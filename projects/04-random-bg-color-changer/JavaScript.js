let colorInterval; // To store the interval ID

// Function to generate a random color
const randomColor = function () {
    const hex = "0123456789ABCDEF";
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
};

// Start changing the code of color
const updateHexCodeDisplay = function (color) {
    const hexElement = document.querySelector("#hexCode");
    hexElement.textContent = color;
}

// Add event listeners
document.querySelector("#startButton").addEventListener('click', startChangingColor);
document.querySelector("#stopButton").addEventListener('click', stopChangingColor);
document.querySelector("#generateButton").addEventListener('click', generateChangingColor);

// Start changing color
const startChangingColor = function () {
    if (!colorInterval) {
        colorInterval = setInterval(() => {
            const color = randomColor();
            document.body.style.backgroundColor = color;
            updateHexCodeDisplay(color);
        }, 1000);
    }
};

// Stop changing color
const stopChangingColor = function () {
    clearInterval(colorInterval);
    colorInterval = null;
};


// Generate random color once
const generateChangingColor = function () {
    const color = randomColor();
    document.body.style.backgroundColor = color;
    updateHexCodeDisplay(color);
};