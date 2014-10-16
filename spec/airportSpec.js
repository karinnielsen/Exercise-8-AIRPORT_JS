describe("Airport", function() {

	beforeEach (function() {
		plane = new Plane
		airport = new Airport
	});

	it("should allow planes to land", function() {
		expect(plane.land(airport)).toEqual(airport)
	});

	it("should have a name", function() {
		expect(airport.name).toEqual("LHR")

	});


	describe("Plane", function() {

		it("should have a flight number", function() {
			expect(plane.flightNumber).toEqual("")
		});

		it("should have a departure airport", function() {
			expect(plane.departureAirport).toEqual(airport)
		});

		it("should have a destination airport", function() {
			expect(plane.destinationAirport).toEqual(airport)
		});

	});

});