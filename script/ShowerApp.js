(function(window, $){

window.ShowerApp = {

  start: function(uri){
    console.log("Lancement de Shower = "+uri);
    this.init(uri);
  },

  init: function(uri){
    console.log('Initialisation de shower');
    $('body').append('<div class="shower_wait"></div>');
    $('.shower_wait').html('<div class="loader"></div>');
    var content = this.getContentByUri(uri);
  },

  getContentByUri: function(uri, data){
    console.log("Chargement du contenu par l'uri = "+uri);

    //chargement asyncrhone du contenu d'un fragment
    $.ajax({
      url: uri,
      data: data,
      dataType: "json"
    })
    .done(function( data ) {
      console.log("Ajax en cours");
      var data = data;
      if(!window.ShowerApp.validateContent(data)){
        return false;
      }
      content = window.ShowerApp.serialize(data);
      window.ShowerApp.show(data);
    });
  },

  validateContent: function(data){
    console.log("Validation du contenu");
    //je vérifie que le format est bien le format attendu
    //j'appelle une fonction de vérification que j'applique à mon objet
    return true;
  },

  serialize: function(data){
    //console.log("Formatage du texte "+data);
    console.log(typeof(data));
    if(data.length > 0){
      console.log(data.length);
      var fragments = [];
      for(i=0 ; i <data.length ; i++){
        fragments[i] = FragmentIO.constructor(data[i]);
        console.log(fragments[i]);
        return fragments;
      }
    }
    else{
      return data.content;
    }
  },

//comment appeler l'objet FragmentIO et ses méthodes ici?

  show: function(data){
    $('body').append('<div class="shower"></div>');
    var container = "<div class='fragment'><div class='titre'><h1></h1></div><div class='contenu'><p></p></div></div>";
    $(".shower_wait").hide();
    $('.shower').html(container);
    $(".shower").hide();

    var fragments = this.serialize(data);
    //console.log(fragments);
    $('.shower .fragment .titre h1').html(fragments[0].titre);
    $('.shower .fragment .contenu p').html(fragments[0].contenu);
    $('.shower').fadeIn(1000);
  },

}//fin de showerApp

var FragmentIO = {
  constructor : function($data){
      this.titre = $data.titre;
      this.contenu = $data.contenu;

      return this;
  }
};


// FragmentIO.prototype.hydrate = function(){
//   console.log("Hydratation d'un fragment");
// }

// /**
//    * A "private" object
//    */
//   var Helper = function ($wrapper) {
//       this.$wrapper = $wrapper;
//   };
//   Helper.prototype.calculateTotalWeight = function() {
//       var totalWeight = 0;
//       this.$wrapper.find('tbody tr').each(function () {
//           totalWeight += $(this).data('weight');
//       });
//       return totalWeight;
//   };

//
// window.ShowerApp.FragmentIO = {
//   title: "title",
//   content: "contenu",
//   params : "tableau de params"




// showerApp.fragments= [];
//les fragments ont-ils déj été lus ou joués
//fragment : title, contenu, options


// console.log(window);
})(window, jQuery);

// var uri = "http://localhost/play/texte/essai.json";
var uri = "http://localhost/play/texte/interlivre_api.json"

$(window).ready(function() {
  ShowerApp.start(uri);
});

//ShowerApp est une fonction qui sert à afficher les contenus d'une page dynamiquement.
// Elle récupère une adresse et va charger le contenu de cette adresse. Ce contenu est li& uen uri.
// Ensuite elle récupère ce contenu et vérifie qu'il s'agit du bon format
// Si c'est bien le cas, elle charge ce contenu avec les animations prédéfinies
