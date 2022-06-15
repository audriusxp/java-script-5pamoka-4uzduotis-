window.onload = function(){
    const testinis =[];
    const nelyginiaiNuo107iki309 = issaugotiVisusNelyginiusXikiY(107,309);
    console.log(nelyginiaiNuo107iki309);
    console.log(testinis);
    const suma = masyvoSuma(nelyginiaiNuo107iki309);
    console.log(suma);
    const nelyginiaiNuo100iki104 =issaugotiVisusNelyginiusXikiY(100,104);
    console.log(nelyginiaiNuo100iki104);
    
    
}
function issaugotiVisusNelyginiusXikiY(x,y) {
    const testinis = [];
    
    for (let i = x; i <= y; i ++) {
        if (arNelyginis(i)) 
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
