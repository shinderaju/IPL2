
/*
* perpose : set and get team name
* @ param {String} -teamName
* @ return{String} -teamName
*/
angular.module('myApp').service('teamService', teams);
function teams() {
    var team = {};
    return {
        setTeam: function(teamName) {
           this.team = teamName;
            // this.team = teamName.replace(/\s/g, ''); ;
            //  console.log("set teamName",this.team);
        },
        getTeam: function() {
            return this.team;
        }
    }
};
