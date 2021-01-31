$("#contact-form").submit((e) => {
  e.preventDefault();
  document.getElementById(
    "submit"
  ).innerHTML = `<lottie-player src="./loading.json" background="transparent" speed="1"
  style="width: 50px; height: 25px;" loop autoplay></lottie-player>`;
  $.ajax({
    url:
      "https://script.google.com/macros/s/AKfycbwTQKqOk5WKzG7RC43YER0a7n6JgYHL5MkPQuxknSmqffuYfr1O_NrlNA/exec",
    data: $("#contact-form").serialize(),
    method: "post",
    success: function (response) {
      document.getElementById("submit").innerHTML = "Send Message";
      $("#success").modal();
      $("#contact-form").trigger("reset");
    },
    error: function (err) {
      $("#failure").modal();
    },
  });
});
