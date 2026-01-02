const product = [
    {
     id: 1, 
     name: "laptop",
     price: 5000,
     brand: "dell"
        },
        {
     id: 2, 
     name: "smartphone",
     price: 250000,
     brand: "samsung"
        },
        {
     id: 3,
     name: "Headphones",
     price: 1500,
     brand: "sony"
        },
];
   product.forEach(product => {
    const {id,name,price,brand } = product;

    console.log(`Product ID: ${id}, Name: ${name}, Price: RS.${price}, Brand:${brand}`);

   });

