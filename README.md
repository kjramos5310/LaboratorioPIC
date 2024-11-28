# LaboratorioPIC

Este proyecto contiene una serie de Custom Elements desarrollados con JavaScript para construir interfaces de usuario dinámicas y reutilizables. Los componentes incluyen menús, galerías de usuarios, tablas, páginas de inicio personalizadas y más, diseñados para interactuar con datos estáticos o dinámicos mediante APIs.

##CustomMenu (<mi-menu>)
Descripción
Este componente crea un menú de navegación basado en un elemento <ul> con opciones definidas en un arreglo.

Propiedades
No tiene atributos configurables. Las opciones del menú están predefinidas en el código.

<mi-menu></mi-menu>
Estilos
Puedes personalizarlo añadiendo estilos CSS a la clase .custom-menu.


##MiInicio (<mi-inicio>)
Descripción
Un componente que muestra una página de inicio con un título y un subtítulo dentro de un contenedor estilizado.

Propiedades
No tiene atributos configurables.

<mi-inicio></mi-inicio>


##UserGallery (<user-gallery>)
Descripción
Crea una galería de tarjetas que muestra información de usuarios o elementos, consumiendo datos desde una API.

Atributos
api-endpoint: URL de la API desde la cual se obtienen los datos.

<user-gallery api-endpoint="https://pokeapi.co/api/v2/pokemon?limit=10"></user-gallery>

##TablaEstudiantes (<mi-tablita>)
Descripción
Genera una tabla de estudiantes con datos obtenidos desde una API.

Atributos
api-endpoint: URL de la API desde la cual se obtienen los datos.


<mi-tablita api-endpoint="https://jsonplaceholder.typicode.com/users"></mi-tablita>

###Tecnologías Utilizadas
JavaScript (Web Components)
HTML5
CSS3

#Autor
Desarrollado por K Jesus Ramos
