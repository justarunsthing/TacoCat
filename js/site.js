// Get user's input
function getValue() {
    document.getElementById("alert").classList.add("invisible");

    let userString = document.getElementById("user-string").value;
    let returnObj = palindromeCheck(userString);

    displayMessage(returnObj);
}

function palindromeCheck(userString) {
    let regex = /[^a-z0-9]/gi;

    // To lower case, remove spaces & special characters
    userString = userString.toLowerCase();
    userString = userString.replace(regex, "");

    let reversedString = [];
    let returnObj = [];

    for (let i = userString.length - 1; i >= 0; i--) {
        reversedString += userString[i];
    }

    if (reversedString == userString) {
        returnObj.msg = "Well done, you entered a palindrome!";
    } else {
        returnObj.msg = `Oops, ${userString} is not a palindrome!`;
    }

    returnObj.reversed = reversedString;

    return returnObj;
}

// Display message to the user
function displayMessage(returnObj) {
    document.getElementById("alert-header").innerHTML = returnObj.msg;
    document.getElementById("message").innerHTML = `Your phrase reversed is ${returnObj.reversed}`;
    document.getElementById("alert").classList.remove("invisible");
}

// Set date
const currentYear = new Date().getFullYear();
document.getElementById("year").textContent = `©${currentYear}`;