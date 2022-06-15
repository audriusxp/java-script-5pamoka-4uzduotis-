window.onload = function(){
    const testinis =[];
    const nelyginiaiNuo107iki309 = issaugotiVisusNelyginius107Iki309();
    console.log(nelyginiaiNuo107iki309);
    console.log(testinis);
    const suma = masyvoSuma(nelyginiaiNuo107iki309);
    console.log(suma);
    
}
function issaugotiVisusNelyginius107Iki309() {
    const testinis = [];
    let x = 1;
    let y = 1000;
    for (let i = x; i <= y; i += 2) {
        testinis.push(i);
    }
    return testinis;
}


    

function arNelyginis(x){
    return x % 2 > 0;
}
function masyvoSuma(testinis) {
    let suma = 0;
    for (let i = 0; i < testinis.length; i++) {
        
        suma += testinis[i];  
              
    }
    return suma;
}
