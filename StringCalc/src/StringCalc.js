var calc = function(string){

	return string.split("").filter( function (i) {
		return Number.isInteger(parseInt(i, 10));
	}).map( function(i) {
		return parseInt(i, 10);
	}).reduce( function (a, b) {
		return a + b;
	},0)
};