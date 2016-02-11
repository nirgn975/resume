$(function (){
  "use strict";

  // var options = [
  //   {selector: '#general', offset: 0, callback: 'Materialize.showStaggeredList("#general")' },
  //   {selector: '#work', offset: 0, callback: 'Materialize.showStaggeredList("#work")' },
  //   {selector: '#eduction', offset: 0, callback: 'Materialize.showStaggeredList("#eduction")' },
  //   {selector: '#skills', offset: 0, callback: 'Materialize.showStaggeredList("#skills")' },
  //   {selector: '#projects', offset: 0, callback: 'Materialize.showStaggeredList("#projects")' },
  //   {selector: '#contact', offset: 0, callback: 'Materialize.showStaggeredList("#contact")' },
  // ];
  // Materialize.scrollFire(options);

  $('#send-email').on('click', function() {
    // Get all the fields.
    var first_name = $('#first_name').text();
    var last_name = $('#last_name').text();
    var email = $('#email').text();
    var body = $('#textarea1').text();
    // Check if the one of the fields in invalid.
    var email_has_invalid = $('#email').hasClass('invalid') || $('#textarea1').hasClass('invalid');
    var $toastContent;

    if (email_has_invalid) {
      $toastContent = $("<span>Can't send the email please fix the marked field.</span>");
    } else {
      $toastContent = $("<span>Email send successfully.</span>");
    }

    Materialize.toast($toastContent, 5000);
  });
});
