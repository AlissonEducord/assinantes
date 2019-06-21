const Sequelize = require('sequelize');
const db = require('../config/database');

const Assinantes = db.define('assinantes', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nome: {
    type: Sequelize.STRING
  },
  flg_tipo: {
    type: Sequelize.STRING
  },
  id_premiassao: {
    type: Sequelize.INTEGER
  },
  qtd_mensagens: {
      type: Sequelize.INTEGER
  }

})

module.exports = Assinantes;