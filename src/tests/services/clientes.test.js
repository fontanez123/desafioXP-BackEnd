const sinon = require('sinon');
const { expect } = require('chai');
const clientesModel = require('../../models/clientes');
const clientesService = require('../../services/clientes');

describe('Testando a camada Service de Clientes', () => {

    describe('Testando a função getById', () => {
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
          const result = await clientesService.getById(1);  
          expect(result).to.be.an('object');
        });
    
        it('O objeto não está vazio', async () => {
          const result = await clientesService.getById(1);  
          expect(result).to.be.not.empty;
        });
    
        it('O objeto possui as propriedades: "id", "nome", "saldo"', async () => {
          const result = await clientesService.getById(1);  
          expect(result).to.include.all.keys('id', 'nome', 'saldo');
        });
    });

    describe('Testando a função login', () => {
      before(async () => {
        sinon.stub(clientesService, 'login')
          .resolves(
          { token: '' }
          );
      });
  
      after(() => {
        clientesService.login.restore();
      });
  
      it('Retorna um objeto', async () => {
        const result = await clientesService.login('', '');  
        expect(result).to.be.an('object');
      });
  
      it('O objeto não está vazio', async () => {
        const result = await clientesService.login('', '');  
        expect(result).to.be.not.empty;
      });
  
      it('O objeto possui a propriedade: "token"', async () => {
        const result = await clientesService.login('', '');  
        expect(result).to.include.all.keys('token');
      });
  });
});