$(document).ready(function () {
    const amenityID = {};

    $('input[type="checkbox"]').change(function() {
      const id = $(this).data('id');
  
      if ($(this).prop('checked')) {
        amenityID[id] = true;
      } else {
        delete amenityID[id];
      }
      const amenityList = Object.values(amenityID).join(', ');
      $('amenities').text(amenityList);
    });

    $.get("http://localhost:5001/api/v1/status/", function(data){
        if (data.status = "OK"){
            $("DIV#api_status").addClass('available');
        }
        else{
            $("DIV#api_status").removeClass('available');
        }
    })
    
    $.post("http://localhost:5001/api/v1/places_search/", function(data){
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

    $('BUTTON').on('click', function () {
        $.post("http://localhost:5001/api/v1/places_search/", function(data){
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
});
