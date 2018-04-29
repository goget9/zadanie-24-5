const assert = require('assert');
const calculateDistancePoints = require('./calculateDistancePoints')

describe('calculateDistancePoints', () => {
	describe('distancePoints', () => {
		it('should return points', () => {
			const actual = calculateDistancePoints(150, 'b', 120);

			const expected = 174;

			assert.equal(actual, expected);
		});
	});
});

