$(document).ready(function() {
   var scroll_start = 0;
   var startchange = $('.');
   var offset = startchange.offset();
   if (startchange.lenght){

    $(document).scroll(function() {
        scroll_start = $(this).scrollTop();
        if(scroll_start > offset.top) {
            $(".").css("background", "#fff");
        } else {
            $(".").css("background", "rgba(0, 0, 0, 0.0)");
        }
    });

   }
});