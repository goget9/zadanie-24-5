const assert = require('assert');
const calculateStylePoints = require('./calculateStylePoints');

describe('calculateStylePoints', () => {
	describe('stylePoints', () => {
		it('should return total excluding highest and lowest value', () => {
			const actual = calculateStylePoints([19, 17.5, 18, 18.5, 16]);

			const expected = 54
		});

		it('should return total excluding highest and lowest value even if values are te same', () => {
			const actual = calculateStylePoints([19, 19, 19, 19, 19]);

			const expected = 57
		});
	});
});