class CustomMenu extends HTMLElement {
    constructor() {
        super();

        const menu = document.createElement('ul'); // Cambiado a 'ul' para lista
        const menuOptions = [
            { text: "INICIO", link: "indext.html" },
            { text: "GALERIA", link: "Galeria.html" },
            { text: "ACERCA DE", link: "About.html" },
            { text: "GALERIA API", link: "galeria_api.html" },
            { text: "TABLA API", link: "tabla_api.html" },
            { text: "SLOTS PROFILE", link: "slots_profile.html" }
        ];

        menuOptions.forEach(option => {
            const item = document.createElement('li');
            const link = document.createElement('a');

            link.textContent = option.text; // Texto del enlace
            link.href = option.link; // URL de destino

            link.style.textDecoration = "none"; // Opcional: Quitar subrayado
            link.style.color = "inherit"; // Usar el color del contenedor

            item.appendChild(link); // Añadir el enlace al elemento de lista
            menu.appendChild(item); // Añadir el elemento al menú
        });

        menu.classList.add('custom-menu'); // Añadir clase para estilos
        this.appendChild(menu); // Asegurarse de añadir el menú al componente
    }
}

window.customElements.define('mi-menu', CustomMenu);
