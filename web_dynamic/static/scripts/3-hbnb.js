$(document).ready(function () {
    $.post("http://0.0.0.0:5001/api/v1/places_search/", function(data){
    	$.each(data, function(index, places) {
			let placeInfo = '<article>';
            placeInfo += '<h2>' + place.name + '</h2>';
            placeInfo += '<div class="price_by_night">$' + place.price_by_night + '</div>';
            placeInfo += '<div class="max_guest">' + place.max_guest + ' Guests</div>';
            placeInfo += '<div class="number_rooms">' + place.number_rooms + ' Rooms</div>';
            placeInfo += '<div class="number_bathrooms">' + place.number_bathrooms + ' Bathrooms</div>';
            placeInfo += '<div class="description">' + place.description + '</div>';
            placeInfo += '</article>';
            $('.places').append(placeInfo);
	});
    });
});
