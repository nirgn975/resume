$(function (){
  "use strict";

  // Activatethe mobile side nav.
  $(".button-collapse").sideNav();


  $('.education-description li').hide().filter(':lt(5)').show();
  $('#toggle-courses a').click(function(){
    $('.education-description li:gt(4)').toggle();
    $('#education-description-hide-text').toggleClass('long-list');
    var buttonText = $(this).text() === "Show More" ? "Show Less" : "Show More";
    $(this).text(buttonText);
  });


});
