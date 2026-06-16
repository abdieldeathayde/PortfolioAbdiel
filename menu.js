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
            if (!response.ok) throw new Error(`Erro HTTP: ${response.status}`);
            
            const projetos = await response.json();

            if (!Array.isArray(projetos) || projetos.length === 0) {
                container.innerHTML = '<p>Nenhum projeto encontrado no momento.</p>';
                return;
            }

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

                const isJson = response.headers.get('content-type')?.includes('application/json');
                const result = isJson ? await response.json() : null;

                if (response.ok) {
                    console.log("Resposta do servidor:", result);
                    alert("Sucesso! Mensagem enviada.");
                    form.reset();
                } else {
                    console.error("Erro retornado pela API:", result || response.statusText);
                    alert("Erro no servidor: " + (result?.error || "Falha na comunicação com o banco de dados. Verifique o terminal do Vercel Dev."));
                }
            } catch (err) {
                console.error("Erro crítico na requisição:", err);
                alert("Erro de conexão: O servidor não respondeu. Certifique-se de que está rodando o comando 'vercel dev'.");
            } finally {
                btn.innerText = "Enviar Mensagem";
                btn.disabled = false;
            }
        });
    }
});