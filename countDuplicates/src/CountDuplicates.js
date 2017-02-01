var countDuplicates = function(string) {
	let duplicateRecord = {};
	let duplicates = 0;

	for (i = 0; i < string.length; i++) {
		duplicateRecord[string[i]] = (duplicateRecord[string[i]] || 0) + 1;
	};

	for (var p in duplicateRecord) {
		if (duplicateRecord[p] > 1) {
			duplicates++
		}
	};

	return duplicates;
};