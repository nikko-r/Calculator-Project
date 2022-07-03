const bMenu = document.querySelectorAll("#b-menu")
const bPi = document.querySelector("#b-pi")
const bRoot = document.querySelector("#b-root")
const bTopower = document.querySelector("#b-topower")
const bClear = document.querySelector("#b-clear")
    //const bBrackets = document.querySelector("#b-ob #b-cb")
const bNegative = document.querySelector("#b-negative")
const bPercent = document.querySelector("#b-percent")
const bNumbers = document.querySelectorAll(".numpad__num")
const bOperators = document.querySelectorAll(".numpad__op")
const bDot = document.querySelector("#b-dot")
const bDel = document.querySelector("#b-del")
const bEquals = document.querySelector("#b-equals")


const outputScreen = document.querySelector("#output-screen")
const inputScreen = document.querySelector("#input-screen")

let valueNum1 = ""
let valueNum2 = ""
let valueOp = ""

//bNumbers.forEach(bNumbers.addEventListener("click", ))

console.dir(bNumbers)




const calculateTotal = (num1, operator, num2) => {
    if (operator == "+") {
        num1 = num1 + num2
    } else if (operator == "-") {
        num1 = num1 - num2
    } else if (operator == "X") {
        num1 = num1 * num2
    } else if (operator == "/") {
        num1 = num1 / num2
    }
    valueNum1 = num1
    inputScreen.value == ""
    outputScreen.value == `${valueNum1}`

    valueNum2 = ""
    valueOp = ""
}

getShepardsMessage("night", "delight")


/////////////////////// HANDLES EVERY NUMBER KEY PRESS //////////

bNumbers.forEach((numberButton) => { //for each element in the class
    console.dir(numberButton) //send the element info in console
    numberButton.addEventListener("click", (event) => {
        console.log("Clicked")
        console.log(event.target.innerHTML)
        inputScreen.value += event.target.innerHTML

    })
})

/////////////////////// HANDLES EVERY OPERATOR KEY PRESS //////////

bOperators.forEach((operatorButton) => { //for each element in the class
    //console.dir(operatorButton) //send the element info in console
    operatorButton.addEventListener("click", (event) => {
        if (inputScreen.value != "") {
            valueNum1 = inputScreen.value
            valueOp = event.target.innerHTML
                //inputScreen.value += event.target.innerHTML
            outputScreen.value = `${inputScreen.value} ${event.target.innerHTML}`
            inputScreen.value = ""
        } else {
            alert("no number to work with")
        }
    })
})

//const letVar1EqualValue1 = 

//////////////////////////////////////////// NEGATIVE NUMBER
const handleNegativeNum = (event) => {
    if (inputScreen.value.startsWith("-")) {
        inputScreen.value = inputScreen.value.substring(1) //Substring removes characters at the start of a string
    } else {
        inputScreen.value = `-${inputScreen.value}`
    }
}
bNegative.addEventListener("click", handleNegativeNum)

//////////////////////////////////////////// CLEAR SCREEN
const handleClearScreen = (event) => {
    outputScreen.value = ""
    inputScreen.value = ""
    valueNum1 = ""
    valueNum2 = ""
    valueOp = ""
}
bClear.addEventListener("click", handleClearScreen)

///////////////////////////////////////////// DELETE LAST CHARACTER
const handleDelChar = (event) => {
    inputScreen.value = inputScreen.value.slice(0, -1)
}
bDel.addEventListener("click", handleDelChar)

///////////////////////////////////////////// ADD A DOT

const handleDotChar = (event) => {
    if (inputScreen.value.includes(".")) {
        alert("Number is already a decimal.")
    } else {
        inputScreen.value += "."
    }
}
bDot.addEventListener("click", handleDotChar)

///////////////////////////////////////////// ADD A PERCENT

const handlePercentChar = (event) => {
    if (inputScreen.value != "") {
        inputScreen.value += "%"
    } else {
        alert("Cannot have a % at the start!")
    }
}
bPercent.addEventListener("click", handlePercentChar)

/////////////////////////////////////////////




//get The contents of innerhtml and paste into text box

//When theres a click on a button 
//Found what the value was 
//Logged it to the console
// TODO: 
//1 get the number the user just pressed and dioplay on the screem 
//If they press another number also get it to add to the end of the calc display 
//Wehn they press either + - / or * then they have finished with the first number 
//Save the first number in a variable 
//Save the operator 
//Then allow user to start writing next number 
//Wehn they press =, save the second number 
//Do the calc based on num1 and num2 and operator 
//THen show to calc display 







// bMenu.addEventListener("click", menuBClick)
// bPi.addEventListener("click", piBClick)
// bRoot.addEventListener("click", rootBClick)
// bTopower.addEventListener("click", topowerBClick)
// bClear.addEventListener("click", clearBClick)
// bOb.addEventListener("click", obBClick)
// bOc.addEventListener("click", cbBClick)
// bPercent.addEventListener("click", percentBClick)
// bDivide.addEventListener("click", divideBClick)
// b7.addEventListener("click", 7 BClick)
// b8.addEventListener("click", 8 BClick)
// b9.addEventListener("click", 9 BClick)
// bTimes.addEventListener("click", timesBClick)
// b4.addEventListener("click", 4 BClick)
// b5.addEventListener("click", 5 BClick)
// b6.addEventListener("click", 6 BClick)
// bMinus.addEventListener("click", minusBClick)
// b1.addEventListener("click", 1 BClick)
// b2.addEventListener("click", 2 BClick)
// b3.addEventListener("click", 3 BClick)
// bPlus.addEventListener("click", plusBClick)
// b0.addEventListener("click", 0B Click)
// bDot.addEventListener("click", dotBClick)
// bDel.addEventListener("click", delBClick)
// bEquals.addEventListener("click", equalsBClick)


// const 0B Click = (event) => {

// }