module.exports = cc => {
	return cc
		.split('')
		.map((n, idx) => {
			const last4digits = Array.from({length: 4}, (v, i) => i + cc.length - 4);
			return last4digits.includes(idx) ? n : '#';
		})
		.join('');
};
