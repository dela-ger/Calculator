//manipulating the history value
function getHistory(){
    return document.getElementById("history-value").innerText;
}
//function to print the history value
function printHistory(num){
    document.getElementById("history-value").innerText=num;
}
// this function manipulates the output value
function getOutput(){
    return document.getElementById("output-value").innerText;
}
//this function prints out the value in the output box
function printOutput(num){
    if(num==""){
    document.getElementById("output-value").innerText=num; //getFormatted helps us to format the type of number we have whether with comma or not
    }else {
        document.getElementById("output-value").innerText=getFormattedNumber(num);
    }
}
//we create a function to put the comma separating values
function getFormattedNumber(num){
    if (num=="-"){
        return "";
    }   //this statement is present because the CE gives NaN when clearin a -ve number
    let n = Number(num);
    let value = n.toLocaleString("en");//this puts it into en format therefore bring out the commas
    return value;
}
//this function replaces the comma with empty spaces so that we can manipulate the number
function reverseNumberFormat(num){
    return Number(num.replace(/,/g,""));
    
}

//this part allows us to click the operators
let operator = document.getElementsByClassName("operator");

for(let i=0; i < operator.length; i++){//this condition allows us to loop through all the operator classes
    operator[i].addEventListener("click",function(){ //operator[i] means that for each position add the required method
        if (this.id=="clear"){
            printHistory("");
            printOutput("");
        }
        else if (this.id=="backspace"){
            let output = reverseNumberFormat(getOutput()).toString();//this converts the number to a stirng
            if (output){//if the output has a value
                output = output.substr(0,output.length-1);// this removes the last number
                printOutput(output);
            }
        }
        else{
            let output = getOutput();
            let history = getHistory();
            if (output !=""){
                output = reverseNumberFormat(output);
                history = history + output;
                if (this.id=="="){
                    let result = eval(history)
                    printOutput(result);
                    printHistory("");
                }
                else{

                    history=history+this.id;
                    printHistory(history);
                    printOutput("");
                }
            }
        }

    });
}
//this part allows us to click the numbers the same as the operators
let number = document.getElementsByClassName("number");

for(let i=0; i < number.length; i++){
    number[i].addEventListener("click",function(){
        let output = reverseNumberFormat(getOutput());
        if (output!= NaN){
            output = output + this.id;
            printOutput(output);
        }
    });
}


