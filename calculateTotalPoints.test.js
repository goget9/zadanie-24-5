const assert = require('assert');
const calculateTotalPoints = require('./calculateTotalPoints');

describe('calculateTotalPoints', () => {
	describe('totalPoints', () => {
		it('should return score', () => {
			const actual = calculateTotalPoints(227, 'm', 200, [18.0, 18.5, 17.5, 18.5, 18.5], -8.4, 8.7)
		})
	})
})