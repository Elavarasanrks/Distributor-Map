/**
 * @file
 * It contains the basic function for creating distributor map. 
 */
(function($){
$(document).ready(function() {
  $("#dismap").click(function(event) {
    var elOffsetX = $(this).offset().left,
    elOffsetY = $(this).offset().top,
    clickOffsetX = event.pageX - elOffsetX,
    clickOffsetY = event.pageY - elOffsetY;
    event.preventDefault();
    $("#edit-field-dis-xy-und-0-value").val(clickOffsetX + "," + parseInt(clickOffsetY));
    $(".mappoint").css("margin-left",clickOffsetX - 10);
    $(".mappoint").css("margin-top",clickOffsetY - 34);
  });
});
})(jQuery);
