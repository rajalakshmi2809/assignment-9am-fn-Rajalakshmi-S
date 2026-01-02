const book = {
    Title: "The alchemist",
    author: "paulo coelho",
    pages: 208,

    describe() {
        console.log(`Title: ${this.Title}, Author: ${this.author}, pages: ${this.pages}`);
    }
}

const {Title, author } = book;

console.log(Title);
console.log(author);