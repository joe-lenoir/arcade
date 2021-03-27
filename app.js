const board = [
  ["e", "e", "e"],
  ["e", "e", "e"],
  ["e", "e", "e"],
];

const pieces = {
  x: "X",
  o: "O",
  e: "",
};

let currentPlayer = Math.random();
if (currentPlayer > 0.5) {
  currentPlayer = "x";
} else currentPlayer = "o";

const gameBoardGrid = $("#game-board");
const activePlayer = $("#current-player");

function renderBoard() {
  const boardHTML = board
    .map((row, rowIndex) => {
      return `<div class="row">${row
        .map((piece, columnIndex) => {
          //const char = piece[1];
          console.log(piece, rowIndex, columnIndex);
          return `<div class="cell" data-row="${rowIndex}" data-column="${columnIndex}">
          ${pieces[piece]}
        </div>`;
        })
        .join("")}</div>`;
    })
    .join(""); /*.join returns the array as a string*/

  gameBoardGrid.html(boardHTML);
  renderPlayer();
}

renderBoard();

function renderPlayer() {
  const nextPlayerName = $(".player-" + currentPlayer).val();
  activePlayer.html(nextPlayerName + " it is your turn!");
}

$("#game-board").click(function (event) {
  //console.log(event.target);
  console.log($(event.target).data().row);
  const data = $(event.target).data();
  if (board[data.row][data.column] !== "e") {
    return;
  }
  board[data.row][data.column] = currentPlayer;
  if (currentPlayer === "x") {
    currentPlayer = "o";
  } else {
    currentPlayer = "x";
  }
  renderBoard();
  gameWinner();
});
renderBoard();

function gameWinner() {
  const r1C1 = board[0][0];
  const r1C2 = board[0][1];
  const r1C3 = board[0][2];
  const r2C1 = board[1][0];
  const r2C2 = board[1][1];
  const r2C3 = board[1][2];
  const r3C1 = board[2][0];
  const r3C2 = board[2][1];
  const r3C3 = board[2][2];

  const winner = "YOU WON!!! Better luck next time ";
  const loserName = $(".player-" + currentPlayer).val() + "!";
  const winMessage = winner + loserName;

  if (r1C1 === r1C2 && r1C2 === r1C3 && r1C1 !== "e") {
    $("#current-player").html(winMessage);
    $("#game-winner").html("GAME OVER");
    $("#restart-game").html(
      '<button id="button" type="button">Click Here to Play Again</button>'
    );
    $("#computer-turn").html("");
    $("#computer-opponent").html("");
  } else if (r2C1 === r2C2 && r2C2 === r2C3 && r2C1 !== "e") {
    $("#current-player").html(winMessage);
    $("#game-winner").html("GAME OVER");
    $("#restart-game").html(
      '<button id="button" type="button">Click Here to Play Again</button>'
    );
    $("#computer-turn").html("");
    $("#computer-opponent").html("");
  } else if (r3C1 === r3C2 && r3C2 === r3C3 && r3C1 !== "e") {
    $("#current-player").html(winMessage);
    $("#game-winner").html("GAME OVER");
    $("#restart-game").html(
      '<button id="button" type="button">Click Here to Play Again</button>'
    );
    $("#computer-turn").html("");
    $("#computer-opponent").html("");
  } else if (r1C1 === r2C1 && r2C1 === r3C1 && r2C1 !== "e") {
    $("#current-player").html(winMessage);
    $("#game-winner").html("GAME OVER");
    $("#restart-game").html(
      '<button id="button" type="button">Click Here to Play Again</button>'
    );
    $("#computer-turn").html("");
    $("#computer-opponent").html("");
  } else if (r1C2 === r2C2 && r2C2 === r3C2 && r1C2 !== "e") {
    $("#current-player").html(winMessage);
    $("#game-winner").html("GAME OVER");
    $("#restart-game").html(
      '<button id="button" type="button">Click Here to Play Again</button>'
    );
    $("#computer-turn").html("");
    $("#computer-opponent").html("");
  } else if (r1C3 === r2C3 && r2C3 === r3C3 && r1C3 !== "e") {
    $("#current-player").html(winMessage);
    $("#game-winner").html("GAME OVER");
    $("#restart-game").html(
      '<button id="button" type="button">Click Here to Play Again</button>'
    );
    $("#computer-turn").html("");
    $("#computer-opponent").html("");
  } else if (r1C1 === r2C2 && r2C2 === r3C3 && r1C1 !== "e") {
    $("#current-player").html(winMessage);
    $("#game-winner").html("GAME OVER");
    $("#restart-game").html(
      '<button id="button" type="button">Click Here to Play Again</button>'
    );
    $("#computer-turn").html("");
    $("#computer-opponent").html("");
  } else if (r3C1 === r2C2 && r2C2 === r1C3 && r3C1 !== "e") {
    $("#current-player").html(winMessage);
    $("#game-winner").html("GAME OVER");
    $("#restart-game").html(
      '<button id="button" type="button">Click Here to Play Again</button>'
    );
    $("#computer-turn").html("");
    $("#computer-opponent").html("");
  } else if (
    r1C1 !== "e" &&
    r1C2 !== "e" &&
    r1C3 !== "e" &&
    r2C1 !== "e" &&
    r2C2 !== "e" &&
    r2C3 !== "e" &&
    r3C1 !== "e" &&
    r3C2 !== "e" &&
    r3C3 !== "e"
  ) {
    $("#current-player").html("IT'S A TIE!");
    $("#game-winner").html("GAME OVER");
    $("#restart-game").html(
      '<button id="button" type="button">Click Here to Play Again</button>'
    );
    $("#computer-turn").html("");
    $("#computer-opponent").html("");
  } else {
    $("#game-winner").html("3 in a row wins the game");
  }
}

