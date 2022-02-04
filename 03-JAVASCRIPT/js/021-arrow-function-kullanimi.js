// Arrow function Kullanimi
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

// function hello(firstName) {
//     console.log(`Merhaba ${firstName}`)
// }

// hello("JavaScript")

// const helloFuncV1 = (firstName) => { console.log(`Merhaba ${firstName}`) } 
// helloFuncV1("helloFuncV1")


// const helloFuncV2 = firstName => console.log(`Merhaba ${firstName}`) // bir parametre, bir donus islemi
// helloFuncV2("helloFuncV2")


// const helloFuncV3 = (firstName, lastName) => console.log(
//     `Merhaba ${firstName} ${lastName}`
// ) // console.log parantezi

// helloFuncV3("helloFuncV3", "Last Name info")

// const helloFuncV4 = (firstName, lastName) => {
//     let info = `Merhaba ${firstName} ${lastName}`
//     console.log(info) 
//     return info
// }

// helloFuncV4("helloFuncV4", "Other Info")


function hello(firstName) {
    console.log(`Merhaba ${firstName}`)
}
hello("Javascript")

const helloFuncV1 = (firstName) => {console.log(`Merhaba ${firstName}`)}
helloFuncV1("helloFuncV1")

const helloFuncV2 = firstName => console.log(`Merhaba ${firstName}`) //bir parametre, bir donus islemi

const helloFuncV3 = (firstName, lastName) => console.log(
    `Merhaba ${firstName} ${lastName}`
) //console.log parantezi

helloFuncV3("helloFuncV3", "Last Name info")

const helloFuncV4 = (firstName, lastName) => {
    let info = `Merhaba ${firstName} ${lastName}`
    console.log(info)
    return info
}

helloFuncV4("helloFuncV4", "And Other info")

function greet(who){
    return `Hello, ${who}`;;
}
greet("Ramazan") //output: Hello, Ramazan

const greet = function(who){
    return `Hello, ${who}`;
}
greet("John") //output: Hello, John

const greet = (who) => `Hello, ${who}`;

const greet = who => `Hello, ${who}`;

var toplam = function(x,y){
    return x + y;
}

//ES6 

let toplam = (x,y) => x + y;

var sayi = function(x){
    return x*x;
}

//ES6

let sayi = x => x*x;


var multiplier = function(item,multi){
    return item * multi;
};
multiplier(5,2);

//ES6

const multiplier = (item,multi) => item * multi;
multi(5,2);

//ES5 

var myList = function(param1, param2){
    return param1.concat(param2);
};
myList([1,2],[3,4,5]);

const myList = (param1,param2) => param1.concat(param2);
myList([1,2],[3,4,5]); //output : [1,2,3,4,5]

var feedTheCat = (cat) => {
    if(cat === 'hungry'){
        return 'Feed the cat';
    } else {
        return 'Do not feed the cat';
    }
}


let movie = {
    name: "La la land",

    thisInArrow:() => {
        console.log("Movie name is " + this.name); // 'this' i window'u referans gösterir. Bu yüzden name'yi bulamaz. 
    },

    thisInRegular(){
        console.log("Movie name is " + this.name); // 'this'i kendisini referans gösterir ve çalışır. 
    }
}; 
movie.thisInArrow(); // output : Movie name is 
movie.thisInRegular(); //output : Movie name is La la land

const seriesList = list => {
    list.forEach((series, index) => {
        console.log(`${index+1}. ${series}`);
    });
};

seriesList(["Firefly", "The Mandalorian", "Breaking Bad"]);


const newArray = (nums) => {
    const newNums = nums.map(e=>{
        if(e%2==0){
            return e*2
        } else if(e%2==1){
            return e*3
        }
    });
    return newNums
}

console.log(newArray([1,2,3,4,5])); // output : [3,4,9,8,15]

