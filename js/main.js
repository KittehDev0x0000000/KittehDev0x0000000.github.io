// onclick button event to change text
/*document.getElementById("changeL4").onclick = function () {
  document.getElementById("L4").innerHTML = "Hey, diddle, diddle, The cat and the fiddle, The cow jumped over the moon; The little dog laughed, To see such sport, And the dish ran away with the spoon.";
};*/

// dom load

$(document).ready(function(){

// log text to the console (test)
console.log('Welcome, you are here.');

// make .welcome become opaque on hover (1)
$('.welcome').hover(function(){
    $(this).animate({ opacity: "0.25" });
}, function() {
    $(this).animate({ opacity: "1" });
});

// alert when .welcome is clicked (2)
$('.welcome').on('click', function(){
   alert("Don't forget your keys");});

// change padding of .ship on hover (3)
$('.ship').hover(function(){
    $(this).animate({ padding: "0px" });
});


// toggle slide .cat on click (4)
$( '.cat' ).click(function() {
  $( ".cat" ).toggle( "slide" );
});

//change inner html with button (5)
var $changePara = $('#paragraph');

$('#click-me').on('click', function(){
  $changePara.html('<p>Hey, diddle, diddle, The cat and the fiddle, The cow jumped over the moon; The little dog laughed To see such sport, And the dish ran away with the spoon.</p>')
});




}); //end of dom load
