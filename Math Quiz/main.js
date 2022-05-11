player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML =
  "Question Turn - " + player1_name;
document.getElementById("player_answer").innerHTML =
  "Answer Turn - " + player2_name;
let acualtAnswer = 0;
let total = "";
let input_box = "";
let check_button = "";
let row = "";
let num1 = "";
let num2;

function send() {
  num1 = document.querySelector("#number1").value;
  num2 = document.querySelector("#number2").value;
  acualtAnswer = parseInt(num1) * parseInt(num2);
  total = `<h4> ${num1} X ${num2} </4>`;
  input_box = "<br>Answer : <input type='text' id='input_check_box'>";
  check_button =
    "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
  row = total + input_box + check_button;
  document.querySelector("#output").innerHTML = row;
  document.querySelector("#number1").value = "";
  document.querySelector("#number2").value = "";
}
question_turn = "player1";
answer_turn = "player2";
function check() {
  get_answer = document.getElementById("input_check_box").value;
  if (get_answer == acualtAnswer) {
    if (answer_turn == "player1") {
      player1_score = player1_score + 1;
      document.getElementById("player1_score").innerHTML = player1_score;
    } else {
      player2_score = player2_score + 1;
      document.getElementById("player2_score").innerHTML = player2_score;
    }
  }
  if (question_turn == "player1") {
    question_turn = "player2";
    document.getElementById("player_question").innerHTML =
      "Question Turn - " + player2_name;
  } else {
    question_turn = "player1";
    document.getElementById("player_question").innerHTML =
      "Question Turn - " + player1_name;
  }

  if (answer_turn == "player1") {
    answer_turn = "player2";
    document.getElementById("player_answer").innerHTML =
      "Answer Turn - " + player2_name;
  } else {
    answer_turn = "player1";
    document.getElementById("player_answer").innerHTML =
      "Answer Turn - " + player1_name;
  }

  document.getElementById("output").innerHTML = "";
}
