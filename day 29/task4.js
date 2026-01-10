function fetchData() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("data received");
        },3000);
    });
}

async function getData() {
    try{
        const result = await fetchData();
        console.log(result);
    }catch (error) {
        console.log(error);
    }
}

getData();