// Map har value pr iterate krta h or uski value ek nye array me store kr deta h. map hmesha retrun krta h. map ek array bnata h usme value save krta h

// filter har value pr iterate krta h or uski value ek nye array me store kr deta h. filter bhi return krta h pr return ki value hmesh atrue ya false hi honi chahiye (ex. we want to print element greater than 10)

// !! operator - it i not an operator, it is a symbol actually
// !! symbol aapki value ko convert kr dega uski resembling boolean form me
// for ex - !![1,2,3,4,5,6] - this gives us true bcoz it is truthy value

// Slice - array ki part ko bahr nikal k dega. lice original array me change nhi krta. Slice immutable h (start, end)
// Splice - array k kisi hisse ko hta dega. splice mutable hota h (start, no. of element you want to remove)
// Note:- esa operation jisse array ki value change ho jaye, use khte h mutable

// iife -  immediately invoked fnc exp
// (function(){ }) - this is called expression
// (function(){ })(); - this is called iife means immediately calling an expresion
// why we use iife - to create private variables
// How to access private variable
// var ans = (function(){
//     var a = 12;
//     return {
//         getter: function() {
//             console.log(a)
//         },
//         setter: function(prm) {
//             a = prm;
//         }
//     }
// })();
// ans.getter(); 
// ans.setter(32); 
// ans.getter(); 


// // Ques. 1
// var str = "saare jahan se accha"
// // console.log(str.split("").reverse().join(""));
// console.log(str)
// // using map 
// var strArray = str.split(" ").map(function(word) {
//     return word.split("").reverse().join("");
// });
// console.log(strArray.join(" "));


// //Ques2
// function checkArray(elem) {
//     return Array.isArray(elem);
// }
// console.log(checkArray([]));
// console.log(checkArray({}));


//Ques3  Empty an array
// var arr = [1,2,3,4,5]
// arr.length = 0;
// console.log(arr)


// Ques4  check if the given number is integer or not
// Direct method :- Number.isInteger(1) => this gives us true
// var a = 14.5;
// if(a%1 === 0) {
//     console.log("integer")
// }
// else {
//     console.log('not Integer')
// }


// // Ques5 duplicate the elements of an array
// var arr = [1,2,3,4,5]
// console.log(arr.concat(arr));


// // Ques6  reverse a number
// // Direct method :- 
// var a = 123;
// // a.toString().split("").reverse().join("") => this will give 321 as string like that ('321'). To convert it into number we simply do Number.parseInt
// console.log(Number.parseInt(a.toString().split("").reverse().join("")));
// // Using Loop :-
// var num=789 ;
// var reverse = 0;
// while (num > 0){
//     var rem = num%10;
//     reverse = reverse*10 + rem;
//     num = Math.floor(num/10);
// }    
// console.log(reverse);


// // Ques7  check for a palindromic string
// var str = 'poop';
// var reversed = str.split("").reverse().join("");
// if(str === reversed) {
//     console.log(true)
// }
// else{
//     console.log(false)
// }


// Ques8  sort the alphabets of string in a alphabetical order
// var str = 'apple'
// var sortstr = str.split("").sort();
// console.log(sortstr.join(""))


// // Ques9  convert the first letter of a word in string in uppercase
// var str = 'hello ji kase ho saare'
// // First method - without using a function
// var str2 = str.split(" ").map((word)=> {
//     return `${word[0].toUpperCase()}${word.substring(1)}`
// })
// console.log(str2);
// // Second method - using a function
// function capitalizekaro(str) {
//     var str2 = str.split(" ").map((word)=> {
//         return `${word[0].toUpperCase()}${word.substring(1)}`
//     })
//     return str2
// }
// console.log(capitalizekaro("hello ji kaise ho saare"))


