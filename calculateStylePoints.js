const calculateStylePoints = (styleNotes) => {
  const filteredNotes = styleNotes.reduce((a, b) => a + b, 0);
	
	finalNotes = filteredNotes - Math.min(styleNotes) - Math.max(styleNotes)

	return finalNotes;

};

module.exports = calculateStylePoints;