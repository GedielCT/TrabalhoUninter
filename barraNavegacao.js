class barraNavegacao extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                nav {
                    background: #333;
                    color: white;
                    font-family: Arial, sans-serif;
                    display: flex;
                    box-sizing: border-box;
                }
                nav a {
                    color: white;
                    text-decoration: none;
                    padding: 20px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    box-sizing: border-box;
                }
                nav a:hover {
                    background: rgba(255, 255, 255, 0.1);
                }
            </style>
            <nav>
                <a href="../pages/sobre.html">Sobre Mim</a>
                <a href="../pages/formacao.html">Formação</a>
                <a href="../pages/portifolio.html">Portifólio</a>
                <a href="../pages/contato.html">Contato</a>
            </nav>
        `;
    }
}

customElements.define('barra-navegacao', barraNavegacao);