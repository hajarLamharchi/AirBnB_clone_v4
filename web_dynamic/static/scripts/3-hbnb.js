$(document).ready(function () {
    $.post("http://0.0.0.0:5001/api/v1/places_search/", function(data){
    	$.each(data, function(index, places) {
	let placeInfo = '<article>';
	placeInfo += $('h2').text(places.name);
	placeInfo += $('.price_by_night').text(places.price_by_night);
	placeInfo += $('.max_guest').text(places.max_guest);
	placeInfo += $('.number_rooms').text(places.number_rooms);
	placeInfo += $('.number_bathrooms').text(places.number_bathrooms);
	placeInfo += $('.description').text(places.description);
	$('.places').append(placeInfo);
	});
    });
});
