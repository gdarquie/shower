$('body').html('hello');

var ShowerApp = new Object;

ShowerApp.init = function(){
  console.log('Shower App lancée');
  //traitement = chargement des éléments de la page
  this.getContentByUri('/texte/essai.json');

}

ShowerApp.getContentByUri = function(uri){
  console.log("Chargement du contenu par l'uri ="+uri);
  //charger le contenu d'uri
  var content = "Chargement du contenu";
  return content;

}

ShowerApp.validateContent = function(){
  console.log("Validation du contenu");
}

ShowerApp.loadIO = function($io){
  //lancement du module principale
}

ShowerApp.init();

showerApp.fragments= [];
//les fragments ont-ils déj été lus ou joués
//fragment : title, contenu, options


// console.log(window);

$(window).load(function(){
  console.log('hello');
});

//ShowerApp est une fonction qui sert à afficher les contenus d'une page dynamiquement.
// Elle récupère une adresse et va charger le contenu de cette adresse. Ce contenu est li& uen uri.
// Ensuite elle récupère ce contenu et vérifie qu'il s'agit du bon format
// Si c'est bien le cas, elle charge ce contenu avec les animations prédéfinies
