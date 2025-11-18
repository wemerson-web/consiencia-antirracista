// Alternar tema light/dark
function toggleTheme() {
    const atual = document.documentElement.getAttribute("data-theme");
    document.documentElement.setAttribute("data-theme", atual === "dark" ? "light" : "dark");
}

// Adicionar depoimentos
function addDepoimento() {
    const texto = document.getElementById("textoDepoimento").value.trim();
    if (texto === "") return alert("Escreva algo!");

    const box = document.createElement("div");
    box.className = "depoimento fade-in";
    box.textContent = `"${texto}"`;

    document.getElementById("lista-depoimentos").appendChild(box);
    document.getElementById("textoDepoimento").value = "";
}

// Animações ao aparecer
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".fade-in").forEach((el, i) => {
        el.style.animationDelay = (i * 0.2) + "s";
    });
});
