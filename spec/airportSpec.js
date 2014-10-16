describe("Airport", function() {

	beforeEach (function(){
		plane = new Plane
		airport = new Airport
	});

	it("should allow planes to land", function() {
		expect(plane.land(airport)).toEqual(airport)
	});

});