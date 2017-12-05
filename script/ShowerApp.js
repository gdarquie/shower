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
      var content = data.content;
      window.ShowerApp.loadIO(content);
    });
  },

  validateContent: function(){
    console.log("Validation du contenu");
    //je vérifie que le format est bien le format attendu
    //j'appelle une fonction de vérification que j'applique à mon objet
  },

//comment appeler l'objet FragmentIO et ses méthodes ici?
  loadIO: function(data){
    console.log("data.contenu = "+data.contenu);
    //s'il s'agit d'un tableau je r&cupère seulemeent le premier
    //Todo

    //serializer
    // Io = FragmentIO(data.text);
    // console.log(FragmentIO);
    this.show(data);
    //lancement du module principale


  // this.FragmentIO = {
  //   var title = this.FragmentIO.title;
},

  show: function(data){
    $(".shower_wait").hide();
    $('body').append('<div class="shower"></div>');
    $(".shower").hide();
    var fragment = new FragmentIO(data);
    $('.shower').append(fragment);
    $('.shower').fadeIn(1000);
  },

  serialize: function(data){
    var myFragment = FragmentIO.initialize(data);
    console.log(myFragment.contenu+"serialize");
  }

}//fin de showerApp

var FragmentIO = {};

FragmentIO.initialize = function($data){
    this.titre = $data.titre;
    this.contenu = $data.contenu;

    return this;
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

var uri = "http://localhost/play/texte/essai.json";

$(window).ready(function() {
  ShowerApp.start(uri);
});

//ShowerApp est une fonction qui sert à afficher les contenus d'une page dynamiquement.
// Elle récupère une adresse et va charger le contenu de cette adresse. Ce contenu est li& uen uri.
// Ensuite elle récupère ce contenu et vérifie qu'il s'agit du bon format
// Si c'est bien le cas, elle charge ce contenu avec les animations prédéfinies
