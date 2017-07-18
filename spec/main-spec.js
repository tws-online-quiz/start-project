const add = require('../main/main');

describe('main()', () => {

    it('should return added result', () => {
        let actual = add(1,1);
        expect(actual).toBe(2);
    });
});