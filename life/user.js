//IIFE
var user= (function (e = 'jmoreno1@iesebre.com') {
    let email = e;
    let password ='12345'

    function consoleme() {
        console.log('Usuari:' + email)
    }

    function setEmail(){

    }
    return{
        consoleme:consoleme,
        email: email
    }

})()