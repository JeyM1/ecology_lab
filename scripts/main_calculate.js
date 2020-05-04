var output_block = $(".output");

// on document ready
$( document ).ready(function() {
    $(".information").hide();

    var forms = [$(0), $("#calculator_SO2"), $("#calculator_SSP")];
    forms.forEach(element => {
        element.hide();
    });
    
    var calculatorSelect = calculator_type.choice;
    var prev_index = 1;
    function changeOption(){
        var new_index = calculatorSelect.selectedIndex;
        forms[prev_index].fadeOut(500, "linear", function () { forms[new_index].fadeIn(500); });
        prev_index = new_index;
    }
    calculatorSelect.addEventListener("change", changeOption);
  });

function toggle_info_box() {
    $(".information").slideToggle();
}

function parseSO2() {
    var form = document.form_SO2;
    var B_i = form.input_B_i.value;
    var Q = form.input_Q.value;
    var k = getKSulfurDioxide(Q, form.input_S.value, form.input_n1.value, 
                                form.input_n2.value, form.input_B.value);
    var E = getEmission(k, Q, B_i);

    output_block.html("<p>E = " + E + "</p><p>k = " + k + "</p>");
}

function parseSSP() {
    var form = document.form_SSP;
    var B_i = form.input_B_i.value;
    var Q = form.input_Q.value;
    var k = getKSulfurDioxide(Q, form.input_a.value, form.input_Ar.value, 
                                form.input_g.value, form.input_n.value, form.input_k.value);
    var E = getEmission(k, Q, B_i);

    output_block.html("<p>E = " + E + "</p><p>k = " + k + "</p>");
}

function getEmission(c, Qri, B) {
    return Math.pow(10, -6) * c * Qri * B;
}

function getKSulfurDioxide(Qri, Sr, n1, n2, Beta) {
    return (Math.pow(10, 6) / Qri) * (0.02 * Sr) * (1 - n1) * (1 - (n2 * Beta));
}

function getKSuspendedSolidParticles(Qri, a, Ar, G, n, k_emission) {
    return (Math.pow(10, 6) / Qri) * a * (Ar / (100 - G)) * (1 - n) + k_emission;
}


