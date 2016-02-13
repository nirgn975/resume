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

  $(".button-collapse").sideNav();

  $('#send-email').on('click', function() {
    // Get all the fields.
    var first_name = $('#first_name').val();
    var last_name = $('#last_name').val();
    var email = $('#email').val();
    var body = $('#textarea1').val();
    // Check if the one of the fields in invalid.
    var email_has_invalid = $('#email').hasClass('invalid') || $('#textarea1').hasClass('invalid');
    var $toastContent;

    if (email_has_invalid) {
      $toastContent = $("<span>Can't send the email please fix the marked field.</span>");
    } else {
      // Get the Email subject ready.
      var mail_subject = "subject=From your resume website";
      var mail_body = "body=Hi,<br />My name is " + first_name + " "  + last_name + ".<br />I wanted to talk with you about:<br />\"\"\"<br />" + body + "<br />\"\"\"<br /><br />My Email is: " + email;
      // Get the elemnt and insert the data.
      var mail_to_link = $('#send-email');
      mail_to_link.attr('href', 'mailto:nirgn975@gmail.com?' + mail_subject + '&' + mail_body);
    }

    Materialize.toast($toastContent, 5000);
  });
});
