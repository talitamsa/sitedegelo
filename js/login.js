var btnSignin = document.querySelector("#signin");
var btnSignup = document.querySelector("#signup");
var body = document.querySelector("body");
var cpf = document.getElementById("cpf")
var dta = document.getElementById("dtaNascimento")

btnSignin.addEventListener("click", function (){
    body.className = "sign-in-js";
})

btnSignup.addEventListener("click", function (){
    body.className= "sign-up-js";
})

cpf.addEventListener('keyup', (event) => {
    if (isNaN(cpf.value)) {
        cpf.value = cpf.value.substring(0, (cpf.value.length - 1));
    }
    if (cpf.value.length >= 11) {
        cpf.value = cpf.value.substring(0, 11);
    }
});

// dta.addEventListener('keyup', (event) => {
//     if (isNaN(dta.value)) {
//         dta.value = dta.value.substring(0, (dta.value.length - 1));
//     }
//     if (dta.value.length >= 8) {
//         dta.value = dta.value.substring(0, 8);
//     }
// });