$("#restart-game").click(function (event) {
  board[0][0] = "e";
  board[0][1] = "e";
  board[0][2] = "e";
  board[1][0] = "e";
  board[1][1] = "e";
  board[1][2] = "e";
  board[2][0] = "e";
  board[2][1] = "e";
  board[2][2] = "e";

  $("#game-winner").html("3 in a row wins the game");
  $("#restart-game").html("");

  let currentPlayer = Math.random();
  if (currentPlayer > 0.5) {
    currentPlayer = "x";
  } else currentPlayer = "o";

  renderBoard();
});

$("#computer-opponent").click(function (event) {
  $("#game-winner").html("3 in a row wins the game");
  $("#restart-game").html("");
  $(".instructionsP2").html("VERSUS COMPUTER");
  $("input.player-o").html("");
  $("#computer-opponent").html("");
  $("#computer-turn").html("click here for the computer to take its turn");
});

$("#computer-turn").click(function (event) {
  const row1C1 = board[0][0];
  const row1C2 = board[0][1];
  const row1C3 = board[0][2];
  const row2C1 = board[1][0];
  const row2C2 = board[1][1];
  const row2C3 = board[1][2];
  const row3C1 = board[2][0];
  const row3C2 = board[2][1];
  const row3C3 = board[2][2];

  console.log("computer turn");

  if (row2C2 === "o" && row1C1 === "o" && row3C3 === "e") {
    board[2][2] = currentPlayer;
  } else if (row2C2 === "o" && row1C3 === "o" && row3C1 === "e") {
    board[2][0] = currentPlayer;
  } else if (row2C2 === "o" && row1C2 === "o" && row3C2 === "e") {
    board[2][1] = currentPlayer;
  } else if (row2C2 === "o" && row2C1 === "o" && row2C3 === "e") {
    board[1][2] = currentPlayer;
  } else if (row2C2 === "x" && row1C1 === "x" && row3C3 === "e") {
    board[2][2] = currentPlayer;
  } else if (row2C2 === "x" && row1C2 === "x" && row3C2 === "e") {
    board[2][1] = currentPlayer;
  } else if (row2C2 === "x" && row2C1 === "x" && row2C1 === "e") {
    board[1][2] = currentPlayer;
  } else if (row2C2 === "e") {
    board[1][1] = currentPlayer;
  } else if (row1C1 === "e") {
    board[0][0] = currentPlayer;
  } else if (row1C3 === "e") {
    board[0][2] = currentPlayer;
  } else if (row3C1 === "e") {
    board[2][0] = currentPlayer;
  } else if (row3C3 === "e") {
    board[2][2] = currentPlayer;
  } else if (row1C2 === "e") {
    board[0][1] = currentPlayer;
  } else if (row2C1 === "e") {
    board[1][0] = currentPlayer;
  } else if (row2C3 === "e") {
    board[1][2] = currentPlayer;
  } else if (row3C2 === "e") {
    board[2][1] = currentPlayer;
  }

  if (currentPlayer === "x") {
    currentPlayer = "o";
  } else {
    currentPlayer = "x";
  }

  $("#play-computer-again").html("refresh page to play the computer again");

  renderBoard();
  gameWinner();
});

renderBoard();
