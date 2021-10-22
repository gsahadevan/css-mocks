// print all the prime numbers till a given n integer

printPrime();

function printPrime(n = 5) {

    for (let i = 1; i <= n; i++) {
        for (let j = 3; j <= i; j++) {
            if (i % j === 0) {
                break;
            }
            console.log(i %j)
            console.log(j % i)
            console.log(i, j)
            console.log('-----------------------------')
        }
    }
}