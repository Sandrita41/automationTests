const TestsPO = require('');
const po = new TestsPO;

describe('', () => {
    beforeEach(() => {
       cy.readFile('QAtask.html')
        cy.visit('../../file/qaTask.html');
    })
    it('Select all items in the outer perimeter', () => {

    })
})