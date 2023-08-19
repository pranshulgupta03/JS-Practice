/* function example() {
     const x = 3.14;
    if(true) {
        const y = 12;
    }
    console.log(x)
    console.log(y)
}
example()
console.log(x)
console.log(y) */ 


// Hoisting
// console.log(a)
// const a = 10
// console.log(a)


/* function calculator(a,b,callback) {
    return callback(a, b);
}
function add(a, b) {
    return a+b
}
function mul(a, b) {
    return a*b
}
var res = calculator(5, 3, mul);
console.log(res)
var res = calculator(5, 3, add);
console.log(res) */ 


// CALLBACK HELL
/* const placeorder = (callback) => {
    setTimeout(()=>{
        console.log("order placed");
        callback();
    }, 2000)    
}

const startProduction = (callback) => {
    setTimeout(() => {
        console.log("production started")
        callback();
    }, 5000)
}

const printId = (callback) => {
    setTimeout(() => {
        console.log("id printed")
        callback();
    }, 5000)
}

const productName = (callback) => {
    setTimeout(() => {
        console.log("productName printed")
        callback();
    }, 5000)
}

const productDesc = () => {
    console.log("productDesc printed")    
}

console.log('ordering product')
placeorder(() => {
    console.log('in production');
    startProduction(() => {
        console.log("printing item started");
        printId(() => {
            productName(() => {
                productDesc();
                console.log(`day ended`);
            })
        })
    })
}) */



const placeorder = () => {
    setTimeout(() => {
        console.log('Order placed');
        bookticket();
    }, 2000)
}
const bookticket = () => {
    setTimeout(() => {
        console.log('Ticket booked');
        boardingpass();
    }, 1000);
}
const boardingpass = () => {
    setTimeout(() => {
        console.log('Boarding pass issued');
        securitycheck();
    }, 2000)
}
const securitycheck = () => {
    setTimeout(() => {
        console.log("security checked pass")
        selfcheck();
    }, 2000)
}
const selfcheck = () => {
    setTimeout(() => {
        console.log("self checked pass")
        navigationpanel();
    }, 2000)
}
const navigationpanel = () => {
    setTimeout(() => {
        console.log("navigation panel crossed")
        buspickup();
    }, 2000)
}
const buspickup = () => {
    setTimeout(() => {
        console.log("pickup bus reached")
        airplanetakeoff();
    }, 2000)
}
const airplanetakeoff = () => {
    setTimeout(() => {
        console.log("airplane takeoff")
        aircraft();
    }, 2000)
}
const aircraft = () => {
    setTimeout(() => {
        console.log("aircraft");
        destination();
    }, 2000)
}
const destination = () => {
        console.log("detination reached")
}
console.log('booking ticket');
placeorder(() => {
    bookticket(() => {
        boardingpass(() => {
            securitycheck(() => {
                selfcheck(() => {
                    navigationpanel(() => {
                        buspickup(() => {
                            airplanetakeoff(() => {
                                aircraft(() => {
                                    destination()
                                    console.log('journey completed');    
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})