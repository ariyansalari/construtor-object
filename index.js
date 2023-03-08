// let Client=function(name,balance){
//     this.name=name;
//     this.balance=balance;
//     this.realtor=function(){
//         let premition;
//         if(this.balance>1000)
//         {
//             premition="gold"
//         }
//         else if(this.balance>500){
//             premition="silver"
//         }
//         else{
//             premition="normal"
//         }
//         return premition;
//     }
    
//     }
    
//     const person1=new Client("ali",1001)
//     console.log(person1.realtor())
//     const person2=new Client("reza",400);
//     console.log(person2)
// const person="hamid"
// console.log(person)
// const person1= new String("reza")
// console.log(person1)

// const number=23;
// console.log(number)
// const number1=new Number(21)
// console.log(number1)


// const array=[1,2,3,4,5],
//  array1=new Array(1,2,3,4,5)

// console.log(array)
// console.log(array1)

// const functions=(a,b)=>{
// return a+b
// }
// console.log(functions(4,5.5))

// const functions1=new Function("a","b","return a+b")

// console.log(functions1(1,4))




// const Estate=function(name,balance){
//     this.name=name;
//     this.balance=balance
// }

// Estate.prototype.membership=function(){
//     let premition;
//     if(this.balance>1000)
//     {
//         premition="gold"
//     }
//     else if(this.balance>500)
//     {
//         premition="silver"
//     }
//     else{
//         premition="normal"
//     }
//     return premition
// }


// Estate.prototype.getusertinfo=function(){
//     return `name:${this.name}, balance:${this.balance}, premition:${this.membership()}`
// }

// const presons=new Estate("ali",400)
// console.log(presons)
// const person3=new Estate("omid",200)
// console.log(person3.getusertinfo())



// let Bussiness =function(name,phone,category,balance){
//     Estate.call(this,name,balance)
//     this.phone=phone;
//     this.category=category;
     

// }

// Bussiness.prototype=Object.create(Estate.prototype)
// Bussiness.prototype.constructor=Bussiness
// const bussiness=new Bussiness("melina",092154221,"developer",600)
// console.log(bussiness)

// class Estate{
//     constructor(name,balance){
// this.name=name;
// this.balance=balance
//     }

//     getuserinfo(){
//         return `name:${this.name}, balance:${this.balance}`
//     }

//     takecare(amount){
//         return this.balance -=amount
//     }
// }



// const person=new Estate("mel meli",600)
// console.log(person.getuserinfo())

// // cnstrutor Bussiness
// class Bussiness extends Estate{
//     constructor(name,balance,phone,category){
// super(name,balance)
// this.phone=phone
// this.category=category
//     }

//     getuserinfo(){
//         //over right  
//         return `name:${this.name}, balance:${this.balance}`
//     }
// }

// const bussiness=new Bussiness("ali",500,092111,"developer")
// console.log(bussiness.getuserinfo())



// let Client =function(name,balance){
// this.name=name;
// this.balance=balance;

// }

// const person1=new Client("ali",400)

// Client.prototype.callhere=function(){
//     return `name:${this.name}, balance:${this.balance}`
// }

// console.log(person1.callhere())


// class Realtor{
//     constructor(name,balance){
//         this.name=name;
//         this.balance=balance;
//     }

//     getusrinfo(){

//     }
// }
