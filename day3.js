// function delay(time) {
//     return new Promise((resolve, reject)=>setTimeout(()=> resolve(), time));
// }
// async function placeorder() {
//     await delay(2000);
//     console.log("order taken")
// }
// async function startproduction() {
//     await delay(2000);
//     console.log("production completed")
// }
// async function printID() {
//     await delay(2000);
//     console.log("ID printed")
// }
// async function productname() {
//     await delay(2000);
//     console.log("product name printed")
// }
// async function productdesc() {
//     await delay(2000);
//     console.log("product desc printed")
// }
// async function main() {
//     console.log("order is going to take")
//     await placeorder();
//     console.log("production started")
//     await startproduction();
//     console.log("ID printing started")
//     await printID();
//     console.log("printing name started")
//     await productname();
//     console.log("printing description started")
//     await productdesc();
// }
// main(); 


// async function fetchdata() {
//     try{
//         const url = "https://jsonplaceholder.typicode.com/todos"
//         const response = await fetch(url)
//         if(!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         const data =await response.json()
//         console.log(data)
//     }
//     catch (error){
//         console.log(error)    
//     }
// }
// fetchdata();


// Using async await
// async function imgselected() {
//     setTimeout(() => {
//         console.log("img is selected")
//     }, 2000)
// }
// async function selectimage() {
//     console.log("selecting image")
//     await imgselected();
// }
// selectimage()

// Using promise
// const selectingimage = ()=>{
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             resolve();
//         }, 2000);
//         })
// };
// const imgselected = ()=>{
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             resolve();
//         }, 2000);
//         })
// };
// console.log("Please select the image")
// selectingimage().then(()=>{
//     console.log("user is selecting image")
//     return imgselected();
// })
// .then(()=> {
//     console.log("Image successfully selected by user")
// })

// Using callback
// const selectingimage = (callback) => {
//     setTimeout(()=>{
//         console.log("user is selecting an image");
//         callback();
//     }, 2000)    
// }
// const imgselected = (callback) => {
//     setTimeout(() => {
//         console.log("img is selected by user")
//         callback()
//     }, 2000)
// }
// const selected = () => {
// }
// console.log("Please select the image")
// selectingimage(() => {
//     imgselected(() => {
//         selected();
//     })
// })