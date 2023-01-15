const watches = ["Swiss Army", "Dublot", "Monol", "G-Shock", "A", "B", "C", "D", "E"];

let watchSatu = [];
let watchAkhir = [];
let watchTengah = [];

for(i=0; i<=watches.length - 1; i++) {
    if(i == 0){
        watchSatu = watches[i];
        // console.log("Saya punya", watches[i]);
    } else if(i == watches.length-1) {
        watchAkhir = watches[i];
        // console.log(`dan ${watches[i]}.`);
    } else {
        watchTengah[i-1] = watches[i];
        // console.log(`, ${watches[i]}`);
    }
};

console.log(`Saya punya ${watchSatu}, ${watchTengah} , dan ${watchAkhir}.`);
    