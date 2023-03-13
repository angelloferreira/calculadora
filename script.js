function insert(num) {
  document.getElementById("answer").value += num;
}

function calculate() {
  try {
      var evalAnswer = eval(document.getElementById("answer").value);
      document.getElementById("answer").value = evalAnswer;
  } catch(err) {
      document.getElementById("answer").value = "Erro";
  }
}

function clearInput() {
  document.getElementById("answer").value = "";
}
function backspace() {
  let answer = document.getElementById("answer");
  answer.value = answer.value.slice(0, -1);
}
