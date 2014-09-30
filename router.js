Router.map(function() {
	this.route('add_player');
  	this.route('players');
});

Router.configure({
	layoutTemplate: 'layout'
});