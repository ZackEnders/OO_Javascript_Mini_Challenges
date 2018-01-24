// Create an object called Multiplier with two methods: multiply and getCurrentValue. 
// multiply should initially return the number supplied * 1 and from then on whatever the 
// current value is times the number supplied.getCurrentValue should return the last answer returned from multiply.

// function Multiplier(){
// 	this.supplied = 1;
// 	this.multiply = function(x){
// 		this.x = x;
// 		return this.supplied *= x;
// 	}
// 	this.getCurrentValue = function(){
// 		console.log(this.supplied)
// 	}
// }

// var z = new Multiplier();


var Multiplier = {
	num1: 1,
	multiply: function(num){
		return this.num1 *= num
	},
	getCurrentValue: function(){
		return this.num1
	}
}
var z = Multiplier;



// Implement an object model that allows you to store strings that represent a Photo. 
// Your model should include an Album object that can contain many Photo objects in its photos attribute. 
// Each Album should allow you to add a new photo, list all photos, 
// and access a specific photo by the order it was added.
// Each Photo should store the photo's file name and the location the photo was taken in as strings.
// Create instances of each object defined to prove that your object model works.
function Photo(name, location){
	this.name = name;
	this.location = location;
}




function Album (){

	this.photoAlbum = [];

	this.addPhoto = function(x){
		console.log(x)
		this.photoAlbum.push(x);
		console.log(x + ' has been added to your photo gallery!')
	}
	this.listAllPhotos = function(){
		for(var i = 0; i < this.photoAlbum.length; i++){
		console.log(this.photoAlbum[i].name + ' ' + this.photoAlbum[i].location + ' Here are all of your photos!')
	}
}
	this.access = function(y){
		return this.photoAlbum[y];
	}
}
var photoAlbum = new Album()

var photo1 = new Photo('Beach', 'Mexico')
var photo2 = new Photo('Beach', 'Mexico')
var photo3 = new Photo('Beach', 'Mexico')
var photo4 = new Photo('Beach', 'Mexico')
var photo5 = new Photo('Mountains', 'PA')
var photo6 = new Photo('Mountains', 'PA')
var photo7 = new Photo('Mountains', 'PA')
var photo8 = new Photo('Mountains', 'PA')









// Create a prototypical Person object. From this object, extend a Teacher object and a Student object. 
// Each of these objects should have attributes and methods pertinent to what they describe. 
// Also create a School object that should be able to store instances of students and teachers.
//  Make sure to write code afterwards that creates instances of these objects to make sure that 
//  what you've written works well and you're able to store the necessary data in each object.



// ------------------3-------------------

function Person(name, age, gender,){
	this.name = name;
	this.age = age;
	this.gender = gender;
}

function Teacher(name, age, gender, subject){
	Person.apply(this, arguments);
	this.subject = subject;

}
function Student(name, age, gender, gpa){
	Person.apply(this, arguments);
	this.gpa = gpa;
}

// function School(){
// 	this.teachers = [];
// 	this.students = [];
// 	this.addTeacher = function(x){
// 		this.teachers.push(x)
// 		console.log('A new teacher has been added.')
// 	};
// 	this.addStudent = function(y){
// 		this.students.push(y)
// 		console.log('A new student has been added.')
// 	}
// }


class School{
	constructor(){
		this.teachers = [];
		this.students = [];

	}
	addTeacher(x){
		this.teachers.push(x)
		console.log('A new teacher has been added.')
	}
	addStudent(y){
		this.students.push(y)
		console.log('A new student has been added.')
	}
}

var s = new Student()

var jim = new Teacher('Jim', 32, 'Male', 'Math');
var keith = new Teacher('Keith', 44, 'Male', 'Science');
var tim = new Student('Tim', 17, 'Male', 3.4);
var kelly = new Student('Kelly', 16, 'Female', 3.6);
var nycda = new School()

