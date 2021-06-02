function add (a,b) {
	return a+b
}
console.log(add(2,2))
function subtract (a,b) {
	return a-b
}
console.log(subtract(6,2))

function sum (arr) {
  return arr.reduce((a,b)=>{
		 return a+b
	},0)
	
}
console.log(sum([5]))



function multiply (arr) {
	let reduced=arr.reduce((a,b)=>a*b)
	return reduced
}
console.log(multiply([2,4,6]))


function power(a,b) {

return Math.pow(a,b)
	
}
console.log(power(4,3))



function factorial(num) {
	
    var val=1;
    for (var i = 2; i <= num; i++)
        val = val * i;
    return val;

}
console.log(factorial(5))


module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}