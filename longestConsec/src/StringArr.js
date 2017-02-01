var longestConsec = function(strarr, k){
	//expect(longestConsec(["a", "bb","cc"],2)).toEqual("bbcc"); TODO

	if (k > strarr.length || k <= 0) {return ""}

	return strarr.reduce(function(prev, curr){
		return prev.length > curr.length? prev : curr;
	}, "");
}