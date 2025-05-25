
# Aplicación de Gestión Veterinaria (JavaScript)

## Descripción del Proyecto

Es una aplicación web sencilla donde nos permite gestionar los registros de dueños y mascotas en una veterinaria. El usuario puede registrar, buscar, actualizar y eliminar información a través de formularios interactivos. Toda la lógica está implementada en JavaScript puro y funciona sin necesidad de backend, utilizando almacenamiento en memoria.

## Tecnologías Usadas

- HTML5: Estructura de la interfaz.
- CSS3: Estilo básico de los formularios.
- JavaScript (ES6+): Lógica del negocio, asincronía, interacción con el DOM.

## Aplicación de Asincronía

La aplicación incluye simulaciones asincrónicas usando varias técnicas:

- **Callbacks + setTimeout**: Para validar y registrar información con retraso simulado.
- **Promesas**: Para operaciones como la búsqueda de mascotas y eliminación, simulando tiempos de respuesta.
- **async/await**: Para consultas de información (como ver mascotas de un dueño), simulando carga de datos y respuesta del sistema.

Estas técnicas permiten replicar el comportamiento de una app conectada a una base de datos o backend real.

## Estructura general:

    Usa HTML5 para definir una página con un título (Veterinaria) y una serie de botones que despliegan formularios.

    Usa formularios <form> para cada una de las funcionalidades CRUD (registrar, buscar, actualizar, eliminar y consultar).

    Los formularios están ocultos por defecto y se muestran al presionar botones mediante mostrarFormulario('ID').

    Cada formulario se conecta a una función de JavaScript definida en main.js (por ejemplo, registrarDueño(event)).

## Funciones disponibles desde el HTML:

    Registrar nuevo dueño
    Formulario que pide: nombre, cédula, teléfono y correo. Se activa con registrarDueño(event).

    Registrar nueva mascota
    Pide nombre, especie, edad, peso, estado de salud y cédula del dueño. Usa registrarMascota(event).

    Listar todas las mascotas
    Botón que llama a listarMascotas() directamente, sin formulario.

    Buscar mascota por nombre
    Usa buscarMascotaPorNombre(event).

    Actualizar estado de salud de una mascota
    Usa actualizarSalud(event).

    Eliminar una mascota por nombre
    Usa eliminarMascotaPorNombre(event).

    Ver mascotas de un dueño
    Permite consultar por cédula y usa verMascotasDeDueño(event).

## Estilos en línea

Hay estilos CSS básicos embebidos para mostrar u ocultar formularios y mejorar la presentación.
main.js — Lógica de negocio y asincronía

Este archivo contiene toda la lógica de manejo de datos en memoria y las funciones que se invocan desde el HTML.
Variables principales:

    dueños = []: Array donde se almacenan objetos de dueños.

    mascotas = []: Array donde se almacenan objetos de mascotas.

## Registro con asincronía:

    registrarDueño(event)

        Usa setTimeout + callback para simular una validación asíncrona de 1.5 segundos.

        Agrega el dueño al array si los datos son válidos.

    registrarMascota(event)

        Usa setTimeout para simular verificación de existencia del dueño (2 segundos).

        Verifica si la cédula ingresada coincide con algún dueño existente.

## Otras funcionalidades:

    listarMascotas()

        Imprime en consola todas las mascotas registradas.

    buscarMascotaPorNombre(event)

        Usa Promise para simular una búsqueda con retardo (1.5s).

        Muestra resultado con alert o console.log.

    actualizarSalud(event)

        Implementa async/await con un setTimeout de 1 segundo.

        Permite modificar el estado de salud de una mascota.

    eliminarMascotaPorNombre(event)

        Usa Promise y setTimeout de 2 segundos para confirmar eliminación.

    verMascotasDeDueño(event)

        Usa async/await con setTimeout (2s) para simular carga de datos asociada a una cédula.

## Capturas de Pantalla (Opcional)

! [](.imagenes/image.png)

Puedes agregar capturas de pantalla aquí para mostrar los formularios o procesos de registro.
