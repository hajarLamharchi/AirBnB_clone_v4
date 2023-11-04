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
});