document.querySelector("#btn2").addEventListener("click", function b() {
    getMessage();
});

document.querySelector("#message-input").addEventListener("keydown", function a(event) {
    if (event.key === "Enter")
    
        getMessage();
});

getMessage = () => {
    document.querySelector("#message-output").textContent = document.querySelector("#message-input").value;

    document.querySelector("#message-input").value = "";
};
