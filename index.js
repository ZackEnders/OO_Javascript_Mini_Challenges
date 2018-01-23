// Create an object called Multiplier with two methods: multiply and getCurrentValue. 
// multiply should initially return the number supplied * 1 and from then on whatever the 
// current value is times the number supplied.getCurrentValue should return the last answer returned from multiply.

function Multiplier(x){
	this.x =x;
	this.supplied = 1;
	this.multiply = function(){
		this.supplied = this.supplied * x;
	}
	this.getCurrentValue = function(){
		console.log(this.supplied)
	}
}



// ------------------3-------------------

// function Person(name, age, gender,){
// 	this.name = name;
// 	this.age = age;
// 	this.gender = gender;

// }

// function Teacher(name, age, gender, subject){
// 	Person.apply(this, arguments);
// 	this.subject = subject;

// }
// function Student(name, age, gender, gpa){
// 	Person.apply(this, arguments);
// 	this.gpa = gpa;
// }

// function School(){
// 	this.teacher = [];
// 	this.students = [];


// }

// var jim = new Teacher('Jim', 32, 'Male', 'Math');
// var keith = new Teacher('Keith', 44, 'Male', 'Science');
// var tim = new Student('Tim', 17, 'Male', 3.4);
// var kelly = new Student('Kelly', 16, 'Female', 3.6);


