
const redacoes = [
    {
        titulo: "Quando a seca encontra a enchente",
        tema: "Impactos sociais e econômicos das mudanças no ciclo hidrológico",
        texto: "Cole aqui o texto completo da redação 1."
    },
    {
        titulo: "A estética como imperativo",
        tema: "Riscos e implicações do uso indiscriminado de canetas emagrecedoras",
        texto: "Cole aqui o texto completo da redação 2."
    },
    {
        titulo: "O uso da Inteligência Artificial e as deepfakes",
        tema: "O que é real e o que é fictício na vida online?",
        texto: "Cole aqui o texto completo da redação 3."
    },
    {
        titulo: "Da diversão ao endividamento",
        tema: "Efeitos socioeconômicos das bets na vida de jovens brasileiros",
        texto: "Cole aqui o texto completo da redação 4."
    },
    {
        titulo: "Inclusão digital no Brasil",
        tema: "Caminhos e desafios na sociedade contemporânea",
        texto: "Cole aqui o texto completo da redação 5."
    },
    {
        titulo: "Cultura fitness",
        tema: "Bem-estar ou busca por estética inatingível",
        texto: "Cole aqui o texto completo da redação 6."
    },
    {
        titulo: "Agro forte, futuro sustentável",
        tema: "Equilíbrio entre produção e meio ambiente",
        texto: "Cole aqui o texto completo da redação 7."
    },
    {
        titulo: "Povos originários e direitos constitucionais",
        tema: "Desafios para a efetivação da cidadania indígena",
        texto: "Cole aqui o texto completo da redação 8."
    },
    {
        titulo: "Consumo, mídia e cultura",
        tema: "Influência dos algoritmos nos modos de vida",
        texto: "Cole aqui o texto completo da redação 9."
    },
    {
        titulo: "Preservação dos monumentos históricos",
        tema: "Desafios no Brasil contemporâneo",
        texto: "Cole aqui o texto completo da redação 10."
    },
    {
        titulo: "Exploração espacial no século XXI",
        tema: "Avanço científico e responsabilidade social",
        texto: "Cole aqui o texto completo da redação 11."
    },
    {
        titulo: "Espécies em extinção",
        tema: "Conservação da fauna e equilíbrio ecológico",
        texto: "Cole aqui o texto completo da redação 12."
    },
    {
        titulo: "Migração e acolhimento",
        tema: "Desafios da convivência em contextos globais",
        texto: "Cole aqui o texto completo da redação 13."
    },
    {
        titulo: "El Niño e mudanças climáticas",
        tema: "Preparação da sociedade diante de eventos extremos",
        texto: "Cole aqui o texto completo da redação 14."
    },
    {
        titulo: "Obsolescência tecnológica",
        tema: "Descarte de resíduos eletrônicos e sustentabilidade",
        texto: "Cole aqui o texto completo da redação 15."
    }
];

const essayGrid = document.getElementById("essayGrid");

const modal = document.getElementById("essayModal");
const modalNumber = document.getElementById("modalNumber");
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");
const closeModal = document.getElementById("closeModal");

// Criar os cartões das redações
redacoes.forEach((redacao, index) => {
    const card = document.createElement("div");
    card.classList.add("essay-card");

    card.innerHTML = `
        <span class="essay-number">
            REDAÇÃO ${String(index + 1).padStart(2, "0")}
        </span>

        <h3>${redacao.titulo}</h3>

        <p>${redacao.tema}</p>

        <button type="button">
            Ler redação →
        </button>
    `;

    card.querySelector("button").addEventListener("click", () => {
        abrirRedacao(index);
    });

    essayGrid.appendChild(card);
});

// Abrir a redação selecionada
function abrirRedacao(index) {
    const redacao = redacoes[index];

    modalNumber.textContent =
        `REDAÇÃO ${String(index + 1).padStart(2, "0")}`;

    modalTitle.textContent = redacao.titulo;

    modalText.textContent = redacao.texto;

    modal.classList.add("active");
    document.body.style.overflow = "hidden";
}

// Fechar a janela
function fecharModal() {
    modal.classList.remove("active");
    document.body.style.overflow = "";
}

closeModal.addEventListener("click", fecharModal);

modal.addEventListener("click", (event) => {
    if (event.target === modal) {
        fecharModal();
    }
});

// Fechar apertando ESC
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        fecharModal();
    }
});
