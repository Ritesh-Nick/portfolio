document.getElementById("form").addEventListener("submit", function(e) {
  e.preventDefault();

  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;

  if (name == "" || email == "") {
    alert("Please fill all fields");
  } else {
    alert("Form submitted successfully!");
  }
});