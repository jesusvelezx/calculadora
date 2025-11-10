# Calculadora Web

Una calculadora web moderna y elegante construida con JavaScript vanilla y Vite, que simula el diseño clásico de una calculadora de escritorio con panel solar decorativo.

## Propósito del Proyecto

Este proyecto es parte de mi proceso de aprendizaje y práctica con tecnologías web fundamentales:

- **JavaScript** - Manipulación del DOM y lógica de aplicaciones
- **CSS** - Diseño y estilos avanzados
- **HTML** - Estructura semántica
- **Vite** - Herramientas modernas de desarrollo
- **Modularización** - Organización y estructura de código

## Características

- Operaciones matemáticas básicas (suma, resta, multiplicación, división)
- Cálculo de porcentajes
- Interfaz visual atractiva con diseño realista de calculadora
- Panel solar decorativo
- Display de doble línea (operación anterior y actual)
- Formato de números con separadores de miles
- Botones AC (limpiar todo) y CE (borrar último dígito)
- Tipografía especializada para el display (Seven Segment)
- Diseño responsivo

## Tecnologías Utilizadas

- **HTML5** - Estructura del proyecto
- **CSS3** - Estilos y diseño visual
- **JavaScript (ES6+)** - Lógica de la aplicación
- **Vite** - Bundler y servidor de desarrollo

## Estructura del Proyecto

```bash
calculadora/
├── src/
│   ├── app.js          # Lógica principal de la calculadora
│   ├── style.css       # Estilos CSS
│   ├── helpers.js      # Funciones auxiliares
│   └── events.js       # Manejo de eventos
├── public/
│   └── vite.svg        # Assets públicos
├── index.html          # Página principal
├── package.json        # Dependencias y scripts
└── README.md          # Documentación
```

## Instalación

1. Clona el repositorio o descarga el proyecto:

```bash
git clone <url-del-repositorio>
cd calculadora
```

2. Instala las dependencias:

```bash
npm install
```

## Uso

### Modo Desarrollo

Para iniciar el servidor de desarrollo:

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

### Compilar para Producción

Para crear una versión optimizada para producción:

```bash
npm run build
```

Los archivos compilados se generarán en la carpeta `dist/`

### Vista Previa de Producción

Para previsualizar la versión de producción:

```bash
npm run preview
```

## Funcionalidades

### Operaciones Disponibles

- **Suma (+)** - Suma dos números
- **Resta (-)** - Resta dos números
- **Multiplicación (×)** - Multiplica dos números
- **División (÷)** - Divide dos números (muestra 2 decimales)
- **Porcentaje (%)** - Calcula el porcentaje de un número

### Controles

- **AC (All Clear)** - Limpia toda la calculadora y reinicia los valores
- **CE (Clear Entry)** - Borra el último dígito ingresado
- **= (Igual)** - Ejecuta la operación matemática
- **. (Decimal)** - Agrega punto decimal al número

## Características del Diseño

- Panel solar decorativo en la parte superior
- Display LCD con efecto de cristal líquido
- Dos líneas de display:
  - Superior: muestra la operación anterior
  - Inferior: muestra el número actual
- Botones con diferentes colores según su función:
  - Números: estilo estándar
  - Operadores: estilo destacado
  - Funciones: estilo especial
  - Igual: estilo prominente
- Fuente "Seven Segment" para el display (estilo LCD)

## Versión

**0.0.1** - Versión inicial

## Licencia

Este proyecto es público y de código abierto. Siéntete libre de usarlo, modificarlo y aprender de él.

## Contribuciones

Como este es un proyecto de aprendizaje, las sugerencias y mejoras son bienvenidas. Si encuentras algún error o tienes ideas para mejorar el código, no dudes en abrir un issue o pull request.

## Notas de Desarrollo

El proyecto utiliza Vite como herramienta de desarrollo por su rapidez y configuración mínima. El código está organizado de manera modular para facilitar el mantenimiento y futuras mejoras.
