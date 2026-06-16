# 🚀 Portfolio Abdiel

Portfólio pessoal desenvolvido para apresentar projetos, habilidades e experiências profissionais na área de desenvolvimento de software.

Este projeto foi criado com foco em **simplicidade, responsividade e boa apresentação profissional**, funcionando como uma vitrine online para recrutadores e empresas.

---

## 📸 Preview

👉 Acesse o projeto:
🔗 [https://github.com/abdieldeathayde/Portfolio-Abdiel](https://github.com/abdieldeathayde/Portfolio-Abdiel)

---

## 🧠 Sobre o Projeto

O **Portfolio Abdiel** é uma aplicação web estática que apresenta:

* 👨‍💻 Informações profissionais
* 🛠️ Tecnologias e habilidades
* 📂 Projetos desenvolvidos
* 📞 Formas de contato
* 🎨 Interface moderna e responsiva

O objetivo é centralizar a identidade profissional em um único ambiente online.

---

## 🧰 Tecnologias Utilizadas

* **HTML5** — Estrutura da aplicação
* **CSS3** — Estilização e layout responsivo
* **JavaScript (Vanilla JS)** — Interatividade e comportamento dinâmico

---

## 📁 Estrutura do Projeto

```
Portfolio-Abdiel/
│
├── assets/        # Imagens e recursos visuais
├── index.html     # Página principal
├── style.css      # Estilos da aplicação
├── menu.js        # Script de interação do menu
└── README.md
```

---

## ⚙️ Como Executar o Projeto

Este projeto utiliza **Node.js**, **Prisma ORM** e **Vercel Functions**.

1. **Clone o repositório e instale as dependências:**
```bash
git clone https://github.com/abdieldeathayde/Portfolio-Abdiel.git
cd Portfolio-Abdiel
npm install
```

2. **Configure a variável de ambiente do banco:**
   - Copie o exemplo para `.env.local`
   - Edite `DATABASE_URL` com sua string de conexão PostgreSQL
```bash
cp .env.example .env.local
```

3. **Execute o servidor local com Vercel:**
```bash
vercel dev
```

4. Abra a URL exibida pelo Vercel Dev no navegador.

> Importante: abrir apenas `index.html` localmente não acionará as funções do backend. Use `vercel dev` para testar o formulário de contato e a busca de projetos.

---

### ✅ Opção 2 — Usando Live Server (somente para frontend estático)

Se estiver usando VS Code apenas para ver o layout, você pode abrir `index.html` com Live Server. Mas lembre-se:

* O formulário de contato **não funcionará** sem o backend Vercel.
* A busca de projetos também depende do `vercel dev` e da variável `DATABASE_URL`.

---

## 🎯 Objetivos do Projeto

* Construir presença profissional online
* Demonstrar conhecimentos em Frontend
* Aplicar boas práticas de HTML, CSS e JS
* Servir como base para futuras melhorias

---

## 🚀 Melhorias Futuras

* [ ] Animações avançadas
* [ ] Dark Mode 🌙
* [ ] Integração com API de projetos do GitHub
* [ ] Formulário de contato funcional
* [ ] Versão multilíngue (PT/EN)

---

## 👨‍💻 Autor

**Abdiel de Athayde**

* 💼 Desenvolvedor Backend Java
* 🌐 Apaixonado por tecnologia e desenvolvimento de software

🔗 LinkedIn: *(adicione aqui)*
🔗 GitHub: [https://github.com/abdieldeathayde](https://github.com/abdieldeathayde)

---

## 📄 Licença

Este projeto está sob a licença MIT.
Sinta-se livre para estudar, modificar e utilizar como referência.

---

⭐ Se este projeto te ajudou ou inspirou, considere deixar uma estrela no repositório!
