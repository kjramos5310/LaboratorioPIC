class TablaEstudiantes extends HTMLElement {
    constructor() {
        super();

        // Crear una tabla
        this.table = document.createElement('table');
        this.table.classList.add('tabla-estudiantes'); // Clase CSS para la tabla

        // Crear encabezados de la tabla
        const headers = ['ID', 'Nombre', 'Email', 'Ciudad'];
        const headerRow = document.createElement('tr');

        headers.forEach(headerText => {
            const header = document.createElement('th');
            header.textContent = headerText;
            headerRow.appendChild(header);
        });
        this.table.appendChild(headerRow);

        // Añadir tabla al componente personalizado
        this.appendChild(this.table);
    }

    connectedCallback() {
        const endPoint = this.getAttribute('api-endpoint');
        if (endPoint) {
            this.fetchData(endPoint);
        } else {
            console.error('El atributo "api-endpoint" no está definido.');
        }
    }

    async fetchData(url) {
        try {
            const response = await fetch(url);
            const data = await response.json();
            this.render(data); // Adaptar al formato de la API
        } catch (error) {
            console.error('Error al conectar con la API', error);
            this.table.innerHTML += `<tr><td colspan="4">Error al cargar los datos</td></tr>`;
        }
    }

    render(data) {
        // Limpiar filas existentes (excepto encabezados)
        const rows = this.table.querySelectorAll('tr:not(:first-child)');
        rows.forEach(row => row.remove());

        // Iterar sobre los datos y añadirlos a la tabla
        data.forEach(item => {
            const row = document.createElement('tr');

            // ID
            const idCell = document.createElement('td');
            idCell.textContent = item.id || 'N/A';
            row.appendChild(idCell);

            // Nombre
            const nameCell = document.createElement('td');
            nameCell.textContent = item.name || 'N/A';
            row.appendChild(nameCell);

            // Email
            const emailCell = document.createElement('td');
            emailCell.textContent = item.email || 'N/A';
            row.appendChild(emailCell);

            // Ciudad
            const cityCell = document.createElement('td');
            cityCell.textContent = item.address?.city || 'N/A';
            row.appendChild(cityCell);

            this.table.appendChild(row);
        });
    }
}

// Registrar el elemento personalizado
customElements.define('mi-tablita', TablaEstudiantes);
