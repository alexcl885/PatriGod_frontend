# 🌍 PatriGod FrontEnd

Este repositorio contiene el **Frontend** de la aplicación web **PatriGod**, una plataforma para descubrir, valorar y gestionar ciudades, monumentos, eventos y gastronomía.

---

## 📚 Índice

1. [Creación del proyecto](#creación-del-proyecto)
2. [Estructura del proyecto](#estructura-del-proyecto)
3. [Rutas principales](#rutas-principales)
4. [Componentes principales](#componentes-principales)
5. [Contextos y gestión de estado global](#contextos-y-gestión-de-estado-global)
6. [Servicios y autenticación JWT](#servicios-y-autenticación-jwt)
7. [Notificaciones y experiencia de usuario](#notificaciones-y-experiencia-de-usuario)
8. [Hooks personalizados](#hooks-personalizados)
9. [Autor](#autor)

---

## Creación del proyecto

El proyecto fue creado utilizando **Vite**:

```bash
npm create vite@latest patrigod_front
```

---

## Estructura del proyecto

El código fuente se encuentra en la carpeta `src/` y está organizado en:

```
src/
│
├── componentes/           # Componentes reutilizables y específicos
│   ├── Articulos/
│   ├── ChatSideBar/
│   ├── Ciudad/
│   ├── ComidasCiudad/
│   ├── DetallesUsuario/
│   ├── EnviarEmailUsuarios/
│   ├── EventosCiudad/
│   ├── Footer/
│   ├── Header/
│   ├── Layout/
│   ├── LoginUI/
│   ├── Monumento/
│   ├── MonumentosCiudad/
│   ├── Registro/
│   └── ...otros
│
├── contexto/              # Contextos globales (UserContext)
│
├── paginas/               # Páginas principales de la app
│
├── servicios/             # Lógica de acceso a APIs y autenticación
│
├── App.jsx                # Configuración de rutas y providers
├── main.jsx               # Punto de entrada de la app
└── index.css              # Estilos globales
```

---

## Rutas principales

La navegación se gestiona con React Router. Todas las rutas hijas del layout principal son:

| Ruta                                         | Descripción                                         | Acceso           |
|-----------------------------------------------|-----------------------------------------------------|------------------|
| `/`                                          | Página principal (Home)                             | Público          |
| `/ciudad/:id`                                | Detalle de ciudad                                   | Público          |
| `/ciudad/:id/comidas`                        | Listado de comidas de la ciudad                     | Público          |
| `/ciudad/:id/comidas/:idComida`              | Detalle de comida                                   | Público          |
| `/ciudad/:id/monumentos`                     | Listado de monumentos de la ciudad                  | Público          |
| `/ciudad/:id/monumentos/:idMonumento`        | Detalle de monumento                                | Público          |
| `/ciudad/:id/eventos`                        | Listado de eventos de la ciudad                     | Público          |
| `/ciudad/:id/eventos/:idEvento`              | Detalle de evento                                   | Público          |
| `/ciudad/:id/add/monumento`                  | Añadir nuevo monumento a la ciudad                  | Solo admin       |
| `/ciudad/:id/add/comida`                     | Añadir nueva comida a la ciudad                     | Solo admin       |
| `/ciudad/:id/add/evento`                     | Añadir nuevo evento a la ciudad                     | Solo admin       |
| `/acerca`                                    | Acerca de la aplicación                             | Público          |
| `/datos_usuario`                             | Detalles del usuario autenticado                    | Usuario logueado |
| `/login`                                     | Login de usuario                                    | Público          |
| `/register`                                  | Registro de usuario                                 | Público          |
| `/ranking`                                   | Ranking de usuarios                                 | Público          |
| `/ranking/articulos`                         | Ranking de artículos                                | Público          |
| `/actualizacionPatrigod`                     | Enviar email masivo a usuarios                      | Solo admin       |
| `*`                                          | Página de error (ErrorPage)                         | Público          |

---

## Componentes principales

### **Header.jsx**
- Barra de navegación principal, muestra enlaces según el tipo de usuario (admin/usuario).
- Incluye logo, enlaces a secciones clave y botones de login/logout.

### **Footer.jsx**
- Pie de página con información de contacto y enlaces útiles.

### **Layout.jsx**
- Contenedor común que envuelve el header, footer y el contenido de cada página.

### **ChatSideBar.jsx**
- Chat lateral con IA (requiere login), permite consultas sobre la app y sus contenidos.

### **Ciudad.jsx**
- Muestra información detallada de una ciudad, incluyendo monumentos, eventos y comidas.

### **Articulos.jsx**
- Componente genérico para mostrar listados de artículos (monumentos, eventos, comidas).

### **MonumentosCiudad.jsx, EventosCiudad.jsx, ComidasCiudad.jsx**
- Listados específicos de cada tipo de artículo, con opciones de ver detalle y eliminar (solo admin).

### **Monumento.jsx, Evento.jsx, Comida.jsx**
- Vista detallada de cada artículo, con opción de valoración mediante estrellas.

### **Registro/componentsLogin/SignInCard.jsx**
- Formulario de registro de usuario, con validación y envío de email de bienvenida.

### **LoginUI/componentsLogin/SignInCard.jsx**
- Formulario de login, integración con JWT y contexto global de usuario.

### **DetallesUsuario.jsx**
- Muestra los datos del usuario autenticado.

### **EnviarEmailUsuarios.jsx**
- Permite al administrador enviar emails masivos a los usuarios.

### **RankingPage.jsx & RankingArticulosPage.jsx**
- Muestran rankings de usuarios y artículos más valorados.

### **GestionUsuariosPage.jsx**
- Gestión de usuarios para administradores (listado, edición, borrado).

### **AddNewMonumentoPage.jsx, AddNewEventoPage.jsx, AddNewComidaPage.jsx**
- Formularios para añadir nuevos artículos a una ciudad (solo admin).

---

## Contextos y gestión de estado global

### **UserContext**
- Proporciona el usuario autenticado, el token JWT y funciones para login/logout a toda la app.
- Se utiliza en todos los componentes que requieren información del usuario o autenticación.

---

## Servicios y autenticación JWT

- El acceso a la API se realiza mediante el módulo `servicios/api.js`.
- La autenticación se gestiona con JWT, almacenando el token en localStorage y en el contexto global.
- El registro y login de usuarios están integrados con el backend y gestionan el estado global del usuario.

---

## Notificaciones y experiencia de usuario

- Se utiliza `react-toastify` para mostrar notificaciones visuales (éxito, error, advertencia) en acciones como login, registro, valoración, etc.
- La interfaz está diseñada con Material UI, asegurando una experiencia moderna y responsive.

---

## Hooks personalizados

- **useContext(UserContext):** Para acceder y modificar el usuario y token globalmente.
- **useEffect:** Para cargar datos de la API al montar componentes.
- **useState:** Para gestionar el estado local de formularios, valoraciones, etc.
- **useNavigate:** Para navegar entre vistas.

---

## Autor

Proyecto realizado por **Alejandro Copado López**.