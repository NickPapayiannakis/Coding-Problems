describe("countDuplicates", function(){

	it("should return zero for an empty string", function() {
		expect(countDuplicates("")).toEqual(0);
	});

	it("should return duplicates for lowercase letters", function() {
		expect(countDuplicates("aabb")).toEqual(2);
	});

	it("should return duplicates for upper case letters", function() {
		expect(countDuplicates("4jaBnB")).toEqual(1);
	});

	it("should return duplicates for numbers", function() {
		expect(countDuplicates("ierwcxn0o033")).toEqual(2);
	});

	it("should return duplicates for a string containing a combination of alphanumeric characters", function() {
		expect(countDuplicates("aa55CC")).toEqual(3);
	});

} )