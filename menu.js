document.addEventListener('DOMContentLoaded', () => {
    // 1. Menu Hamburguer
    const hamburguer = document.getElementById('hamburguer');
    const menu = document.getElementById('menu');
    if (hamburguer) {
        hamburguer.addEventListener('click', () => menu.classList.toggle('ativa'));
    }

    // 2. BUSCAR PROJETOS DO BANCO (Vercel Postgres)
    const carregarProjetos = async () => {
        const container = document.querySelector('.projetos-container');
        try {
            const response = await fetch('/api/script'); // Ajustado para o nome do arquivo api/script.js
            const projetos = await response.json();

            container.innerHTML = projetos.map(p => `
                <div class="projeto-card">
                    <h3>${p.titulo}</h3>
                    <p>${p.descricao}</p>
                    <p><small>Tags: ${p.tecnologias}</small></p>
                    <img src="${p.imagem}" alt="Preview">
                    <a href="${p.link_github}" target="_blank">Ver projeto</a>
                </div>
            `).join('');
        } catch (err) {
            console.error("Erro ao carregar banco de dados:", err);
        }
    };

    carregarProjetos();

    // 3. Formulário de Contato
    const form = document.getElementById("formContato");

    if (form) {
        form.addEventListener("submit", async (e) => {
            e.preventDefault();

            const btn = form.querySelector("button");
            btn.innerText = "Enviando...";
            btn.disabled = true;

            const dados = {
                nome: document.getElementById("nome").value,
                email: document.getElementById("email").value,
                mensagem: document.getElementById("mensagem").value
            };
            console.log("Tentando enviar dados:", dados);

            try {
                const response = await fetch("/api/send-message", { // Ajustado para o nome do arquivo api/send-message.js
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(dados)
                });

                if (response.ok) {
                    const result = await response.json();
                    console.log("Resposta do servidor:", result);
                    alert("Sucesso! Mensagem enviada.");
                    form.reset();
                } else {
                    const errorData = await response.json();
                    alert("Erro no servidor: " + (errorData.error || "Erro desconhecido"));
                }
            } catch (err) {
                console.error(err);
                alert("Erro de conexão com a API.");
            } finally {
                btn.innerText = "Enviar Mensagem";
                btn.disabled = false;
            }
        });
    }
});