class ComponentSlot extends HTMLElement {
    constructor() {
        super();

        // Crear shadow DOM
        this.shadow = this.attachShadow({ mode: 'open' });

        // Definir estilos del componente
        const estilo = document.createElement('style');
        estilo.textContent = `
            .container {
                display: flex;
                flex-direction: column;
                border: 1px solid black;
                padding: 10px;
                justify-content: center;
            }
            . container .card-image  {
                width: 4%;
                height: auto;
                border-radius: 10px;
            }
            .img-header, .img-description, .more-options {
                margin: 10px 0;
            }

        `;

        // Crear template con slots
        const template = document.createElement('template');
        template.innerHTML = `
            <div class="container">
                <div class="card-image">
                    <slot name="image">
                        <img src="https://placehold.co/600x400/png" alt="Default Image">
                    </slot>
                </div>
                <div class="img-header">
                    <slot name="titulo">Default Title</slot>
                </div>
                <div class="img-description">
                    <slot name="descripcion">Default Description</slot>
                </div>
                <div class="more-options">
                    <slot name="opciones">Default Options</slot>
                </div>
            </div>
        `;

        // Anexar estilos y contenido al shadow DOM
        this.shadow.appendChild(estilo);
        this.shadow.appendChild(template.content.cloneNode(true));
    }
}

// Definir el custom element
window.customElements.define('component-slot', ComponentSlot);
