const express = require('express');
const app = express();
const sequelize = require('./database/db');
const BD = require('./database/models/Posts');
const users = require('./database/models/Users');
var cors = require('cors');
const Seq=require('sequelize')
const fileUpload = require('express-fileupload');
const path = require('path');
// Setting
const PORT = process.env.PORT || 4000;
const Op = Seq.Op;
app.use(fileUpload());
//cors
app.use(cors());

var whitelist = ['http://localhost:3000', '*']
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}
app.use(express.json());
app.use(express.static(__dirname+'public'));
// app.use('/static',express.static(__dirname+'/public'));
// app.use(express.static(path.join(__dirname,'public')));
// app.use('/static', express.static(path.join(__dirname, '/public')));
// var publicDir = require('path').join(__dirname,'/public'); 
// app.use(express.static(publicDir)); 


// Rutas
app.get('/', function (req, res) {
    console.log("DENTRO")
    res.json("si");
});


app.get('/ERapi/muestra', function (req, res) {
  BD.findAll({
    order: [
      ['createdAt', 'DESC'],
      // ['name', 'ASC'],
  ]
  }).then(users => {
    res.json(users);
  });
});

app.put("/ERapi/registrar", (request, res) => {
  BD.create({
    titulo: request.body.titulo,
    autor: request.body.autor,
    text: request.body.texto,
    tweet: request.body.tweet,
    abstract: request.body.abstract

  }).then(data => {
    res.json({
      status: "EXITO"
    })
  }).catch(function (err) {
    res.json({
      status: "ERROR",
      error: err
    })
  });;
})

app.get('/ERapi/status/:id', function (req, res) {
  BD.findOne({
    where: {
      id: req.params.id
    }

  })
.then(data => {
    

        BD.update({status:!data.status}, {
          where: {
            id: req.params.id
          }
        }).then(data => {
          res.json({
            status: "EXITO"
          })
        }).catch(function (err) {
          res.json({
            status: "ERROR",
            error: err
          })
        });;
   
    })

})


app.put('/ERapi/editarPost', function (req, res) {
  console.log(req.body)
  // res.json({status:"ERROR"})
        BD.update({titulo:req.body.titulo, autor: req.body.autor, text: req.body.texto, abstract:req.body.abstract, tweet:req.body.tweet}, {
          where: {
            id: req.body.id
          }
        }).then(data => {
          res.json({
            status: "EXITO"
          })
        }).catch(function (err) {
          res.json({
            status: "ERROR",
            error: err
          })
        });;
   


})

// Arrancamos el servidor
app.listen(PORT, function () {
  console.log(`La app ha arranado en http://localhost:${PORT}`);

  // Conectase a la base de datos
  // Force true: DROP TABLES
  sequelize.sync({ force: false }).then(() => {
    console.log("Nos hemos conectado a la base de datos");
  }).catch(error => {
    console.log('Se ha producido un error', error);
  })

});