//IIFE
module.exports = function (e='jmorneo1@'){
    let email =e;
    var password ='ddgsgs'

    return{
        email: email,
        consoleme: function consoleme(){
            console.log('Usuari: '+ email)
        }
    }
}



//m'ha funcionat
// var user= function (e = 'jmoreno1@iesebre.com') {
//     let email = e;
//     let password ='12345'
//
//     function consoleme() {
//         console.log('Usuari:' + email)
//     }
//
//     function setEmail(){
//
//     }
//     return{
//         consoleme:consoleme,
//         email: email
//     }
//
// }
// module.exports = {
//     user: user,
// }