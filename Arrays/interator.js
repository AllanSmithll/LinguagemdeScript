const number = [1, 2, 3, 4, 5];

//const numbersNew = []

//for (const number of numbers) {
//    numbersNew.push(number * 2)
//}

//map

const numbersNew = number.map((number) => number * 2)

console.log(numbersNew)

//filter

const oddNumbers = number.filter((numbers) => number & 1);

console.log(oddNumbers)

//reduce

const sum = number.reduce((acc, val) => acc + val)

console.log(sum);

const sumStartZero = number.reduceRight((acc, val) => acc + val, 0)

console.log(sum);

//find

const value = number.find((number) => number === 10)

console.log(value)

//FindIndex

const index = number.find((number) => number === 10)

console.log(index)

//forEach

number.forEach((number) => {
    if (index & 1) {
        console.log(number + 1)
    }
})