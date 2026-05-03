document.addEventListener('DOMContentLoaded', () => {

    // =========================
    // MENU HAMBURGUER
    // =========================
    const hamburguer = document.getElementById('hamburguer');
    const menu = document.getElementById('menu');

    if (hamburguer && menu) {
        hamburguer.addEventListener('click', () => {
            menu.classList.toggle('ativa');
        });
    }

    // =========================
    // FORMULÁRIO DE CONTATO
    // =========================
    const form = document.getElementById("formContato");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            // Captura dos dados do formulário
            const nome = document.getElementById("nome").value;
            const email = document.getElementById("email").value;
            const mensagem = document.getElementById("mensagem").value;

            // 🔥 Usando FormData (ESSENCIAL para funcionar com Apps Script)
            const formData = new FormData();
            formData.append("nome", nome);
            formData.append("email", email);
            formData.append("mensagem", mensagem);

            // 🔥 Envio para o Google Apps Script
            const status = document.getElementById("status");
            status.innerText = "Enviando...";

            fetch("SUA_URL", {
            method: "POST",
            mode: "no-cors",
            body: formData
            })
            .then(() => {
            status.innerText = "Enviado com sucesso!";
            })
            .catch(() => {
            status.innerText = "Erro ao enviar.";
            });
        });
    }

});