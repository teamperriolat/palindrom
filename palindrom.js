//Variable
let oChampPalindrome = document.querySelector("#champPalindromeid");  //saisie du palindrome
let oCommentaire = document.querySelector("#commentaire"); //commentaire
oChampPalindrome.addEventListener("input", verifPalindrome); //éxecute la fonction 
oCommentaire.innerText = "Veuillez saisir un palindrome"

//fonction pour supprimer tous les caractères de la chaine
function supprimeCaracSpeciaux(chaine) {

  chaine = chaine.replace(/ /g, "")

  chaine = chaine.replace(":", "")

  chaine = chaine.replace(";", "")

  chaine = chaine.replace(",", "")

  chaine = chaine.replace(".", "")

  chaine = chaine.replace("'", "")

  chaine = chaine.replace(/’/g, "")

  chaine = chaine.replace(/,/g, "")

  chaine = chaine.replace(/[éèêë]/g, "e")

  chaine = chaine.replace(/[àâä]/g, "a")

  chaine = chaine.replace(/[ç]/g, "c")

  chaine = chaine.replace(/[ôö]/g, "o")

  chaine = chaine.replace(/[ûü]/g, "u")

  chaine = chaine.replace(/[ïî]/g, "i")

  return chaine
}

function inversionChaine(chaine) {
  chaineReverse = ""  //toutes les lettre a l'enver
  for (let i = chaine.length - 1; i >= 0; i--) { //boucle for qui parcour toute la chaine à l'envers
    chaineReverse += chaine[i]  //on ajoute la lettre d'indice i de chaine à "chaineReverse"
  }
  return chaineReverse
}

function verifPalindrome() {
  let phrase = oChampPalindrome.value //saisi de l'utilisateur 
  phrase = supprimeCaracSpeciaux(phrase) //suppression des caractères de la phrase saisie
  let phraseInversée = inversionChaine(phrase)  //met dans la variable "phraseInversée" la phrase saisie par l'utilisateur mais en inversée

  if (phrase === "" || phrase.length == 1 || (phrase === parseInt(phrase) || parseFloat(phrase))) {  //si la phrase saisie est vide, ou ne contient qu'une lettre, ou est un nombre
    oCommentaire.innerText = "Veuillez saisir un palindrome" //on commente "Veuillez saisir un Palindrome"
    oChampPalindrome.style = "background-color:White" //on change le fond du champ de saisie en blanc
  }

  else if (phrase.toLowerCase() === phraseInversée.toLowerCase()) { //sinon, si la phrase saisi par l'utilisateur (converti en minuscule grace a .toLowercase()) est égale à la même phrase mais en inversée
    oCommentaire.innerText = "Cette phrase est un palindrome !" //commenter "Cette phrase est un palindrom"
    oChampPalindrome.style = "background-color:Green" //changer le fond du champ de saisie en vert
  }

  else { //sinon
    oCommentaire.innerText = "Cette phrase n'est pas un palindrome !"
    oChampPalindrome.style = "background-color:red"
  }

}