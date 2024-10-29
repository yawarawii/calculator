let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);

// Function to update the input value
function updateInput(value) {
    string += value;
    input.value = string;
}

// Function to delete the last character
function deleteLastCharacter() {
    string = string.slice(0, -1); // Remove the last character
    input.value = string; // Update the input display
}

// Button click event listeners
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML === '=') {
            try {
                string = eval(string).toString(); // Calculate the result
                input.value = string;
            } catch {
                input.value = "Error"; // Handle errors
                string = ""; // Reset string
            }
        } else if (e.target.innerHTML === 'AC') {
            string = ""; // Clear the string
            input.value = string;
        } else if (e.target.innerHTML === 'DEL') {
            deleteLastCharacter(); // Delete the last character
        } else {
            updateInput(e.target.innerHTML); // Append button value
        }
    });
});

// Keyboard event listener
document.addEventListener('keydown', (e) => {
    const key = e.key;

    // Allowing only valid keys
    if ("0123456789/*-+%".includes(key)) {
        updateInput(key);
    } else if (key === "Enter") {
        try {
            string = eval(string).toString(); // Calculate the result
            input.value = string;
        } catch {
            input.value = "Error"; // Handle errors
            string = ""; // Reset string
        }
    } else if (key === "Escape") {
        string = ""; // Clear the string
        input.value = string;
    } else if (key === "Backspace") {
        deleteLastCharacter(); // Delete the last character on Backspace
    }
});
function adjustFontSize() {
    const length = currentInput.length;
    if (length > 10) {
        inputBox.style.fontSize = '30px'; // Decrease font size if input is long
    } else {
        inputBox.style.fontSize = '40px'; // Default font size
    }
}

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const value = e.target.innerText;

        // ... existing logic

        inputBox.value = currentInput;
        adjustFontSize(); // Adjust font size after each input
    });
});
