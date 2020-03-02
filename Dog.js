var chalk = require('chalk')

function Dog(name){
	this.name = name
	this.stamach =[];
}

Dog.prototype.eat = function(cat){
	this.stamach.push(cat);
}

Dog.prototype.sayHi = function(){
	console.log('go go go ' + chalk.blue(this.name));
}



module.exports = Dog;