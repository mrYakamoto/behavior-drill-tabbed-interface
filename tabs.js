$(document).ready(function () {
  // Put your JavaScript behavior here

  $( '.tabs li' ).on('click', function(){
    $( '.active' ).removeClass( 'active' );
    $( this ).addClass( 'active' );

    var divId = $( this.firstChild ).attr('href');
    var $newText = $( divId ).html();
    var $existingText = $( '.tab-content' );

    $( '.tab-content' ).hide();
    $( divId ).show(  );
  });

});
