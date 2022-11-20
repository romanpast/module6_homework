const isPrime = (num) => {
    let prime = 'prime',
        composite = 'composite',
        error = 'Error: incorrect input, should be less than 1000',
        one = '1 is neither prime nor composite number.';
    if (num === 1) return one;
    if (num > 1000) return error;
    if (num <= 1 && num > 1000) return composite;
    if (num == 2) return prime;
    for (let i = 2; i <= num / 2; i++) {
        if (num % i == 0) {
            return composite;
        }
    }
    return prime;
}

