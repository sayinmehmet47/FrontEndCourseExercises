class Book{
constructor(title,author,page,read){
        this.title=title;
        this.author=author;
        this.page=page;
        this.read=read;



}


info(){
    return `${this.title} ${this.author} ${this.page} ${this.read}`
}


}


const theHobbit=new Book("The Hobbit","J.R.R Tolkien","295 pages","not read yet")
console.log(theHobbit.info())