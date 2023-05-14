function launchBluee() {
  window.open("https://www.bluee.in/", "_blank");
}

document.addEventListener("DOMContentLoaded", function() {
  var searchButton = document.getElementById("sb_form_go");
  searchButton.addEventListener("click", launchBluee);
});
