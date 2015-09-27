/**
 * @file
 * It contains the basic function for display the distributor map.
 */
(function($){
  $(document).ready(function() {
    $("#dismap").click(function(event) {
      var len = $("div.markerbg").length;
      for(var i = 1; i <= len; i++) {
        // normal image
        mapimg = $(".mappoint[block='" + i + "']").attr('mapimg');
          $(".mappoint[block='" + i + "']").attr('src',mapimg);
          $("div.block" + i).css('display','none');
      }
    });
    $(".mappoint").live('click',function(event) {
      //window.flak = 1;
      no = $(this).attr('block');
      mapimg = $(this).attr('mapimg');
      var len = $("div.markerbg").length;
      for(var i = 1; i <= len; i++) {
        // normal image
        $(".mappoint[block='" + i + "']").attr('src',mapimg);
        $(".mappoint[block='" + i + "']").css('z-index','10');
        $("div.block" + i).css('display','none');
        $("div.block" + i).css('z-index','');
      }
      $(".mappoint[block='" + no + "']").css('z-index','20');
      $("div.block" + no).css('z-index','19');
      // Hover image
      $(".mappoint[block='" + no + "']").attr('src',mapimg);
      $("div.block" + no).css('display','block');
      event.stopPropagation();
    });
    $(".mappoint").hover(function(event) {
      no = $(this).attr('block');
      mapimg = $(this).attr('mapimg');
      var len = $("div.markerbg").length;
      for(var i = 1; i <= len; i++)	{
        // normal image
        $(".mappoint[block='" + i + "']").attr('src',mapimg);
        $(".mappoint[block='" + i + "']").css('z-index','10');
        $("div.block" + i).css('display','none');
        $("div.block" + i).css('z-index','');
      }
      $(".mappoint[block='" + no + "']").css('z-index','20');
      $("div.block" + no).css('z-index','19');
      // hover image
      $(".mappoint[block='" + no + "']").attr('src',mapimg);
      $("div.block" + no).css('display','block');
      },function() {
        if(window.flak != 1) {
          no = $(this).attr('block');
          mapimg = $(this).attr('mapimg');
          var len = $("div.markerbg").length;
          $(".mappoint[block='" + no + "']").css('z-index','20');
          $("div.block" + no).css('z-index','19');
          // normal image
          $(".mappoint[block='" + no + "']").attr('src',mapimg);
          $("div.block" + no).css('display','none');
          window.flak = 0;
        }
        else {
          window.flak = 0;
        }
    });
  });
})(jQuery);
