# Eventos App – Prueba Técnica Frontend

Este proyecto es una prueba técnica desarrollada en React. Simula una plataforma de exploración de eventos donde el usuario puede navegar, buscar y filtrar eventos según distintos criterios.

## 🚀 Tecnologías utilizadas

- **React**
- **React Router DOM** (navegación entre vistas)
- **CSS Modules** (estilos encapsulados)
- **Framer Motion** (animaciones sutiles)

### 📦 Versiones de dependencias

| Librería / Framework         | Versión     |
|-----------------------------|-------------|
| react                       | 18.2.0      |
| react-dom                   | 18.2.0      |
| react-router-dom            | 6.3.0       |
| react-scripts               | 5.0.1       |
| framer-motion               | 6.4.3       |
| react-slideshow-image       | 4.0.3       |
| uuid                        | 8.3.2       |
| @testing-library/react      | 13.3.0      |
| @testing-library/jest-dom   | 5.16.4      |
| @testing-library/user-event | 13.5.0      |
| web-vitals                  | 2.1.4       |
| gh-pages                    | 4.0.0       |
| cross-env                   | 7.0.3       |

## 📁 Estructura del proyecto

```
eventos-app/
├── Components/            # NavBar, Footer, Filters, Grid, Slider, etc.
├── Containers/            # Home, Browse (EventList), GamePage (EventDetail), NotFound
├── Resources/             # Imágenes y assets (SVGs, PNGs)
├── utils/                 # Datos mockeados y helpers (games.ts, events.ts, etc.)
├── App.tsx                # Enrutador principal
├── index.tsx              # Entry point
```

## ✅ Funcionalidades implementadas

- 🔍 Filtro por **tipo de evento** (Virtual / Presencial / Híbrido)
- 📅 Filtro por **fecha** (Hoy, Esta semana, Este mes, Este año)
- 🧠 Búsqueda por nombre con resultado en tiempo real
- 🖼️ Vista detallada del evento al hacer clic
- 📱 Diseño responsive adaptado a distintos tamaños de pantalla
- ✨ Animaciones con `Framer Motion`

## 🛠️ Cómo ejecutar el proyecto localmente

1. Clona el repositorio:

```bash
git clone https://github.com/sebastianocamporoa/eventos-app.git
```

2. Instala las dependencias:

```bash
npm install
```

3. Ejecuta el proyecto:

```bash
npm run dev
```

## 📌 Consideraciones

Este proyecto fue desarrollado únicamente con fines evaluativos como parte de una prueba técnica para perfil React frontend. No es un producto final.