// // Ques10  print the occurance of the alphabets in a string
// function countchar(str) {
//     let occurances={};
//     str.split("").forEach((elem) => {
//         if(occurances.hasOwnProperty(elem) === false) {
//             occurances[elem]=1;
//         }
//         else{
//             occurances[elem] += 1 ;
//         }
//     });
//     return occurances
// }
// console.log(countchar("apple"))


// // Ques11 loop an array and all its element
// var arr = [1,2,3,4,5,6]
// var newarr = arr.reduce((elem1, elem2) =>{
//     return elem1 + elem2
// })
// console.log(`The sum of element is ${newarr}`)


// // Ques12   add only numbers in an array
// var arr = ['geteklg', 123, 34, 'kjdgnk', 56, 'dgfsf', 345]
// var sum = 0;
// arr.forEach((elem)=>{
//     if(typeof elem === 'number') {
//         sum = sum + elem;
//     }
// })
// console.log(sum);


// // Ques13  loop an array of objects and remove all obj who don't have gender equals to male
// var arr = [
//     {name: 'harsh', gender: 'male'},
//     {name: 'harshita', gender: 'female'},
//     {name: 'harshu', gender: 'male'},
//     {name: 'harshika', gender: 'female'},
//     {name: 'harshit', gender: 'male'},
//     {name: 'ishita', gender: 'female'}
// ]
// // First method - using foreach method
// arr.forEach((elem) => {
//     if(elem.gender === 'female') {
//         delete (elem)
//     }
//     else{
//         console.log(elem)
//     }
// })
// // Second method - using filter (filter return an array)
// var newarr2 = arr.filter((elem) => {
//     return elem.gender !== "female"
// })
// console.log(newarr2)


// // Ques14  clone an array
// function clonearr(arr) {
//     return [...arr]
// }
// console.log(clonearr([1,2,3,4,5]));


// // Ques15  type of argument passed into a function
// function typeteller(arg) {
//     console.log(typeof arg)
// }
// typeteller('hello');


// Ques16  
// function retrieve(arr, n=1) {
//     if(n <= arr.length) {
//         for(let i =0; i< n; i++) {
//             console.log(arr[i])
//         }
//     }
//     else {
//         console.log(n + " toh elements hi nhi h")
//     }
// }
// retrieve([1,2,3,4,5,6], 3)
// retrieve([1,2,3,4,5,6], 12)


// Ques17  
// function retrieve(arr, n=1) {
//     if(n <= arr.length) {
//         for(let i =0; i< n; i++) {
//             console.log(arr[arr.length - 1 - i])
//         }
//     }
//     else {
//         console.log(n + " toh elements hi nhi h")
//     }
// }
// retrieve([1,2,3,4,5,6])
// retrieve([1,2,3,4,5,6], 12)


// // Que18 most frequent element of an array
// function freq(arr) {
//     var frequency = {};
//     arr.forEach((elem) => {
//         if(frequency.hasOwnProperty(elem)) {
//             frequency[elem]++;
//         }
//         else {
//             frequency[elem] = 1 ;
//         }
//     });
//     var ans = Object.keys(frequency).reduce((num1, num2) => {
//         return frequency[num1] > frequency[num2] ? num1 : num2
//     })
//     console.log(ans)
// }
// freq([1,2,3,3,3,4,5,6,7,7,8,9,7,5,4,3,1])


// // Ques19  shuffle an array
// function shufflekaro(arr) {
//     // sbse phle kitna area shuffle krna h vo nikalo
//     let totalshufflearea = arr.length;
//     // fir ek random no. nikalo
//     while(totalshufflearea > 0) {
//         totalshufflearea--;
//         var indexToBeExchanged = Math.floor(Math.random() * totalshufflearea);
//         var temp = arr[totalshufflearea];
//         arr[totalshufflearea] = arr[indexToBeExchanged];
//         arr[indexToBeExchanged] = temp;
//     }
//     return arr
// }
// console.log(shufflekaro([1,2,3,4,5,6,7]));


