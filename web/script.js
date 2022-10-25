// This function clear all the values
function clearScreen() {
    document.getElementById("result").value = "";
}
 
// This function display values
function display(value) {
    if(value=="+" || value =="-" || value =="*" || value =="/")
        document.getElementById("result").value += value;
    else{
        var newValue = document.getElementById("result").value
        var output = newValue.split(/[+-/\\*]/)
        newValue = output.length>1 ?output[output.length-1]:output[0]
        newValue = newValue + value
        if(newValue <= 9999.99 && newValue >= -9999.99 )
            document.getElementById("result").value += value;
    }
}
 
// This function evaluates the expression and returns result
function calculate() {
    var p = document.getElementById("result").value;
    var q = Math.round((eval(p) + Number.EPSILON) * 100) / 100;
    if(q <= 9999.99 && q >= -9999.99 )
        document.getElementById("result").value = q;
    else
        document.getElementById("result").value = "OUTPUT OUT OF LIMIT";
}