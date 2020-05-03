// on document ready
$( document ).ready(function() {
    var forms = [$(0), $("#calculator_SO2"), $("#calculator_SSP")];
    forms.forEach(element => {
        element.hide();
    });
    var info_blocks = $(".information");
    /*info_blocks.forEach(element => {
        element.hide();
    });*/
    info_blocks.hide();

    var calculatorSelect = calculator_type.choice;
    var prev_index = 1;
    function changeOption(){
        var new_index = calculatorSelect.selectedIndex;
        //forms[prev_index].slideUp(500, "linear", function () { forms[new_index].slideDown(500); });
        forms[prev_index].fadeOut(500, "linear", function () { forms[new_index].fadeIn(500); });
        console.log(forms[new_index]);
        
        //$("#calculator_SO2").fadeToggle();
        prev_index = new_index;
    }
    calculatorSelect.addEventListener("change", changeOption);
  });

function toggle_info_box() {
    $(".information").slideToggle();
}

function getInputValue(){
    // Selecting the input element and get its value 
    var inputVal = document.form_name.input.value;
    
    // Displaying the value
    var Bi = 1096363;
    var Qri = 20.47;
    // test for SO2
    /*Bi = 1096363;
    Qri = 20.47;
    Sr = 2.85;
    n1 = 0.05;
    n2 = 0;
    Beta = 1;

    document.getElementById("out").innerHTML = "E =  " + getEmission(getKSulfurDioxideSO2(Qri, Sr, n1, n2, Beta), Qri, Bi) + "<br>k = " + getKSulfurDioxideSO2(Qri, Sr, n1, n2, Beta);
    document.getElementById("out_div").hidden = false;*/

    document.getElementById("out").innerHTML = "E =  " + getEmission(getKSuspendedSolidParticles(20.47, 0.8, 25.20, 1.5, 0.985, 0), Qri, Bi) +
                                                "<br>k = " + getKSuspendedSolidParticles(20.47, 0.8, 25.20, 1.5, 0.985, 0);
    document.getElementById("out_div").hidden = false;
}

function getEmission(c, Qri, B) {
    return Math.pow(10, -6) * c * Qri * B;
}

function getKSulfurDioxideSO2(Qri, Sr, n1, n2, Beta) {
    return (Math.pow(10, 6) / Qri) * (0.02 * Sr) * (1 - n1) * (1 - (n2 * Beta));
}

function getKSuspendedSolidParticles(Qri, a, Ar, G, n, k_emission) {
    return (Math.pow(10, 6) / Qri) * a * (Ar / (100 - G)) * (1 - n) + k_emission;
}


