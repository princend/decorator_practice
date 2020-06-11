function decorator1(target: any) {
    console.log('this is decorator1');
    console.log(target);
}


function decorator2(target: any) {
    console.log('this is decorator2');
    console.log(target);
    console.log(typeof (target));
}



//會先執行裝飾器二
//裝飾器是由下往上執行的(bottom-up)
@decorator1
@decorator2
export class A {

    name = 'john cena';
    constructor() {
        console.log('this is class A');
    }
}


var idetify = new A();
console.log(idetify.name);

