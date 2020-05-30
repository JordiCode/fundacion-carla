/*
    Falta obtener el idioma del usuario con node-fetch con la api de getcountry with IP

    Y, que el usuario cambie el idioma en los siguiente casos:
        * Cuando el idioma obtenido con la api getcountry no esté en nuestra lista.
        * Cuando el usuario decida cambiarlo con un botón en la web.

*/
const express = require('express')
const path = require('path')
const app = express()

const i18n = require("i18n")
// Vistas.
app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')

// Middleware
app.use(express.static(path.join(__dirname, 'views')));

// Configuración multilenguaje.
i18n.configure({
    locales:['en','es'],
	defaultLocale: 'es',
    register: global,
    directory: __dirname + '/locales'
})

/* 
    ** Rutas
*/
// Principal.
app.get('/', (req, res) => {
    res.render('home', {i18n})
})

// Privacidad.
app.get('privacy', (req, res) => {
    res.render('privacy')
})

// Acerca de nosotros.
app.get('about', (req, res) => {
    res.render('about')
})

/* Error 404, redirecciona.
app.get('*', (req, res) => {
    res.status(404);
    res.redirect('/')
})*/

const PORT = process.env.PORT || 3000;

// Iniciar el servidor
app.listen(PORT, () => {
    console.log("-----------------------------------");
    console.log(`Servidor encendido en el puerto ${PORT}
    Link: http://localhost:${PORT}`);
});