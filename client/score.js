Meteor.subscribe("players")


Players = new Meteor.Collection("players");


Template.players.playerList = function(){
  return Players.find({},{sort:{score:-1}});
};

Template.add_player.events = {
   'keypress #inputName': function(event) {
        if (event.charCode == 13) { 
  			var name = $('#inputName').val();
    		Meteor.call('addPlayer',name,0); 
    		$('#inputName').val("");
    	}
  },
}

Template.player.events = {
	'click': function () {
    Session.set("selected_player", this._id);
  }
}
Template.players.events = {
	'click #inputScoreButton': function () {
		var score = $('#inputScore').val();
		var id = Session.get('selected_player');
		
		Meteor.call('incScore',id,score);
  },
  'click #resetButton': function(){
  	Meteor.call('reset');
  	Router.go('add_player');
  }
}


Template.player.selected = function () {
     return Session.equals("selected_player", this._id) ? "selected" : '';
 };