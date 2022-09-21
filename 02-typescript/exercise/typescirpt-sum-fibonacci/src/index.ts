// happy coding 👻
function fibonacci(num: number): number {
    if (num == 1 || num == 2) return 1;
    return fibonacci(num - 1) + fibonacci(num - 2);
}

let sum = 0;
let num = 6;
for (let i = 1; i <= num; i++) {
    sum += fibonacci(i);
}
console.log("Tổng các số trong dãy fibonacci: " + sum);