module.exports = input => {
	return Number(`${input}`.split('').map(c => (c * c)).join(''));
};
