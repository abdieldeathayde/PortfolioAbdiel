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
const form = document.getElementById("formContato");

if (form) {
    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        
        // Mudar o texto do botão para dar feedback visual
        const btn = form.querySelector("button");
        const originalBtnText = btn.innerText;
        btn.innerText = "Enviando...";
        btn.disabled = true;

        const dados = {
            nome: document.getElementById("nome").value,
            email: document.getElementById("email").value,
            mensagem: document.getElementById("mensagem").value
        };

        try {
            const response = await fetch("/api/send-message", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(dados)
            });

            if (response.ok) {
                alert("Mensagem enviada com sucesso, Abdiel!");
                form.reset(); // Limpa os campos
            } else {
                throw new Error("Erro no servidor");
            }
        } catch (err) {
            alert("Ops! Houve um erro ao enviar. Tente novamente mais tarde.");
        } finally {
            btn.innerText = originalBtnText;
            btn.disabled = false;
        }
    });
}
});