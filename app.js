const express = require('express');
const hbs = require('hbs');
require('dotenv').config()

const app = express();
const port = process.env.PORT;

app.set('view engine', 'hbs')
hbs.registerPartials( __dirname + '/views/partials');

app.use(express.static('public'))

app.get('/', (req, res)=>{
    res.render('home', {
        nombre: 'Sebastián Cubillos',
        titulo: 'Curso de Node'
    });
});

/* app.get('/generic', (req, res)=>{
    res.sendFile(__dirname + '/public/generic.html')
}) */

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Sebastián',
        titulo: 'Express'
    })
});


/* app.get('/elements', (req, res)=>{
    res.sendFile(__dirname + '/public/elements.html')
}) */

app.get('/elements', (req, res) => {
    res.render('elements')
});



app.listen(port, () => {
    console.log(`App corriendo en el puerto ${port}`)
})