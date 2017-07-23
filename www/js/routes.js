angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('menu.home', {
    url: '/home',
    views: {
      'side-menu21': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('menu.trainers', {
    url: '/trainers',
    views: {
      'side-menu21': {
        templateUrl: 'templates/trainers.html',
        controller: 'trainersCtrl'
      }
    }
  })

  .state('menu.soravJain', {
    url: '/sorav',
    views: {
      'side-menu21': {
        templateUrl: 'templates/soravJain.html',
        controller: 'soravJainCtrl'
      }
    }
  })

  .state('menu.shrinathV', {
    url: '/shrinath',
    views: {
      'side-menu21': {
        templateUrl: 'templates/shrinathV.html',
        controller: 'shrinathVCtrl'
      }
    }
  })

  .state('menu.agenda', {
    url: '/agenda',
    views: {
      'side-menu21': {
        templateUrl: 'templates/agenda.html',
        controller: 'agendaCtrl'
      }
    }
  })

  .state('menu.contact', {
    url: '/contact',
    views: {
      'side-menu21': {
        templateUrl: 'templates/contact.html',
        controller: 'contactCtrl'
      }
    }
  })

  .state('menu.venue', {
    url: '/venue',
    views: {
      'side-menu21': {
        templateUrl: 'templates/venue.html',
        controller: 'venueCtrl'
      }
    }
  })

  .state('menu.feedback', {
    url: '/feedback',
    views: {
      'side-menu21': {
        templateUrl: 'templates/feedback.html',
        controller: 'feedbackCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

$urlRouterProvider.otherwise('/side-menu21/home')


});