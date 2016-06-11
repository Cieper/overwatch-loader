function Hex(id) {
	this.id = id;
	this.state = 0;
}

Hex.prototype.hex = function() {
	return $('#x' + this.id);
}

Hex.prototype.next = function() {
	return logo[1 + (this.id %7)];
}

Hex.prototype.toggle = function(caller) {
	if (this.state) {
		return;
	}
	var caller = this;
	this.hex().fadeTo('slow', this.state = !this.state).queue(function() { caller.next().toggle(this);});
};


var logo = []
for (i = 1; i <= 7; i++) {
	logo[i] = new Hex(i);
}


$(document).ready(function() {

  $("#startbutton").click(function() {
	logo[1].toggle();
  });
});

