
// Data or Promise creation
// promise taking call back function
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = true;
            if(success) {
                resolve("Data fetched successfully")
            }else {
                reject("Error fetching data");
            }
        }, 3000);
    }) 
}

// Here we learn how to consume the promise 
// **** fetchData().then().catch()
    // here any variable, anything send by resolve send to 'then'
    // here any variable, anything send by reject send to 'catch'
fetchData()
    .then((data) => {
        console.log(data);
        return data.toLowerCase();
    })
    .then((value) => {
        console.log(value);
    })
    .catch((error) => {console.error(error)})
