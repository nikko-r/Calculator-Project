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




const calculateTotal = () => {
    // valueNum1.replaceAll('%', `/100`)
    // valueNum2.replaceAll('%', `/100`)
    console.log(`logged ${valueNum1}`)
    console.log(`logged ${valueNum2}`)
    valueNum1 = parseFloat(valueNum1) //Converts both values from strings to numbers
    valueNum2 = parseFloat(valueNum2)
    if (valueOp == "+") { // calculating the values
        valueNum1 = valueNum1 + valueNum2
    } else if (valueOp == "-") {
        valueNum1 = valueNum1 - valueNum2
    } else if (valueOp == "X") {
        valueNum1 = valueNum1 * valueNum2
    } else if (valueOp == "/") {
        valueNum1 = valueNum1 / valueNum2
    }
    outputScreen.value = "" //Resetting the top screen
    inputScreen.value = `${valueNum1}` //setting the bottom screen to the total value which is saved as the first value for working with the next number

    valueNum2 = "" //resetting the second value as that is the new value the user will input
    valueOp = "" //resetting the operator for the next calculation
}

function containsNumber(str) { //function to check if a string has a number
    return /\d/.test(str);
}

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
        if (containsNumber(inputScreen.value) == false) {
            return alert("There is no number to work with!")
        }
        if (inputScreen.value != "") { //if the input sceen has information on it
            if (valueNum1 == "") { //if the first value(var) is not set then we need to work with setting the first value before the second value
                valueNum1 = inputScreen.value //set the first value(var) to the number on the bottom(input) screen
                valueOp = event.target.innerHTML //setting the operator variable to the text contained in the html button
                    //inputScreen.value += event.target.innerHTML
                outputScreen.value = `${inputScreen.value} ${event.target.innerHTML}` //set the top screen (output) to the number that was in the bottom screen and include the operator. This screen is for visuals only and not for grabbing data
                inputScreen.value = "" //reset the bottom screen to display nothing
                    //when a user wants to calculate continuosly and doesnt press equals but presses a new operator
            } else { //if the first value is set
                valueNum2 = inputScreen.value //set the second value(var) to the contents of the bottom screen(input)
                calculateTotal() //calculate the results
                outputScreen.value = `${inputScreen.value} ${event.target.innerHTML}` //set the top screen(output) to the NEW calculated first value(var) and include the new operator
                valueOp = event.target.innerHTML //set the operator value(var) to the text contained in the html button
                inputScreen.value = "" //Reset the bottom screen(input) for the next value to calculate
            }
        } else { //if the input screen has no information on it
            alert("no number to work with")
        }
    })
})

//////////////////////////////////////////// EQUALS BUTTON
const handleSumTotal = (event) => {
    if (containsNumber(inputScreen.value) == false) {
        return alert("There is no number to work with!")
    }
    valueNum2 = inputScreen.value //set the second value(var) to the contents of the bottom screen(input)
    calculateTotal() //calculate the results
    valueNum1 = ""
    valueNum2 = ""
    valueOp = ""

}
bEquals.addEventListener("click", handleSumTotal)

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



document.addEventListener('keypress', (event) => {
        var name = event.key;
        var code = event.code;
        if (name === 'c') {
            // Do nothing.
            handleClearScreen()
        }
    })
    // if (event.ctrlKey) {
    //   alert(`Combination of ctrlKey + ${name} \n Key code Value: ${code}`);
    // } else {
    //   alert(`Key pressed ${name} \n Key code Value: ${code}`);
    // }
    //   }, false);