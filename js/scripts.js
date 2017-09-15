// Business (back-end) logic:
//var cssReactPortland =
//var javaAndroidPortland =
//var rubyRailsSeattle =
//var cNetSeattle =



//User Interface (front-end) logic:
$(document).ready(function() {
  $("form#track-suggest").submit(function(event) {
      event.preventDefault();
  var city = $("select#city").val();
  var date = $("select#date").val();
  var dayOff = $("input:radio[name=day-off]:checked").val();
  var dreamJob = $("input:radio[name=dream-job]:checked").val();
  var website = $("input:radio[name=website]:checked").val();

  if (city === "portland" && date === "oct" && dayOff === "css" && dreamJob === "css" && website === "css") {
    $().hide();
    $("#css-react-portland").show();
  } else if (city === "portland" && date === "nov" && dayOff === "java" && dreamJob === "java" && website === "java") {
    $().hide();
    $("#java-android-portland").show();
  } else if (city === "seattle" && date === "oct" && dayOff === "ruby" && dreamJob === "ruby" && website === "ruby") {
    $().hide();
    $("#ruby-rails-seattle").show();
  } else if (city === "seattle" && date === "nov" && dayOff === "c#" && dreamJob === "c#" && website === "c#") {
    $().hide();
    $("#c-net-seattle").show()
  } else {
    $().hide();
    $("#c-net-seattle").show();
  };
 });
});
