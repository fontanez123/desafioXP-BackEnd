const sinon = require('sinon');
const { expect } = require('chai');
const connection = require('../../models/connection');
const clientesModel = require('../../models/clientes');

describe('Testando a camada Model de Clientes', () => {
  
    describe('Testando a função getById', () => {
      before(async () => {
        const execute = [{}];
    
        sinon.stub(connection, 'execute').resolves(execute);
      });
    
      after(async () => {
        connection.execute.restore();
      });
    
      describe('Quando não existe um cliente com o ID informado', () => {
        it('Retorna undefined', async () => {
          const result = await clientesModel.getById();
          expect(result).to.be.equal(undefined);
        });
      });
    
      describe('Quando existe um cliente com o ID informado', () => {  
        before(async () => {
          sinon.stub(clientesModel, 'getById')
            .resolves(
            { id: 1, nome: 'Lázaro Kabib', saldo: '1033583.20' }
            );
        });
    
        after(() => {
          clientesModel.getById.restore();
        });
    
        it('Retorna um objeto', async () => {
          const result = await clientesModel.getById(1);  
          expect(result).to.be.an('object');
        });
    
        it('O objeto não está vazio', async () => {
          const result = await clientesModel.getById(1);  
          expect(result).to.be.not.empty;
        });
    
        it('O objeto possui as propriedades: "id", "nome", "saldo"', async () => {
          const result = await clientesModel.getById(1);  
          expect(result).to.include.all.keys('id', 'nome', 'saldo');
        });
      });
    });
  });
  