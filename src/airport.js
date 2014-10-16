function Plane() {
	this.flightNumber = ""
	this.departureAirport = new Airport
	this.destinationAirport = new Airport
};

function Airport() {};

Plane.prototype.land = function(airport){
	return airport
};