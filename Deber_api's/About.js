class perfil extends HTMLElement{
    constructor(){
        super();

        this.attachShadow({mode:'open'});
        this.container = document.createElement('div');
        this.container.classList.add('perfil-usuario');
        this.estilo = document.createElement('style');
        this.estilo.textContent = `
            .perfil-usuario{
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
            }
            .perfil-usuario img{
                width: 100px;
                height: 100px;
                border-radius: 50%;
            }
        `;

        this.shadowRoot.appendChild(this.estilo);
        this.shadowRoot.appendChild(this.container);
    }
    connectedCallback(){
        this.render();
    }

    render = () => {
        const profilePic = this.getAttribute('profile-pic');
        const username = this.getAttribute('username') || 'Usuario';
        const bio = this.getAttribute('bio') || 'Biografia del usuario';

        this.shadowRoot.querySelector('.perfil-usuario').innerHTML = `
            <img src="${profilePic}" alt="Imagen de perfil">
            <div class="username">${username}</div>
            <p>${bio}</p>
            <button class="follow-button">Seguir</button>
            <button class="message-button">Mensaje</button>
            `;
    }
}

window.customElements.define('perfil-usuario', perfil);