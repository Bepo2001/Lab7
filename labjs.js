document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('form').onsubmit = function(event) {
        document.querySelector("#main_header").style.color = document.querySelector("#value_of_color").value;
        event.preventDefault();
      };
    })