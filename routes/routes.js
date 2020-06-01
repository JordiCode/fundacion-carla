const express = require('express');
const router = express.Router();
const i18n = require("i18n")

// Home.
router.get('/', (req, res) => {
    i18n.setLocale('en')
    res.render('home', {i18n})
})

// Privacy.
router.get('privacy', (req, res) => {
    i18n.setLocale('en')
    res.render('privacy', {i18n})
})

// About Us.
router.get('about', (req, res) => {
    i18n.setLocale('en')
    res.render('about', {i18n})
})

module.exports = router