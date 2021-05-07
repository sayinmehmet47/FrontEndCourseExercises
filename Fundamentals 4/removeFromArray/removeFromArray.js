const removeFromArray = function() {
    let arr=Array.from(arguments)
    let main=arr[0]
    let secondary=arr.slice(1)
    var filtered = main.filter(e=>!secondary.includes(e))

    console.log(filtered)
    return filtered
 


}
removeFromArray([1, 2, 3, 4], 3, 2)
module.exports = removeFromArray
