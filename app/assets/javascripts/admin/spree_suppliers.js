//= require admin/suppliers_code
//= require admin/jq.print

$(function(){
 
  // Hook up the print link.
  $( "a.print" ).attr( "href", "javascript:void( 0 )" ).click(function(){
    // Print the DIV.
    $(this).next().find( ".printable" ).print();
 
    // Cancel click event.
    return( false );
  });
 
});
 