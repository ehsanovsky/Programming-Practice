
// object
// let numbers =[5,9,1];
// console.log(numbers[1]);
// numbers[1]=15;
// console.log(numbers[1]);
// let person= {
// name : "nader" , 
// age : 30,
// gender : "male" ,
// addres : {
//     countery : "Iran",
//     city : "Tehran",
//     mahal : {
//             zone : 22 ,
//             esm : ["chitgar","naziabad"] 
//         }
//     },
// Hobbies : ["movies ","codding"]
// }
// person.email = "nader@email.com"
// console.log(person.addres.mahal.esm[1]);


// function
// function sayHello(name , age ){
//     console.log("Hello World , my name is " + name +" and i'm " + age +" years old") ;
// }
// sayHello("ehsan" , 26);
// sayHello("zahra" , 24);

// function square (number){
//    squared = number * number ;
//    console.log(squared);
// }
// square (9);

// heap and stack //

// let person = { name : "mahdi"};
// let aPerson ;

//  normal assignment://

// aPerson = person ;
// console.log(person);
// console.log(aPerson);

// aPerson.name = "bahram";

// console.log(person);

//deep assignment //

// aPerson = Object.assign({}, person);
// aPerson.name = "bahram";
// console.log(person);
// console.log(aPerson);

// let numbers = [2 , 3 , 5 , 7];
// let aNumbers ;

// aNumbers = Object.assign([], numbers);
// aNumbers[2] = 10 ;
// console.log(numbers);
// console.log(aNumbers);

// template.string//


// let firstName = "Ehsan";
// let lastName = "Safari";
// let result ;
 
// result = ` my name is ${firstName} ${lastName} and i'm 26 years old`;
// console.log(result);

// rounded
let x ;
let y ;
x = 77;
y = 2 ;
result = x / y ;
aresult = Math.round(result);
console.log(aresult);
            