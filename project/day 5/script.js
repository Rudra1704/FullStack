function checkNumber() {
    let num = document.getElementById("userInput").value;
    num = parseFloat(num);
    let result;

    if (num > 0) {
        result = "Number is positive";
    } else if (num < 0) {
        result = "Number is negative";
    } else {
        result = "Number is zero";
    }

    document.getElementById("result").innerText = result;
}