// // Ques20  union of two arraya
// function union(arrOne , arrTwo){
//     return [...new Set(arrOne.concat(arrTwo))]
// }    
// console.log(union([1,2,3,4], [3,4,5,6]))
// // Note :- if i do not use ... operator, then the fnc will return a set not an array and we want that the fnc return union of two array so that's why we use ... operator


// // Ques21   print name only
// // using foreach
// var arr = [
//     {name: "harsh", age: 23},
//     {name: "harsh", age: 23},
//     {name: "harsh", age: 23}
// ]
// var ans = []
// arr.forEach((val) => {
//     ans.push(val.name);
// })
// console.log(ans)
// // using map
// var ans = arr.map((val) => {
//     return val.name
// })
// // if we want an array of object as output which only contain name then -
// var ans = arr.map((val) => {
//     return {name: val.name}
// })
// console.log(ans)


// // Ques22  move to p if wrod.length == 5 else move to span tag
// var arr = ['asdsf', 'fffs', 'dfg', 'dgdgs', 'dgdgs']
// var ans = arr.map((val) => {
//     if(val.length === 5) {
//         return `<p>${val}</p>`
//     }
//     else {
//         return `<span>${val}</span>`
//     }
// })
// console.log(ans)


// Ques23  print the element which is divisible by 2. Basic example of filter
// var arr = [1,2,3,4,5,6,7,8]
// var ans = arr.filter((val) => {
//     if(val%2 === 0) {
//         return true
//     }
// })
// console.log(ans)


// // Ques24 ese naam return kro jinme a aa rha ho
// var arr = ['sdsfa', 'fdfd0', 'fsfs','asaa', 'arffd']
// var ans = arr.filter((val) => {
//     if(!val.includes('a')) {
//         return true
//     } 
// })
// console.log(ans)


// // Ques25  ese naam return kro jinme 2 baar a aa rha ho
// // hint: we use split - split("a") => agr a ek baar hoga toh 2 hisso me tutega, agr a 2 ya 2 se jyada baar hoga toh 3 ya 3 se jyada hisso me tutega
// var arr = ['sdasfa', 'fdfd', 'fsfas','asaa', 'arfafd']
// var ans = arr.filter((val) => {
//     if(val.split('a').length < 3) {
//         return true
//     }
// })
// console.log(ans)


// // Ques26  delete property from object
// var obj = {
//     name: "pranshul",
//     age: 23,
// }
// delete obj.name;
// console.log(obj)


// // Ques27  make the obj immutable so that we can't update or delete values from it
// var obj = {
//     name: "pranshul",
//     age: 23,
// }
// Object.freeze(obj)
// obj.name = "harsh"
// console.log("after updating:", obj);   // it still gives pranshul instead of harsh


// // Ques28  remove all duplicate element from an array
// var arr = [1,2,3,4,5,6,5,4,3,2,7,8,9,7,1]
// var ans = [...new Set(arr)]
// console.log(ans)


// LAMBDA FUNCTION :- JS me fat arrow fnc hi lambda fnc h

// Temporal Dead Zone :- let or const variable declare hone se phle temporal dead zone me hoteh h, isiliye let se bnaye hue variable hoisting k waqt reference error dete h

// CURRYING :- jb bhi hmare pass ek esa fnc hoga jisme ek se jyada parameter honge, toh hum use simplify krdete h, uss fnc ko kayi saare fncs me tod kr or har ek fnc return kr rha hoga ek nya fnc jo ki purane fncs k parameters ko use krega
// function calculate(a,b) {
//     console.log(a+b)
// }
// calculate(12,13)
// using currying :-
// function phla(a) {
//     return function doosra(b){
//         console.log(a+b);
//     }
// }
// phla(12)(13);

// Pure Functions :-
// esa koi bhi fnc jo ki global variable ki value ko change na kre
// aap koi bhi value do output me, agr har bar same value doge toh same output aayega
// for ex :-
// var global = 12;
// function abcd(a) {
//     console.log(a+3)
// }
// abcd(4)  // Here abcd() is a pure fnc