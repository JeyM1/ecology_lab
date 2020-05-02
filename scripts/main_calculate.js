function getInputValue(){
    // Selecting the input element and get its value 
    var inputVal = document.form_name.input.value;
    
    // Displaying the value

    // test for SO2
    Bi = 1096363;
    Qri = 20.47;
    Sr = 2.85;
    n1 = 0.05;
    n2 = 0;
    Beta = 1;

    document.getElementById("out").innerHTML = "E =  " + getEmission(getKSulfurDioxideSO2(Qri, Sr, n1, n2, Beta), Qri, Bi) + "<br>k = " + getKSulfurDioxideSO2(Qri, Sr, n1, n2, Beta);
    document.getElementById("out_div").hidden = false;
}


function getKSulfurDioxideSO2(Qri, Sr, n1, n2, Beta) {
    k = (Math.pow(10, 6) / Qri) * (0.02 * Sr) * (1 - n1) * (1 - (n2 * Beta));
    return k;
}

function getEmission(c, Qri, B) {
    return Math.pow(10, -6) * c * Qri * B;
}