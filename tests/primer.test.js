import {getPrimes, renderMultiplicationGrid} from '../src/prime.es6';

describe('getPrimes', () => {
    const feedback = getPrimes(3);

    it('returns the correct values', () => {
        expect(feedback).toEqual([2,3,5]);
    });

    it('returns the expected amount of prime numbers', () => {
        expect(feedback.length).toEqual(3);
    });

    it('is performant', () => {
        expect(getPrimes(30000).length).toEqual(30000);
    });
});

describe('renderMultiplicationGrid', () => {
    //can't think of a good way to test this, so just testing if the elements are there.
    const feedback = renderMultiplicationGrid([2]);
    it('outputs correct data', () => {
        expect(feedback).toContain("4");
        expect(feedback).toContain("2");
        expect(feedback).toContain("\n");
    });
});