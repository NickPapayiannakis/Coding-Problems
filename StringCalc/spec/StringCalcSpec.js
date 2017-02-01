describe('StringCalculator', function(){
	it('should return 0 if the string is empty', function(){
		expect(calc('')).toEqual(0);
	});

	it('should return a number from the string', function(){
		
		expect(calc('3')).toEqual(3);
		expect(calc('4')).toEqual(4);
	});

	it('should return the sum of three comma-seperated integers', function(){
		
		expect(calc("1,2,3")).toEqual(6);
	});

	it('should work with line breaks', function(){
		
		expect(calc("1\n2,3")).toEqual(6);
	});

	it('should work with non-comma delimiters, introduced by a start with //', function(){
		
		expect(calc("//;\n1;2")).toEqual(3);
	});


});