const sinon = require('sinon');
const { expect } = require('chai');
const clientesService = require('../../services/clientes');
const clientesController = require('../../controllers/clientes');

describe('Testando a camada Controller de Clientes', () => {

  describe('Testando a função getById', () => {  
    const res = {};
    const req = {};

    const result = {
        id: 1,
        nome: 'Lázaro Kabib',
        saldo: '1053583.20'
    };

    before(() => {  
        req.params = {
            id: 1,
          };

        res.status = sinon.stub()
          .returns(res);
        res.json = sinon.stub()
          .returns();

        sinon.stub(clientesService, 'getById')
            .resolves(result);
      });

      after(() => {
        clientesService.getById.restore();
      });

      it('É chamado o status com o código 200', async () => {
        await clientesController.getById(req, res);      
        expect(res.status.calledWith(200)).to.be.equal(true);
      });

      it('É chamado o método "json" passando um objeto', async () => {
        await clientesController.getById(req, res);      
        expect(res.json.calledWith(sinon.match.object)).to.be.equal(true);
    });
  });      
});