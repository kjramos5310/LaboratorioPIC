class Galeria extends HTMLElement {
    constructor() {
        super();

        this.shadow = this.attachShadow({ mode: 'open' }); // Shadow DOM

        this.galeriaContainer = document.createElement('div');
        this.galeriaContainer.classList.add('galeria-container');

        this.estilo = document.createElement('style');
        this.estilo.textContent = `
            .galeria-container {
                display: flex;
                flex-wrap: wrap;
                gap: 10px;
            }
            .galeria-item {
                text-align: center;
            }
            img {
                width: 150px;
                height: 150px;
                object-fit: cover;
                border-radius: 8px;
            }
            p {
                font-size: 14px;
                color: #333;
                margin-top: 5px;
            }
        `;

        this.template = document.createElement('template');
        this.template.innerHTML = `
            <div class="galeria-item">
                <img src="" alt="Imagen de galeria">
                <p>Descripción de la imagen</p>
            </div>
        `;

        this.shadow.appendChild(this.estilo);
        this.shadow.appendChild(this.galeriaContainer);
    }

    // Corrige el nombre de este método
    connectedCallback() {
        this.render();
    }

    render = () => {
        this.galeriaContainer.innerHTML = ''; // Limpiar la galería

        // Lista de imágenes
        const Imagenes = [
            "https://a.espncdn.com/combiner/i?img=/i/leaguelogos/soccer/500/1944.png",
            "https://www.elcomercio.com/wp-content/uploads/2024/06/ENDRICK-PALMEIRAS-2024-06-21T212935.277-1024x683.jpg",
            "https://viajaporpichincha.com/index.php?option=com_jomcomdev&format=raw&task=ajax.image&pr=dz01NTAmYWM9MS8x&hash=196433&dir=pn&src=134-monumento_aya_huma_.jpg",
            "https://ec.viajandox.com/uploads/min_Monumento%20al%20Colibr%C3%AD_1.jpg",
        ];

        Imagenes.forEach((imagen, index) => {
            const item = this.template.content.cloneNode(true); // Clonar el template
            const img = item.querySelector('img');
            const p = item.querySelector('p');

            img.src = imagen;
            img.alt = `Imagen de galería ${index + 1}`;

            this.galeriaContainer.appendChild(item); // Añadir a la galería
        });
    };
}

window.customElements.define('mi-galeria', Galeria);
