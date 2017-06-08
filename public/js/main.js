require.config({
    urlArgs: 'bust=' + (new Date()).getTime(), // Mode developpement => empêche require.js de mettre en cache les scripts
    baseUrl: '', // La racine de tous les scripts à charger
    config: {},
    paths: {
        'jquery':       'js/libs/jquery.min',
        'bootstrap':    'js/libs/bootstrap.min'
    },
    shim: { // Encapsulation des bibliothèques externes et gestion des dépendances
        jquery: {
            exports: '$'
        },
        bootstrap : {
            deps: ['jquery'],
            exports:'$.fn.popover'
        }
    }
});

//*
require(['js/ApiModel', 'js/ConfigurationController', 'js/InteractionController', 'js/VisualisationController', 'bootstrap'],
function(ApiModel, ConfigurationController, InteractionController, VisualisationController, require) {
    console.log('require loaded');
    var api = new ApiModel();
    var configuration = new ConfigurationController('#configuration', api);
    var interaction = new InteractionController('#interaction', api);
    var visualisation = new VisualisationController('#visualisation', api);
    
    interaction.on('all', visualisation.render, this);
    // api.on('change:ip', (event, ip) => console.log(ip));
});//*/
 
