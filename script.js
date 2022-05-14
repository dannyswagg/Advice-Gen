document.addEventListener("click", function (event) {
  // Checking if the button was clicked
  if (!event.target.matches("#button")) return;

  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => rendAdvice(data));
});

function rendAdvice(data) {
  const slip_id = document.getElementById("sid");
  const advice = document.getElementById("rdvice");
  slip_id.innerHTML = data.slip.id;
  advice.innerHTML = `"${data.slip.advice}"`;
}
