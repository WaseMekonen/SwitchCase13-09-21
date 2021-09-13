// 1:

// if(num == 2){
//     console.log(num*2);
// }
// else if(num == 5){
//     console.log(num*5);
// }
// else if(num == ){
//     console.log(num*7);
// }
// else if(num == 10){
//     console.log(num*10);
// }
// else{
//     console.log(num);
// }

// 2:

// var num = 10;

// switch(num){
//     case 2:
//         console.log(num * 2);
//         break;
//     case 5:
//         console.log(num * 5);
//         break;
//     case 7:
//         console.log(num * 7);
//         break;
//     case 45:
//         console.log(num * 45);
//         break;
//     default:
//         console.log(num);
//         break;
// }

// 3:

// var day = 5;

// switch(day){
//     case 1:
//         console.log("Sunday");
//         break;
//     case 2:
//         console.log("Monday");
//         break;
//     case 3:
//         console.log("Tuesday");
//         break;
//     case 4:
//         console.log("Wednesday");
//         break;
//     case 5:
//         console.log("Thursday");
//         break;
//     case 6:
//         console.log("Friday");
//         break;
// case 6:
//         console.log("Saturday");
//         break;        
//     default:
//         console.log("day is not valid!");
//         break;
// }

// 4:

// var client = {
//     name: "wase",
//     email: "Meko@Jmail.com",
//     type: "super admin"
// }

// switch(client.type){
//     case "admin":
//         console.log("you are admin");
//         break;
//     case "super admin":
//         console.log("you are a super admin");
//         break;
//     default:
//         console.log("you are our loyal client");
// }

// 5:
// var btn1 = document.getElementById("btn1");
// var btn2 = document.getElementById("btn2");
// var btn3 = document.getElementById("btn3");
// var btn4 = document.getElementById("btn4");
// var btn5 = document.getElementById("btn5");

// btn1.addEventListener("click",function(){
//     console.log(btn1.innerText);
// })
// btn2.addEventListener("click",function(){
//     console.log(btn2.innerText);
// })
// btn3.addEventListener("click",function(){
//     console.log(btn3.innerText);
// })
// btn4.addEventListener("click",function(){
//     console.log(btn4.innerText);
// })
// btn5.addEventListener("click",function(){
//     console.log(btn5.innerText);
// })

// var cars = [
//     {
//     model: "toyota",
//     year: 2018,
//     price: 200000,
//     discount: 25,
//     afterDiscount: function(){
//         var disc = this.price*0.75
//         return this.price - disc
//     },
//     img :"https://cdn.pixabay.com/photo/2018/12/14/10/39/traffic-3874725__340.jpg" ,
// },
// {
//     model: "lamborgini",
//     year: 2018,
//     price: 205000,
//     discount: 10,
//     afterDiscount: function(){
//         return this.price*0.90
//     },
//     img: "https://cdn.pixabay.com/photo/2016/04/01/12/16/car-1300629_960_720.png",
// },
// {
//     model: "audi",
//     year: 2021,
//     price: 1005000,
//     discount: 7,
//     afterDiscount: function(){
//         var disc = this.price*0.93
//         return this.price - disc
//     },
//     img: "https://cdn.pixabay.com/photo/2015/01/19/13/51/car-604019_960_720.jpg",
// },
// {
//     model: "bmw",
//     year: 2019,
//     price: 2005000,
//     discount: 3,
//     afterDiscount: function(){
//         var disc = this.price*0.97
//         return this.price - disc
//     },
//     img: "https://cdn.pixabay.com/photo/2015/09/02/12/25/bmw-918408_960_720.jpg",
// },
// {
//     model: "mercedes",
//     year: 2020,
//     price: 205000,
//     discount: 30,
//     afterDiscount: function(){
//         var disc = this.price*0.70
//         return this.price - disc
//     },
//     img: "https://cdn.pixabay.com/photo/2017/03/27/14/56/auto-2179220_960_720.jpg",
// },
// ]

// var container = document.getElementById("carCountainer");

// for (var i=0; i<cars.length; i++){
//     container.innerHTML+=`<h2>Model:${cars[i].model}</h2>
//     <h3>Year:${cars[i].year}</h3>
//     <h3>Price:${cars[i].price}</h3>
//     <h3>Discount:${cars[i].discount()}</h3>
//     <img src="${cars[i].img}"</>`
// };

// b:

// for(var i=0; i<cars.length; i++){
//     switch(cars[i].discount){
//         case 25:
//             alert("crazy sell");
//             break;
//         case 10:
//             alert("good deal for you");
//             break;
//         case 7:
//             alert("not bad");
//             break;
//         case 3:
//             alert("this is joke");
//             break;
//         default:
//             console.log("hello");
//             break;
//     }
// }