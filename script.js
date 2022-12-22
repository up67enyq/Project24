Const form = document.getElementById(„exercise-form“);
Const result = document.getElementById(„result“);

Form.addEventListener(„submit“, event => {
  Event.preventDefault();
  Const exercise = form.elements.exercise.value;
  If (exercise === „hard“) {
    Result.innerHTML = „Sie können sich sofort die Belohnung nehmen!“;
  } else {
    Result.innerHTML = „Sie müssen zuerst die leichte Übung erledigen, bevor Sie sich die Belohnung nehmen können.“;
  }
});
