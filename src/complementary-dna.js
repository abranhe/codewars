module.exports = dna => {
	return dna
		.split('')
		.map(c => {
			return c === 'A' ? 'T' : c === 'T' ? 'A' : c === 'G' ? 'C' : 'G';
		})
		.join('');
};
