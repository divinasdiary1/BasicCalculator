var display = document.getElementById("display").querySelector("input");

function calculation(){
    var presentValue = display.value;
    var result = eval(presentValue);
    console.log(result);
    display.value = result;
}