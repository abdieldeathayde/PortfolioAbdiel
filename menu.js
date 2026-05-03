document.addEventListener('DOMContentLoaded', () => {
    const hamburguer = document.getElementById('hamburguer');
    const menu = document.getElementById('menu');

    hamburguer.addEventListener('click', () => {
        menu.classList.toggle('ativa');
    });

    // 👇 FORMULÁRIO
    const form = document.getElementById("formContato");

    if (form) {
        form.addEventListener("submit", function(e) {
            e.preventDefault();

            const dados = {
                nome: document.getElementById("nome").value,
                email: document.getElementById("email").value,
                mensagem: document.getElementById("mensagem").value
            };

            fetch("https://abdiel-desenvolvedor.vercel.app/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                mode: "no-cors",
                body: JSON.stringify(dados)
            })
            .then(() => {
                alert("Mensagem enviada com sucesso!");
                form.reset();
            })
            .catch(() => {
                alert("Erro ao enviar.");
            });
        });
    }
});