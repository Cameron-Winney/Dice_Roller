let diceArray = []

function reset() {
    diceArray = []
    document.getElementById("rollDisplay").innerHTML = ""
    document.getElementById("dieContainer").innerHTML = ""
}

function rollDice() {
    let numDice = document.getElementById("diceNum").value;
    var container = document.getElementById("dieContainer");
        container.innerHTML = ""
        diceArray = []
    for (var i = 0; i < numDice; i++) {
        var diceRoll = Math.floor(Math.random() * 6) + 1;
        diceArray.push(diceRoll)
        console.log(diceArray)
      }
      let position2 = 0
      let sum = 0
        while(position2 < diceArray.length) {
            sum += diceArray[position2]
            position2 += 1
            console.log(sum)
        }
        document.getElementById("rollDisplay").innerHTML = "your total was " + sum

      diceNum.value = "";
    }

    function dispRoll() {
        let position = 0
        while(position < diceArray.length) {
            document.getElementById("dieContainer").innerHTML += '<li>' + diceArray[position] + '</li>'
            position += 1
        }
    }