# 🌍 PatriGod FrontEnd

Este repositorio contiene el **Frontend** de la aplicación web **PatriGod**.

---

## 📚 Índice

1. [Creación del proyecto](#creación-del-proyecto)
2. [Estructura del proyecto](#estructura-del-proyecto)
3. [Configuración de rutas](#configuración-de-rutas)
4. [Librerías utilizadas](#librerías-utilizadas)
5. [Autor](#autor)

---

## Creación del proyecto

El proyecto fue creado utilizando **Vite**: 📁

```bash
npm create vite@latest patrigod_front
```

Inicialmente se ha dejado el proyecto desde cero para construir la aplicación de forma estructurada y organizada.

---

## Estructura del proyecto

Se han creado las siguientes carpetas 🗂️ principales para organizar el código:

- `componentes/` → Componentes reutilizables de la interfaz.
- `contexto/` → Gestión del estado global mediante contextos.
- `paginas/` → Páginas principales de la aplicación.
- `servicios/` → Servicios para conexión con APIs u otras funciones externas.

El primer paso ha sido crear toda la estructura base. A partir de aquí, se irá desarrollando el proyecto progresivamente.

---

##  Configuración de rutas

Para la navegación entre páginas se utiliza **React Router DOM**:

```bash
npm install react-router-dom
```

La configuración de las rutas se realiza en el archivo `App.jsx`.

---

##  Librerías utilizadas

### Material UI

Para el diseño visual empleare **Material UI**:

```bash
npm install @mui/material @emotion/react @emotion/styled
```

Material UI proporciona una amplia colección de componentes estilizados listos para usar y altamente personalizables.

### LeafLeft

Una de las librerias que voy a utilizar va a ser esta para poder visualizar mapas en la interfaz.

Instalación:
```bash
npm install react@rc react-dom@rc leaflet

npm install react-leaflet@next
```
---

##  Autor

Proyecto realizado por **Alejandro Copado López**.  

---