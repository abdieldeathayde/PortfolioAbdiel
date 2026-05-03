document.addEventListener('DOMContentLoaded', () => {
    const hamburguer = document.getElementById('hamburguer');
    const menu = document.getElementById('menu');

    hamburguer.addEventListener('click', () => {
        menu.classList.toggle('ativa');
    });

    // 🔥 NOVO: envio do formulário
    const form = document.getElementById("formContato");
    const status = document.getElementById("status");

    form.addEventListener("submit", function(e) {
        e.preventDefault();

        const dados = {
            nome: document.getElementById("nome").value,
            email: document.getElementById("email").value,
            mensagem: document.getElementById("mensagem").value
        };

        fetch("https://abdiel-desenvolvedor.vercel.app/", {
            method: "POST",
            body: JSON.stringify(dados)
        })
        .then(res => res.json())
        .then(() => {
            status.textContent = "Mensagem enviada com sucesso!";
            form.reset();
        })
        .catch(() => {
            status.textContent = "Erro ao enviar. Tente novamente.";
        });
    });
});