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
});
