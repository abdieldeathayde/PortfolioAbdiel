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
    const status = document.getElementById("status"); // opcional no HTML

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            // Captura dos dados
            const nome = document.getElementById("nome").value.trim();
            const email = document.getElementById("email").value.trim();
            const mensagem = document.getElementById("mensagem").value.trim();

            // 🔒 Validação simples
            if (!nome || !email || !mensagem) {
                alert("Preencha todos os campos!");
                return;
            }

            // 🔥 FormData (ESSENCIAL)
            const formData = new FormData();
            formData.append("nome", nome);
            formData.append("email", email);
            formData.append("mensagem", mensagem);

            // Feedback visual
            if (status) status.innerText = "Enviando...";

            // 🚀 Envio para Apps Script
            fetch("https://abdiel-desenvolvedor.vercel.app/", {
                method: "POST",
                mode: "no-cors",
                body: formData
            })
            .then(() => {
                if (status) status.innerText = "Mensagem enviada com sucesso!";
                alert("Mensagem enviada com sucesso!");
                form.reset();
            })
            .catch(() => {
                if (status) status.innerText = "Erro ao enviar.";
                alert("Erro ao enviar. Tente novamente.");
            });
        });
    }

});