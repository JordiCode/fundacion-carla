const express = require('express')
const path = require('path')
const app = express()

const i18n = require("i18n")

// Configuración multilenguaje.
i18n.configure({
    locales:['en','es'],
	defaultLocale: 'es',
    register: global,
    directory: __dirname + '/locales'
})

// Vistas.
app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')

// Middleware
app.use(express.static(path.join(__dirname, 'views')))
app.use(i18n.init)
app.set('trust proxy', true)

/* 
    ** Rutas
*/
const rutas_gringas = require('./routes/routes.js')
app.use('/', rutas_gringas)

const rutas = require('./routes/rutas.js')
app.use('/es/', rutas)

// Error 404, redirecciona.
app.get('/es/*', (req, res) => {
    res.status(308);
    res.redirect('/es')
})

// Error 404, redirect.
app.get('*', (req, res) => {
    res.status(308);
    res.redirect('/')
})

const PORT = process.env.PORT || 3000;

// Iniciar el servidor
app.listen(PORT, () => {
    console.log("-----------------------------------");
    console.log(`Servidor encendido en el puerto ${PORT}
    Link: http://localhost:${PORT}`);
});