$(document).ready (function() {
  $('.tab-content#integrity').show();
});


 $(document).ready(function () {
   $(".tabs a").on ('click', function(e){
     e.preventDefault();
     var currentValue = $(this).attr('href');
     $('.tab-content').hide();
     $('.tabs li').removeClass('active');
     $(currentValue).show();
     $(this).parent().addClass('active');
   });
 });
