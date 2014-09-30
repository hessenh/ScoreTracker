Players = new Meteor.Collection("players");

Meteor.publish("players",function(){
	return Players.find({});
});

Meteor.methods({
	'addPlayer':function(name,score){
		var player = {
			name:name,
			score:score
		}
		Players.insert(player);
	},
	'incScore':function(id,amount){
		Players.update({_id:id},{$inc: {score: parseInt(amount)}});
	},
	'reset':function(){
		Players.remove({});

	}

})