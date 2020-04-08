const {expect} = require('chai')
const {add, subtract} = require('./index')

describe('Testes', function() {
    it('Sucesso: adição de números', () => {
        const result = add(1,1)
        expect(result).to.be.eql(2)
    }) 

    it('Sucesso: subtração de números', () => {
        const result = subtract(1,1)
        expect(result).to.be.eql(0)
    })

    it.skip('Sucesso: subtração de números', () => {
        const result = subtract(1,1)
        expect(result).to.be.eql(1)
    }) 
})