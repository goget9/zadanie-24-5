const calculateDistancePoints = (distance, hillSize, kPoint) => {
	switch(hillSize) {
		case 'n':
			var hillMlty = 2
			break;
		case 'b':
			var hillMlty = 1.8
			break;
		case 'm':
			var hillMlty = 1.2
			break;
	}

	return kPoint + (distance - kPoint) * hillMlty

};

module.exports = calculateDistancePoints;