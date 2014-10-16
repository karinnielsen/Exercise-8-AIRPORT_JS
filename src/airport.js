function Plane() {
	this.flightNumber = ""
	this.departureAirport = new Airport
	this.destinationAirport = new Airport
};

function Airport() {
	this.name = "LHR"
};
						

Plane.prototype.land = function(airport) {
	return airport
};