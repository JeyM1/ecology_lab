function getInputValue(){
    // Selecting the input element and get its value 
    var inputVal = document.form_name.input.value;
    
    // Displaying the value
    document.getElementById("out").innerHTML = "Hello " + inputVal;
    document.getElementById("out_div").hidden = false;
}