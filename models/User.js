const Sequelize = require('sequelize');
const db = require('../config/database');

module.exports = class User{

    async getRankink() 
    {
        var result
        return await db
            .query("SELECT * FROM ranking", { type: Sequelize.QueryTypes.SELECT})
            .then(ranking => {
               
                return ranking
            })
            
    }

    async mensagem(msg) 
    {
        var result
        return await db
            .query(`
                INSERT INTO pontos  (id_assinantes, pontos) 

                SELECT 
                    id,
                    CASE
                    WHEN (flg_tipo = 'FREE') THEN 5 
                    WHEN (flg_tipo = 'PREMIUM') THEN 10
                    WHEN (flg_tipo = 'VIP') THEN 15
                
                    END AS pts 
                FROM assinantes
                WHERE id = ${msg.id}; 
                                                
                UPDATE assinantes 
                SET qtd_mensagens = (SELECT COALESCE(assinantes.qtd_mensagens,0) FROM assinantes   WHERE id = ${msg.id}) + 1            
                WHERE id = ${msg.id} ;

                `, { type: Sequelize.QueryTypes.INSERT})
            .then(ranking => {
               
                return ranking
            })
            
    }
}