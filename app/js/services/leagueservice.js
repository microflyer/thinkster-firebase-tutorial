'use strict';
 
angular.module('fantasyApp.services.leagues', ['fantasyApp.services.firebaseRefs'])
  .factory('Leagues', ['angularFireCollection', 'FireRef',
    function(angularFireCollection, FireRef) {
      return {
        collection: function(cb) {
          return angularFireCollection(FireRef.leagues(),cb);
        }
      , find: function(leagueId) {
          return FireRef.leagues().child('/'+leagueId);
        }
      , create: function(league, commissioner) {
         return FireRef.leagues().push({
            name: league.name,
            commissionerId: commissioner.id,
            fantasyTeams: []
          }).name();
        }
      , removeLeague: function(leagueId) {
          var league = FireRef.leagues().child('/'+leagueId)
          league.remove();
        }
      }
    }])