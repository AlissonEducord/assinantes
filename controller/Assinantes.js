const Assinantes = require ("../models/Assinantes") 
const express = require('express')
const path = require('path')

const router = express.Router()

router.get('/', (req, res) => 
  Assinantes.findAll()
    .then(Assinantes => 
        res.status(200).json(Assinantes)
      )
    .catch(err => console.log(err)));

router.post("/", (req,res) => 
  Assinantes.create(req.body)    
    .then(assinantes => {     
      res.status(200).json(assinantes.get({
        plain: true
      })) 
    })
    .catch(err => console.log(err))
);

router.get("/:id", (req,res) => 
  Assinantes.findByPk(req.params.id).then(assinante => {
    if(assinante){
      res.status(200).json(assinante)
    }else{
      res.status(400).json({"menssage":"nenhum registro encontrado"})
    }
  })
);

router.put("/:id", (req,res) => 
  Assinantes.findByPk(req.params.id)  
    .then(assinante => {
      assinante.update(req.body)
        .then(assinante => {
        res.status(200).json({"menssage":"Atualizado com sucesso."}) 
        })  
    })
);

router.delete("/:id", (req,res) => 
  Assinantes.findByPk(req.params.id)
    .then(assinante => {
      assinante.destroy().then(        
        res.status(200).json({"menssage":"Apagado com sucesso."})
      )
    })
);


module.exports = app => app.use('/assinantes',router);