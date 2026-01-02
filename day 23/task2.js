const book = {
    title: "Thirukkural",
    Author: "Thirukkural",
    year: 1000,
    
    getInfo: function() {
        return `title: ${this.title}, Author: ${this.Author}, year: ${this.year}`;
    }
};
 
console.log(book.getInfo());