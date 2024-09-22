var display = document.getElementById("display").querySelector("input"); // getting input tag with display id by value 
// function to execute eval() method onclick when "=" is clicked
function calculation(){
    var presentValue = display.value;
    var result = eval(presentValue);
    console.log(result);
    display.value = result;
}