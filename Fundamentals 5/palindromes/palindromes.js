


const palindromes = function(word) {
let cross=[]
let splitted=word.split("")
splitted.map(e=>{
    cross.unshift(e)
})
let a=cross.join().toLowerCase().match(/[a-z]+/ig)
let b=splitted.join().toLowerCase().match(/[a-z]+/ig)

if(a.join("")===b.join("")){
    return true
}else{
    return false
}
}
console.log(palindromes('A car, a man, a maraca.'))

module.exports = palindromes
