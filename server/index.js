const express = require('express');
const cors = require('cors');

require('dotenv').config();

const router = require('./app/router');

const app = express()
const port = process.env.PORT;

app.use(express.urlencoded({extended : true}));

app.use(cors({
    origin: "*"
}));

const multer = require('multer');
const bodyParser = multer();

// on utlise .none() pour dire qu'on attends pas de fichier, uniquement des inputs "classiques" !
app.use( bodyParser.none() );

// on sert les fichiers statiques
app.use(express.static('./public'));

app.use(router);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
