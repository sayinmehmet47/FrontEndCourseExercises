const fibonacci = function(a) {

if(a<0){
    return "OOPS"
}
let arr=[];
arr[0]=1
arr[1]=1
for(i=2;i<a;i++){
    arr[i]=arr[i-2]+arr[i-1]
}
return arr[arr.length-1]


}

console.log(fibonacci(15))




module.exports = fibonacci
