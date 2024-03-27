const titre = document.getElementById("tit");
let button = document.getElementById("btn");
let prenom = document.getElementById("Prénom");
let langage = document.getElementById("Langage");
let storyOne = document.getElementById("story");
let vInf = document.getElementById("VerbeInfi");
let information = document.getElementById("infos");
let emotion = document.getElementById("Emot");

//  change color title h1
// titre.style.color = "red";

//  change title with button btn and event
button.addEventListener("click", myClic);

function myClic() {
  titre.style.background = "blue";
  titre.style.textAlign = "center";
  titre.style.color = "white";
  titre.style.padding = "10px";

  let wordName = "<span class='remplacement' >" + prenom.value + "</span>";
  let wordLangage = "<span class='remplacement' >" + langage.value + "</span>";
  let wordVerbeInf = "<span class='remplacement' >" + vInf.value + "</span>";
  let wordInfo = "<span class='remplacement' >" + information.value + "</span>";
  let wordEmot = "<span class='remplacement' >" + emotion.value + "</span>";

  let storyOfDay =
    " <h3> Remplissez les champs et modifier le texte   </h3>" +
    "Je m'appelle " +
    wordName +
    " " +
    " J'apprends le langage " +
    "  " +
    wordLangage +
    ".";
  (" et je trouve cela cool . ");
  storyOfDay +=
    "Le plus important au départ est de " +
    "  " +
    wordVerbeInf +
    " " +
    "tous les jours .";
  storyOfDay +=
    "Le HTML est un langage de formatage , pour indique le text , le CSS le décore ." +
    " " +
    "Si tu souhaites le rendre dynamique , il faut passer par le Java Script ." +
    "Tu peux regarder des " +
    "  " +
    wordInfo +
    " " +
    "et apprendre au fur et à mesure , prends le temps de bien tester " +
    " .";
  storyOfDay +=
    "Tu t'amuses  à faire des effets, des animations et tu progresses ." +
    "  " +
    "Pour réussir , il faut rester détendu et tu peux debugger les erreurs <em>avec le console.log()</em> ." +
    "Patience donc et " +
    "  " +
    wordEmot +
    " " +
    "" +
    "sont essentiels pour apprendre et comprendre.";
  story +=
    "Bon courage à toi et surtout n'abandonne pas si tu trouves que c'est un peu compliqué, au départ c'est normal comme tout nouveau champ d'apprentissage .";

  //   let story =
  //     "<span class='storytest'" > +"Je suis unTest" + adj + " " + "</span>";

  storyOne.innerHTML = storyOfDay;
}
