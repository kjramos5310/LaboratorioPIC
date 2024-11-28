class MiFooter extends HTMLElement {
    constructor() {
        super();

        // Shadow DOM
        this.shadow = this.attachShadow({ mode: 'open' });

        // Estilos del footer
        const estilo = document.createElement('style');
        estilo.textContent = `
            .footer {
                background-color: #808080; /* Fondo plomo */
                color: white; /* Letras blancas */
                text-align: center;
                padding: 30px 0;
                font-size: 14px;
                margin: 25px
                bottom: 0;
                width: 100%;
                margin: 0;
            }
        `;

        // Estructura del footer
        const footer = document.createElement('div');
        footer.classList.add('footer');
        footer.textContent = '© Derechos Reservados 2024';

        // Agregar estilos y contenido al Shadow DOM
        this.shadow.appendChild(estilo);
        this.shadow.appendChild(footer);
    }
}

// Registrar el componente
window.customElements.define('mi-footer', MiFooter);
