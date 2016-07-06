$(function (){
  "use strict";

  /**
   *  Handle the Send email button, on contact section.
   */
  $('#send-email').on('click', function() {
    // Get all the fields.
    var first_name = $('#first_name').val();
    var last_name = $('#last_name').val();
    var email = $('#email').val();
    var body = $('#textarea1').val();
    // Check if the one of the fields in invalid.
    var email_has_invalid = $('#email').hasClass('invalid') || $('#textarea1').hasClass('invalid');

    if (email_has_invalid) {
      var toastContent = $("<span>Can't send the email please fix the marked field.</span>");
      Materialize.toast(toastContent, 5000);
    } else {
      // Get the Email subject ready.
      var mail_subject = "subject=From your resume website";
      var mail_body = "body=Hi,<br />My name is " + first_name + " "  + last_name + ".<br />I wanted to talk with you about:<br />\"\"\"<br />" + body + "<br />\"\"\"<br /><br />My Email is: " + email;
      // Get the elemnt and insert the data.
      var mail_to_link = $('#send-email');
      mail_to_link.attr('href', 'mailto:nirgn975@gmail.com?' + mail_subject + '&' + mail_body);
    }
  });
});
