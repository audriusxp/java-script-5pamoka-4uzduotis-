window.onload = function(){
    const testinis =[];
    const nelyginiaiNuo107iki309 = issaugotiVisusNelyginius107Iki309();
    console.log(nelyginiaiNuo107iki309);
    console.log(testinis);
    
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