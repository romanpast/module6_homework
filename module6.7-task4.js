const printNumbers = (from, to) => {
    let current = from;
    let timer = setInterval(function () {
        console.log(current);
        (current == to) ? clearInterval(timer) : current++}, 1000);
}

printNumbers(5, 15);