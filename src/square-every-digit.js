module.exports = (input) => {
	return Number(`${input}`.split('').map((c) => (c **= 2)).join(''));
};
