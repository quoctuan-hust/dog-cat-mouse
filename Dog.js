function Dog(){
	this.stamach =[];
}

Dog.prototype.eat = function(cat){
	this.stamach.push(cat);
}