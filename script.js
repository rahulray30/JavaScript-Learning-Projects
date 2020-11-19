let imageDiv = document.getElementById("imageDiv");
var userNumber; // Just to store the variable for comparison with bot
var bodyId = document.getElementById("bodyId");
function abc(userinput) {
  var userImage = userinput.src;
  console.log(userinput.id);

  if (userinput.id == "rock") {
    userNumber = 0;
  } else if (userinput.id == "paper") {
    userNumber = 1;
  } else if (userinput.id == "scissors") {
    userNumber = 2;
  }

  console.log(userNumber);

  while (imageDiv.firstChild) {
    imageDiv.removeChild(imageDiv.firstChild);
  }
  var userIm = document.createElement("img");
  userIm.src = userImage;
  imageDiv.appendChild(userIm);

  var bot = Math.random() * 10;
  var botValue = Math.floor(bot / 4);
  console.log(botValue);

  var botIm = document.createElement("img");
  switch (botValue) {
    case 0:
      botIm.src = "rock.jpg";
      break;
    case 1:
      botIm.src = "paper.png";
      break;
    case 2:
      botIm.src = "scissors.jpg";
      break;
  }

  imageDiv.appendChild(botIm);
  botIm.id = "botImgId";

  var resultTextValue = null;

  if (userNumber == 0) {
    if (botValue == 0) {
      resultTextValue = "Its a tie!";
    } else if (botValue == 1) {
      resultTextValue = "You lost!";
    } else if (botValue == 2) {
      resultTextValue = "You won!";
    }
  } else if (userNumber == 1) {
    if (botValue == 0) {
      resultTextValue = "You won!";
    } else if (botValue == 1) {
      resultTextValue = "Its a tie!";
    } else if (botValue == 2) {
      resultTextValue = "You lost!";
    }
  } else if (userNumber == 2) {
    if (botValue == 0) {
      resultTextValue = "You lost!";
    } else if (botValue == 1) {
      resultTextValue = "You won!";
    } else if (botValue == 2) {
      resultTextValue = "Its a tie!";
    }
  }

  let resultPara = document.createElement("h2");
  resultPara.id = "h2id";
  resultPara.innerHTML = resultTextValue;
  imageDiv.insertBefore(resultPara, imageDiv.firstChild.nextSibling);
  

  var br = document.createElement("br");
  bodyId.appendChild(br);


  let reloadBtn = document.createElement("button");
  reloadBtn.id = "playAgain";
  reloadBtn.innerHTML = "Play Again";
  bodyId.appendChild(reloadBtn);

  reloadBtn.onclick = function(){
      location.reload();
  }

}
