module.exports = words => {
	return words
		.split(' ')
		.map(word => {
			return word.length > 4 ? word.split('').reverse().join('') : word;
		})
		.join(' ');
};
