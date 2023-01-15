const { EventEmitter } = require('events');

const myEventEmitter = new EventEmitter();

// fungsi yang akan dijalankan ketika event coffee-order terjadi
const makeCoffee = (name) => {
    console.log(`Kopi ${name} telah dibuat!`);
};

const makeBill = (price) => {
    console.log(`Bill sebesar ${price} telah dibuat!`);
};

const onCoffeeOrderedListener = ({ name, price }) => {
    makeCoffee(name);
    makeBill(price);
}
// mendaftarkan fungsi makeCoffee dan makeBill sebagai listener event coffee-order
myEventEmitter.on("coffee-order", onCoffeeOrderedListener);

// Memicu event 'coffee-order' terjadi
myEventEmitter.emit("coffee-order", { name: "Tubruk", price: 15000 });



