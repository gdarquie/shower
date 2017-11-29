(function(window, $){

window.ShowerApp = {

  init: function(){
    console.log('Shower App lancée');
    //traitement = chargement des éléments de la page
    var content = this.getContentByUri('/texte/essai.json');
  },

  getContentByUri: function(uri, data){
    console.log("Chargement du contenu par l'uri ="+uri);

    //chargement asyncrhone du contenu d'un fragment
    $.ajax({
      url: uri,
      data: data,
      dataType: "json"
    })
    .done(function( data ) {
      var content = data.content;
      window.ShowerApp.loadIO(content.title+content.text);
    });
  },

  validateContent: function(){
    console.log("Validation du contenu");
  },

  loadIO: function(io){
    console.log('Load IO');
    $('body').html(io);
    //lancement du module principale
  }
}
// showerApp.fragments= [];
//les fragments ont-ils déj été lus ou joués
//fragment : title, contenu, options


// console.log(window);
})(window, jQuery);

$(window).ready(function() {
  ShowerApp.init();
});


//ShowerApp est une fonction qui sert à afficher les contenus d'une page dynamiquement.
// Elle récupère une adresse et va charger le contenu de cette adresse. Ce contenu est li& uen uri.
// Ensuite elle récupère ce contenu et vérifie qu'il s'agit du bon format
// Si c'est bien le cas, elle charge ce contenu avec les animations prédéfinies
