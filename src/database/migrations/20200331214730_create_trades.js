exports.up = function(knex) {
    return knex.schema.createTable('trades', function (table) {
        table.string('id').primary();
        table.int('ativo').notNullable();//INDICES
        table.int('lado').notNullable();//COMPRA OU VENDA
        table.string('resultadoOperacao').notNullable();//GAIN/LOSS
        table.string('contratos').notNullable();//QUANTIDADE DE CONTRATOS
        table.int('quantidadePontos').notNullable();//PONTOS DA OPERACAO
        table.string('gatilho').notNullable();//PRICE ACTION/SUPERDOM/REGIAO
        table.string('tendencia').notNullable();//LTA/LTB
        table.decimal('regiao').notNullable();//REGIAO DE OPERACAO (102,300)
        table.decimal('detalhes').notNullable();//DESCRICAO DO POR QUE ENTREI NA OPERACAO
        table.decimal('data').notNullable();//HORA E DATA DO TRADE
        table.decimal('valorDaOperacao').notNullable();//VALOR DA OPERACAO
    });
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('trades');
};