const sinon = require('sinon');
const { expect } = require('chai');
const clientesModel = require('../../models/clientes');

describe('Testando a camada Model de Clientes', () => {  

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

    describe('Testando a função login', () => {
      before(async () => {
        sinon.stub(clientesModel, 'login')
          .resolves(
          { email: 'lazarokabib94@gmail.com', senha: 'lazaro1234' }
          );
      });
  
      after(() => {
        clientesModel.login.restore();
      });
  
      it('Retorna um objeto', async () => {
        const result = await clientesModel.login('lazarokabib94@gmail.com', 'lazaro1234');  
        expect(result).to.be.an('object');
      });
  
      it('O objeto não está vazio', async () => {
        const result = await clientesModel.login('lazarokabib94@gmail.com', 'lazaro1234');  
        expect(result).to.be.not.empty;
      });
  
      it('O objeto possui as propriedades: "email", "senha"', async () => {
        const result = await clientesModel.login('lazarokabib94@gmail.com', 'lazaro1234');  
        expect(result).to.include.all.keys('email', 'senha');
      });
    });
});
  