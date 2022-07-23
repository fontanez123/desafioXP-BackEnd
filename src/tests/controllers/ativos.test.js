const sinon = require('sinon');
const { expect } = require('chai');
const ativosService = require('../../services/ativos');
const ativosController = require('../../controllers/ativos');

describe('Testando a camada Controller de Ativos', () => {

    describe('Testando a função getAll', () => {
        const res = {};
        const req = {};

        const result = [
            { id: 1, nome: 'VALE', quantidade: 186, valor: '350.20' },
            { id: 2, nome: 'PETROBRAS', quantidade: 391, valor: '500.00' },
          ]

        before(() => {                 
            res.status = sinon.stub()
              .returns(res);
            res.json = sinon.stub()
              .returns();

            sinon.stub(ativosService, 'getAll')
                .resolves(result);
          });

          after(() => {
            ativosService.getAll.restore();
          });

          it('É chamado o status com o código 200', async () => {
            await ativosController.getAll(req, res);      
            expect(res.status.calledWith(200)).to.be.equal(true);
          });

          it('É chamado o método "json" passando um array', async () => {
            await ativosController.getAll(req, res);      
            expect(res.json.calledWith(sinon.match.array)).to.be.equal(true);
          });
    });



  describe('Testando a função getById', () => {  
    const res = {};
    const req = {};

    const result = {
        id: 1,
        nome: 'VALE',
        quantidade: 186,
        valor: '350.20'
    };

    before(() => {  
        req.params = {
            id: 1,
          };

        res.status = sinon.stub()
          .returns(res);
        res.json = sinon.stub()
          .returns();

        sinon.stub(ativosService, 'getById')
            .resolves(result);
      });

      after(() => {
        ativosService.getById.restore();
      });

      it('É chamado o status com o código 200', async () => {
        await ativosController.getById(req, res);      
        expect(res.status.calledWith(200)).to.be.equal(true);
      });

      it('É chamado o método "json" passando um objeto', async () => {
        await ativosController.getById(req, res);      
        expect(res.json.calledWith(sinon.match.object)).to.be.equal(true);
    });
  });      
});