function calculate(bill, percent) {
    const value = (bill * percent) / 100;
    return value;
}

const btn = document.getElementById("button");

btn.addEventListener("click", function() {
    const bill = parseFloat(document.getElementById("billAmt").value);
    const percent = parseFloat(document.getElementById("perAmt").value);

    const finalValue = calculate(bill, percent);
    document.getElementById("result").innerHTML = "Total: " + finalValue.toFixed(2);
});