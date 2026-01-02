const book = {
    title: "The Alchemist",
    author: "paulo coelho",
    pages: 208,


    describe() {
        console.log(
            `Tiltle: ${this.title}, author: ${this.author}, pages: ${this.pages}`
        );
    }
};


book.describe();