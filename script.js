window.onload = function(){
    const testinis =[];
    const nelyginiaiNuo107iki309 = issaugotiVisusNelyginius107Iki309();
    console.log(nelyginiaiNuo107iki309);
    console.log(testinis);
    
}
function issaugotiVisusNelyginius107Iki309() {
    const testinis = [];
    for (let i = 107; i <= 309; i += 2) {
        testinis.push(i);
    }
    return testinis;
}