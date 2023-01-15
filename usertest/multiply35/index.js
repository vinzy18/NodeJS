const tigalima = angka => {
    console.log("Isi variabel: ", angka);
    console.log("Result: ");
    
    for(i = 1 ; i <= angka; i++ ){
        if(i % 3 == 0 && i % 5 == 0){
            console.log(i, " adalah kelipatan 3 dan 5");
        } else if(i % 3 == 0){
            console.log(i, " adalah kelipatan 3");
        } else if(i % 5 == 0){
            console.log(i, " adalah kelipatan 5");
        } else {
            console.log(i);
        }
    }
}

tigalima(15);