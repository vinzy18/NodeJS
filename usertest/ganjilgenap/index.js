const gage = (angka) => {
    console.log("Isi variabel : ", angka);
    if(angka % 2 == 0){
        console.log(`${angka} adalah bilangan Genap`);
    } else {
        console.log(`${angka} adalah bilangan Ganjil`);
    }
};

gage(2);
gage(5);
gage(200);
gage(1507);