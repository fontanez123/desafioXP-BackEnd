const sinon = require('sinon');
const { expect } = require('chai');
const connection = require('../../models/connection');
const ativosModel = require('../../models/ativos');

describe('Testando a camada Model de Ativos', () => {

  describe('Testando a função getAll', () => {
    before(async () => {
      const execute = [[
        { id: 1, nome: 'VALE', quantidade: 186, valor: '350.20' },
        { id: 2, nome: 'PETROBRAS', quantidade: 391, valor: '500.00' },
      ]];

      sinon.stub(connection, 'execute').resolves(execute);
    });

    after(async () => { connection.execute.restore(); });

    it('Retorna um array', async () => {
      const result = await ativosModel.getAll();
      expect(result).to.be.an('array');
    });

    it('O array não está vazio', async () => {
      const result = await ativosModel.getAll();
      expect(result).to.not.be.empty;
    });

    it('Testando se as propriedades são esperadas ', async () => {
      const result = await ativosModel.getAll();
      expect(result[0]).to.have.a.property('id');
      expect(result[0]).to.have.a.property('nome');
      expect(result[0]).to.have.a.property('quantidade');
      expect(result[0]).to.have.a.property('valor');
    });
  });


  describe('Testando a função getById', () => {
    before(async () => {
      const execute = [{}];
  
      sinon.stub(connection, 'execute').resolves(execute);
    });
  
    after(async () => {
      connection.execute.restore();
    });
  
    describe('Quando não existe um ativo com o ID informado', () => {
      it('Retorna undefined', async () => {
        const result = await ativosModel.getById();
        expect(result).to.be.equal(undefined);
      });
    });
  
    describe('Quando existe um ativo com o ID informado', () => {  
      before(async () => {
        sinon.stub(ativosModel, 'getById')
          .resolves(
            { id: 1, nome: 'VALE', quantidade: 186, valor: '350.20' }
          );
      });
  
      after(() => {
        ativosModel.getById.restore();
      });
  
      it('Retorna um objeto', async () => {
        const result = await ativosModel.getById(1);  
        expect(result).to.be.an('object');
      });
  
      it('O objeto não está vazio', async () => {
        const result = await ativosModel.getById(1);  
        expect(result).to.be.not.empty;
      });
  
      it('O objeto possui as propriedades: "id", "nome", "quantidade" e "valor"', async () => {
        const result = await ativosModel.getById(1);  
        expect(result).to.include.all.keys('id', 'nome', 'quantidade', 'valor');
      });
    });
  });
});
