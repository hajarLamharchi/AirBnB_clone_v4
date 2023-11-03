$(document).ready(function () {
    $.post("http://0.0.0.0:5001/api/v1/places_search/", function(data){
    	$.each(data, function(index, place) {
	let placeInfo = '<article>';
	placeInfo += $('h2').text(place.name);
	placeInfo += $('.price_by_night').text(place.price_by_night);
	placeInfo += $('.max_guest').text(place.max_guest);
	placeInfo += $('.number_rooms').text(place.number_rooms);
	placeInfo += $('.number_bathrooms').text(place.number_bathrooms);
	placeInfo += $('.description').text(place.description);
	$('.places').append(placeInfo);
	});
    });
});
