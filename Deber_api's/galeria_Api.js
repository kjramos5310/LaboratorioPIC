
// class UserGallery extends HTMLElement {
//     constructor() {
//         super();
//         this.shadow = this.attachShadow({ mode: 'open' });

//         this.container = document.createElement('div');
//         this.container.classList.add('user-gallery');

//         this.estilo = document.createElement('style');
//         this.estilo.textContent = `
//             // .user-gallery {
//             //     display: grid;
//             //     grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
//             //     gap: 20px;
//             //     padding: 20px;
//             // }
//             // .user-card {
//             //     display: flex;
//             //     flex-direction: column;
//             //     align-items: center;
//             //     border: 1px solid #ccc;
//             //     border-radius: 10px;
//             //     padding: 10px;
//             //     box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
//             // }
//             // .user-card img {
//             //     width: 100px;
//             //     height: 100px;
//             //     border-radius: 50%;
//             //     object-fit: cover;
//             // }
//             // .user-card h3 {
//             //     margin: 10px 0 5px;
//             // }
//             // .user-card p {
//             //     color: #666;
//             // }
//         `;

//         this.template = document.createElement('template');
//         this.template.innerHTML = `
//             <div class="user-card">
//                 <img src="https://placehold.co/100x100/png" alt="Usuario">
//                 <h3>Nombre</h3>
//                 <p>Email</p>
//             </div>
//         `;

//         this.shadow.appendChild(this.estilo);
//         this.shadow.appendChild(this.container);
//     }

//     connectedCallback() {
//         const endPoint = this.getAttribute('api-endpoint');
//         if (endPoint) {
//             this.fetchData(endPoint);
//         } else {
//             console.error('El atributo "api-endpoint" no está definido.');
//         }
//     }

//     fetchData = async (url) => {
//         try {
//             const response = await fetch(url);
//             const data = await response.json();
//             const users = data.data || [];
//             this.render(users);
//         } catch (error) {
//             console.error('Error al conectar con la API', error);
//             this.container.innerHTML = `<h1>Error con la API</h1>`;
//         }
//     };

//     render = (users) => {
//         this.container.innerHTML = ''; // Limpiar el contenedor
//         users.forEach(u => {
//             const card = this.template.content.cloneNode(true);
//             const img = card.querySelector('img');
//             const name = card.querySelector('h3');
//             const email = card.querySelector('p');

//             img.src = u.avatar;
//             img.alt = `Imagen de ${u.first_name} ${u.last_name}`;
//             name.textContent = `${u.first_name} ${u.last_name}`;
//             email.textContent = u.email;

//             this.container.appendChild(card);
//         });
//     };
// }

// window.customElements.define('user-gallery', UserGallery);

class UserGallery extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' });

        this.container = document.createElement('div');
        this.container.classList.add('user-gallery');

        this.estilo = document.createElement('style');
        this.estilo.textContent = `
            .user-gallery {
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
                gap: 20px;
                padding: 20px;
            }
            .user-card {
                display: flex;
                flex-direction: column;
                align-items: center;
                border: 1px solid #ccc;
                border-radius: 10px;
                padding: 10px;
                box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            }
            .user-card img {
                width: 100px;
                height: 100px;
                object-fit: cover;
            }
            .user-card h3 {
                margin: 10px 0 5px;
            }
            .user-card p {
                color: #666;
            }
        `;

        this.template = document.createElement('template');
        this.template.innerHTML = `
            <div class="user-card">
                <img src="" alt="Pokémon">
                <h3>Nombre</h3>
                <p>Tipo</p>
            </div>
        `;

        this.shadow.appendChild(this.estilo);
        this.shadow.appendChild(this.container);
    }

    connectedCallback() {
        const endPoint = this.getAttribute('api-endpoint');
        if (endPoint) {
            this.fetchData(endPoint);
        } else {
            console.error('El atributo "api-endpoint" no está definido.');
        }
    }

    fetchData = async (url) => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            const pokemonList = data.results || []; // Lista de Pokémon desde la API
            const detailedPokemonPromises = pokemonList.map(p => fetch(p.url).then(res => res.json()));
            const detailedPokemon = await Promise.all(detailedPokemonPromises);
            this.render(detailedPokemon);
        } catch (error) {
            console.error('Error al conectar con la API', error);
            this.container.innerHTML = `<h1>Error con la API</h1>`;
        }
    };

    render = (pokemonList) => {
        this.container.innerHTML = ''; // Limpiar el contenedor
        pokemonList.forEach(pokemon => {
            const card = this.template.content.cloneNode(true);
            const img = card.querySelector('img');
            const name = card.querySelector('h3');
            const type = card.querySelector('p');

            img.src = pokemon.sprites?.front_default || 'https://placehold.co/100x100/png';
            img.alt = `Imagen de ${pokemon.name}`;
            name.textContent = pokemon.name;
            type.textContent = `Tipos: ${pokemon.types.map(t => t.type.name).join(', ')}`;

            this.container.appendChild(card);
        });
    };
}

window.customElements.define('user-gallery', UserGallery);
