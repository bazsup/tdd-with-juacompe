function fizzbuzz(number) {
  const fizzbuzzMap = {
    [number % 3 === 0]: 'fizz',
    [number % 5 === 0]: 'buzz',
    [number % 15 === 0]: 'fizzbuzz',
    [number]: number,
  }
  return fizzbuzzMap[true]
}

console.log(fizzbuzz(1), '1 => 1')
console.log(fizzbuzz(3), '3 => fizz')
console.log(fizzbuzz(5), '5 => buzz')
console.log(fizzbuzz(15), '15 => fizzbuzz')