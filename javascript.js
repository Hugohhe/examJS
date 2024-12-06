//tableau majuscule
let tableaumaj = ["A","Z","E","R","T","Y","U","I","O","P","Q","S","D","F","G","H","J","K","L","M","W","X","C","V","B","N"];


//tableau minuscule
 let password = document.getElementById('genererPassword');
 let tableaumin = ["a","z","e","r","t","y","u","i","o","p","q","s","d","f","g","h","j","k","l","m","w","x","c","v","b","n"];


//tableau numero
 let tableaunumero = [1,2,3,4,5,6,7,8,9,0];


//tableau symbole
 let tableausymbole=["$","%","^","&","!","@","#",":",";","'",",",".",">","/","*","-",",","|","?","~","_","=","+"];


function generateur(){

 }


// concat mes 4 tableaux
let tableauconcatener = tableaumaj.concat(tableaumin,tableaunumero,tableausymbole);



// récupère le formulaire et le champ d'e-mail, champ mot passe et repeter motpasse
let email = document.getElementById("mail");
let motpasse = document.getElementById("password");
let repmotpasse = document.getElementById("password2");

// on vérifie la validité du champ.
email.addEventListener(
    "input",
    function(event){
        
        if (email.validity.valid){

        }
    }
);

// on vérifie la validité du champ.
motpasse.addEventListener(
    "input",
    function(event){
        
        if (motpasse.validity.valid){

        }
    }
);

// on vérifie la validité du champ.
repmotpasse.addEventListener(
    "input",
    function(event){
        
        if (repmotpasse.validity.valid){

        }
    }
);