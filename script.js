const passwordForm = document.getElementById("passwordForm");
const lengthInput = document.getElementById("length");

const includeUppercase = document.getElementById("includeUppercase");
const includeLowercase = document.getElementById("includeLowercase");
const includeNumbers = document.getElementById("includeNumbers");
const includeSymbols = document.getElementById("includeSymbols");

const generatedPassword = document.getElementById("generatedPassword");
const copyButton = document.getElementById("copyButton");

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+-=[]{}|;:,.<>?";

passwordForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const length = Number(lengthInput.value);

    let characters = "";

    if (includeUppercase.checked) {
        characters += uppercase;
    }

    if (includeLowercase.checked) {
        characters += lowercase;
    }

    if (includeNumbers.checked) {
        characters += numbers;
    }

    if (includeSymbols.checked) {
        characters += symbols;
    } 

    if (characters.length === 0) {
        alert("Please select at least one character type.");
        return;
    }

    let password = "";

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }

    generatedPassword.value = password;
});

copyButton.addEventListener("click", function () {
    if (generatedPassword.value === "") {
        alert("Please generate a password first.");
        return;
    }

    navigator.clipboard.writeText(generatedPassword.value);

    alert("Password copied to clipboard!");
});