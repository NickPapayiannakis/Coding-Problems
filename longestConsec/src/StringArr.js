var longestConsec = function(strarr, k){
	if (k > strarr.length || k <= 0) {return ""}
	return strarr.sort(function(a, b) {return a.length - b.length;}).slice(strarr.length - k, strarr.length).join("");
}