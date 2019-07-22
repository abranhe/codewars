module.exports = arr => {
	return arr.findIndex((i, idx) => {
		return arr.slice(0, idx).reduce((pv, cv) => pv + cv, 0) === arr.slice(idx + 1).reduce((pv, cv) => pv + cv, 0);
	});
};
