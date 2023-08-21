// const addVeggies = (callback)=>{
//     setTimeout(() => {
//         const veggies = "veggies "
//         console.log("veggie prepared ", veggies)
//         callback(veggies)
//     }, 2000);
// }
// const addTikki = (veggies, callback)=>{
//     setTimeout(() => {
//         const tikki = "veggies " + "tikki"
//         console.log("tikki prepared ", tikki)
//         callback(tikki)
//     }, 2000);
// }
// const makeBurger = (veggies, tikki, callback)=>{
//     setTimeout(() => {
//         const burger = "veggies " + "tikki " + "burger";
//         console.log("burger prepared", burger)
//         callback(burger)
//     }, 2000);
// }
// addVeggies((veggies)=>{
//     console.log("Preparing for tikki started")
//     addTikki(veggies, (tikki)=> {
//         console.log('preparing for burger started')
//         makeBurger(veggies, tikki, (burger) => {
//             console.log('Burger is ready!');
//         })
//     })
// })


// PROMISES
const placeorder = ()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve();
        }, 2000);
        })
};
const startproduction = ()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve();
        }, 2000);
        })
};
const printID = ()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve();
        }, 2000);
        })
};
const productname = ()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve();
        }, 2000);
        })
};
const productdesc = ()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve();
        }, 2000);
        })
};
console.log("Order is now going to take")
placeorder().then(()=>{
    console.log("Product is in production")
    return startproduction();
})
.then(()=> {
    console.log("ID printing...")
    return printID();
})
.then(() => {
    console.log("Product name started printing")
    return productname();
})
.then(() =>{
    console.log("Product desc started printing")
    return productdesc();
})
.catch((error)=> {
    console.log("Error", error)
})