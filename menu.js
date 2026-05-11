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
            const response = await fetch('/api/get-projects');
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
    // Dentro do seu DOMContentLoaded no menu.js
// Localize o formulário no seu menu.js
const form = document.getElementById("formContato");

if (form) {
    form.addEventListener("submit", async (e) => {
        e.preventDefault(); // Impede a página de recarregar

        const btn = form.querySelector("button");
        btn.innerText = "Enviando..."; // Feedback visual
        btn.disabled = true;

        // Captura os dados que você digitou nos campos
        const dados = {
            nome: document.getElementById("nome").value,
            email: document.getElementById("email").value,
            mensagem: document.getElementById("mensagem").value
        };

        try {
            // Tenta enviar para a sua API na Vercel
            const response = await fetch("/api/send-contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(dados)
            });

            if (response.ok) {
                alert("Sucesso! Mensagem salva no banco de dados.");
                form.reset(); // Limpa o formulário após enviar
            } else {
                alert("Erro ao enviar mensagem.");
            }
        } catch (err) {
            console.error(err);
            alert("Erro de conexão com a API.");
        } finally {
            btn.innerText = "Enviar";
            btn.disabled = false;
        }
    });
}
});