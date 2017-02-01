describe("longestConsec", function(){

  it("should return an empty string when passed an empty array", function(){
    expect(longestConsec([],1)).toEqual("");
  });

  it("should return the longest string when k = 1", function(){
    expect(longestConsec(["a","b","cc"],1)).toEqual("cc");
  });

  it("should return an empty string when k is greater than the array length", function(){
    expect(longestConsec(["a"],2)).toEqual("");
  });

  it("should return an empty string when k <= 0", function(){
    expect(longestConsec(["a"], 0)).toEqual("");
    expect(longestConsec(["a"], -10)).toEqual("");
  });

  it("should return a combo of k longest strings", function(){
    expect(longestConsec(["a", "bb","cc"],2)).toEqual("bbcc");
  });


})