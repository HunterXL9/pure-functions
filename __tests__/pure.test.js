const removeLastNumber = require('../pure.js');

describe('removeLastNumber', () => {
  
    test('removes the last number from an array', () => {
        expect(removeLastNumber([1, 2, 3, 4])).toEqual([1, 2, 3]);
    });

    test('returns an empty array if the input array is empty and has a single element', () => {
        expect(removeLastNumber([])).toEqual([]);
    });

    test('returns an empty array if the input array has a single element', () => {
        expect(removeLastNumber([5])).toEqual([]);
    });

    test('handles arrays with mixed types', () => {
        expect(removeLastNumber([1, "two", 3, "four"])).toEqual([1, "two", 3]);
    });

    test('does not modify the original array', () => {
        const inputArray = [1, 2, 3, 4];
        removeLastNumber(inputArray);
        expect(inputArray).toEqual([1, 2, 3, 4]);
    });

});

