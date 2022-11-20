const countEvenOdd = (input) => {
    let arr = input.filter(Number.isFinite);
    let nul = arr.filter(num => num === 0);
    let even = arr.filter(num => num % 2 == 0 && num != 0);
    let odd = arr.filter(num => num % 2 != 0);
    
    return `Even: ${even.length}, odd: ${odd.length}, null: ${nul.length}`;
}