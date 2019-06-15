console.log(`Реализовать функцию foo:
let a = {
name: 'static',
count: 0
}
console.log(foo(a, 'count', 10); /* В консоль выведет: [{name:'static', count:0},
{name:'static', count:1}, ..., {name:'static', count:9}] */`);

var icount = 0;

var a = {
name: 'static',
count: 0
}
function foo (iArray,nameProp,iteration){
    for (var i = 0; i < iteration; i++) {
        i > 0 ? iArray[nameProp] = i: iArray[nameProp]
        return iArray;
    }

}
console.log(foo(a, 'count', 10));
