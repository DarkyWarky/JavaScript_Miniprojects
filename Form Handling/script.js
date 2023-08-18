document.addEventListener("DOMContentLoaded", () => {
    const inputs = document.getElementsByClassName("input");
    for (const input of inputs) {
        input.addEventListener("input", () => {
            const label = input.nextElementSibling;
            if (input.value.length > 0) {
                label.classList.add("typing");
            } else {
                label.classList.remove("typing");
            }
        });
    }
});
