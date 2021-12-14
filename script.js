// Starts game on X's or O's turn
function startGame(){
    for (var i=1;i<=9;i=i+1){
        resetBoard(i);
    }
    document.turn="X";
    if (Math.random()<0.5){
        document.turn="O";
    }
    document.winner=null;
    setMessage(document.turn+" get's to start.");
}

// Displays who the winner is
function setMessage(msg){
    document.getElementById("message").innerText=msg;
}

// Changes the turn
function nextMove(block){
    if (document.winner !=null){
        setMessage(document.winner+" already won the game.");
    }
    else if(block.innerText==""){
        block.innerText=document.turn;
        switchTurn();
    }
    else{
        setMessage("That square is already used.");
    }
}

// Determines who's turn it is and displays who's turn it is
function switchTurn(){
    if (checkForWinner(document.turn)){
        setMessage("Congratulations, "+document.turn+" You Win!");
        document.winner=document.turn;
    }
    else if (document.turn=="X"){
        document.turn="O";
        setMessage("It's " +document.turn+ "'s turn!");
    }
    else{
        document.turn="X";
        setMessage("It's " +document.turn+ "'s turn!");
    }
}

// Checks on each move whether someone has won or not
function checkRow(a,b,c,move){
    var result=false;
    if (getBox(a)==move && getBox(b)==move && getBox(c)==move){
        result=true;
    }
    return result;
}

// Checks who exactly won and how
function checkForWinner(move){
    var result=false;
    if (checkRow(1,2,3,move)||
        checkRow(4,5,6,move)||
        checkRow(7,8,9,move)||
        checkRow(1,4,7,move)||
        checkRow(2,5,8,move)||
        checkRow(3,6,9,move)||
        checkRow(1,5,9,move)||
        checkRow(3,5,7,move)){
            result=true;
        }
        return result;
}

// Gets each boxes value
function getBox(number){
    return document.getElementById("block"+number).innerText;
}

// Resets board
function resetBoard(number){
    document.getElementById("block"+number).innerText=" ";
}

