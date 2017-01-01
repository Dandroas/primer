function getPrimes(count) {
    const filter = [];
    let i;
    let j;
    const primes = [];
    let generated = 0;
    //just a little safety for now.
    const max = 999999;
    for (i = 2; i <= max; ++i) {
        if (!filter[i]) {
            primes.push(i);
            generated++;
            for (j = i << 1; j <= max; j += i) {
                filter[j] = true;
            }
            if (generated == count) {
                return primes;
            }
        }
    }

    return primes;
}

function renderMultiplicationGrid(numbers) {
    let body = '';
    //TODO build in a padding mechanism
    let heading = '    ';
    let separator = ' | ';
    numbers.forEach(number => {
        heading += number + separator;
        body += number + separator;
        numbers.forEach(innerNumber => {
            body += number*innerNumber + separator;
        });
        body += '\n';
    });
    return `${heading}\n${body}`;
}

module.exports = {
    renderMultiplicationGrid,
    getPrimes
};