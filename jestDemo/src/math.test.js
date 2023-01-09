const {sum} = require('./math')
describe('Math module', () => {
    test('jest math return sum',()=>{
        const number = 1;
        const anotherNumber = 2;
        const result = sum(number,anotherNumber);
        expect(result).toEqual(3); 
    })
});