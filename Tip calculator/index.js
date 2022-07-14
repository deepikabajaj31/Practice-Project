document.querySelector('#btn2').addEventListener("click", () => {
    calculate();
});
function calculate() {
    let amount = document.querySelector('#amount');
    let guest = document.querySelector('#persons');
    let quality = document.querySelector('#quality');
    let tip = document.querySelector('#tip');
    const count = ((amount.value * quality.value) / guest.value).toFixed(2);
    amount.value = "";
    guest.value = "";
    quality.value = "";
    tip.className = "show";
    if (count === "NaN")
    {
        tip.textContent = "tip $0 each";
    }
    else {
        tip.textContent = "Tip $" + count + " each";
    }
    setTimeout(function () {
        tip.textContent = "";
        tip.className = tip.className.replace("show", "");
    }, 3000);
}