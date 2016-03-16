$(function (){
  "use strict";

  // Activatethe mobile side nav.
  $(".button-collapse").sideNav();

  /**
   * Handle the "Show More" button in Education section.
   */
  $('.education-description li').hide().filter(':lt(5)').show();
  $('#toggle-courses a').click(function(){
    // Check if the courses are open or close.
    if ($('.education-description').hasClass('long-list')) {
      $('.education-description li:gt(4)').slideDown('slow');
    } else {
      $('.education-description li:gt(4)').slideUp('slow');
    }

    $('#education-description-hide-text').toggleClass('long-list');

    // Chage the text, and set the appropriate one.
    var buttonText = $(this).text() === "Show More" ? "Show Less" : "Show More";
    $(this).text(buttonText);
  });
});
