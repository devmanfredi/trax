exports.up = function (knex) {
  return knex.schema.createTable("trades", function (table) {
    table.string("id").primary();
    table.string("ativo").notNullable(); //INDICES
    table.int("lado").notNullable(); //COMPRA OU VENDA
    table.int("resultadoOperacao").notNullable(); //GAIN/LOSS
    table.int("contratos").notNullable(); //QUANTIDADE DE CONTRATOS
    table.int("quantidadePontos").notNullable(); //PONTOS DA OPERACAO
    table.string("gatilho").notNullable(); //PRICE ACTION/SUPERDOM/REGIAO
    table.int("tendencia").notNullable(); //LTA/LTB
    table.decimal("regiao").notNullable(); //REGIAO DE OPERACAO (102,300)
    table.string("detalhes").notNullable(); //DESCRICAO DO POR QUE ENTREI NA OPERACAO
    table.dateTime("data").notNullable(); //HORA E DATA DO TRADE
    table.decimal("valorDaOperacao").notNullable(); //VALOR DA OPERACAO
  });
};

exports.down = (knex) => knex.schema.dropTable("trades");
