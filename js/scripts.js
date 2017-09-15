// Business (back-end) logic:
var cssReactPortland =
var javaAndroidPortland =
var rubyRailsSeattle =
var cNetSeattle = 



//User Interface (front-end) logic:
$(document).ready(function() {
  $("form#track-suggest").submit(function(event) {
  event.preventDefault();
  var city = $("select#city").val());
  var date = $("select#date").val());
  var dayOff = $("input:radio[name=day-off]:checked").val();
  var dreamJob = $("input:radio[name=dream-job]:checked").val();
  var website = $("input:radio[name=website]:checked").val();

  var result =

  if (city === 'portland') {
    $().hide();
    $("#css-react-portland").show();

    $().hide();
    $("#java-android-portland").show();

  } else {
    $().hide();
    $("#ruby-rails-seattle").show();

    $().hide();
    $("#c-net-seattle").show();
  }

  $("#output").text(result);
 });
});
