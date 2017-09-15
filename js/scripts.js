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
alert(city)
  var date = $("select#date").val();
alert(date)
  var dayOff = $("input:radio[name=day-off]:checked").val();
alert(dayOff)
  var dreamJob = $("input:radio[name=dream-job]:checked").val();
alert(dreamJob)
  var website = $("input:radio[name=website]:checked").val();
alert (website)
  if (city === "portland" && date === "oct" && dayOff === "css" && dreamJob === "css" && website === "css") {
    $("#java-android-portland, #ruby-rails-seattle, #c-net-seattle, #css-react-portland, form#track-suggest").hide();
    $("#css-react-portland").show();
  } else if (city === "portland" && date === "nov" && dayOff === "java" && dreamJob === "java" && website === "java") {
    $("#java-android-portland, #ruby-rails-seattle, #c-net-seattle, #css-react-portland, form#track-suggest").hide();
    $("#java-android-portland").show();
  } else if (city === "seattle" && date === "oct" && dayOff === "ruby" && dreamJob === "ruby" && website === "ruby") {
    $("#java-android-portland, #ruby-rails-seattle, #c-net-seattle, #css-react-portland, form#track-suggest").hide();
    $("#ruby-rails-seattle").show();
  } else if (city === "seattle" && date === "nov" && dayOff === "c#" && dreamJob === "c#" && website === "c#") {
    $("#java-android-portland, #ruby-rails-seattle, #c-net-seattle, #css-react-portland").hide();
    $("#c-net-seattle, form#track-suggest").show()
  } else if (dayOff === "css" && dreamJob === "css" && website === "css"){
    $("#java-android-portland, #ruby-rails-seattle, #c-net-seattle, #css-react-portland").hide();
    $("#css-react-portland, form#track-suggest").show();
  } else if (dayOff === "java" && dreamJob === "java" && website === "java"){
    $("#java-android-portland, #ruby-rails-seattle, #c-net-seattle, #css-react-portland").hide();
    $("#java-android-portland, form#track-suggest").show();
  } else if (dayOff === "ruby" && dreamJob === "ruby" && website === "ruby"){
    $("#java-android-portland, #ruby-rails-seattle, #c-net-seattle, #css-react-portland").hide();
    $("#ruby-rails-seattle, form#track-suggest").show();
  } else if (dayOff === "c#" && dreamJob === "c#" && website === "c#"){
    $("#java-android-portland, #ruby-rails-seattle, #c-net-seattle, #css-react-portland, form#track-suggest").hide();
    $("#c-net-seattle").show();
  } else if (dreamJob === "c#"){
    $("#java-android-portland, #ruby-rails-seattle, #c-net-seattle, #css-react-portland, form#track-suggest").hide();
    $("#c-net-seattle").show();
  } else if (dreamJob === "java"){
    $("#java-android-portland, #ruby-rails-seattle, #c-net-seattle, #css-react-portland, form#track-suggest").hide();
    $("#java-android-portland").show();
  } else if (dreamJob === "ruby"){
    $("#java-android-portland, #ruby-rails-seattle, #c-net-seattle, #css-react-portland, form#track-suggest").hide();
    $("#ruby-rails-seattle").show();
  } else {
    $("#java-android-portland, #ruby-rails-seattle, #c-net-seattle, #css-react-portland, form#track-suggest").hide();
    $("#css-react-portland").show();
  };
 });
});
