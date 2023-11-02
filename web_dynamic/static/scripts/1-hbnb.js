$(document).ready(function () {
  const amenityID = {};
  $('input[type="checkbox"]').change(function() {
    const id = $(this).data('amenity_id');
    if ($(this).prop('checked')) {
      amenityId[id] = true;
    } else {
      delete amenityId[id];
    }
    $('amenities').text(amenityId);
  });
});
