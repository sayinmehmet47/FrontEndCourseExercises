const repeatString = function(string,number) {
    if(number>=0){
        let word="";
        for (let index = 0; index <number; index++) {
            word+=string;
            
        }
        console.log(word)
        return word;
            


    }else{
        return "ERROR"
    }
 
         
}
repeatString('hey', 5)

module.exports = repeatString
