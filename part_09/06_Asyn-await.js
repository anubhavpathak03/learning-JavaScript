function fetchUserData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject({name: "anubhav", url:"https://www.google.com"})
        }, 3000);
    }) 
}

async function getUserData() {
    try {
        console.log(`Fetching user Data...`);
        const userData = await fetchUserData(); // takes time we can use this await keyword when there is async over it
        console.log("User data Fetched Successfully");
        console.log("User data: ", userData);
    } catch (error) {
        console.log("Error Fetching data", error);
        
    }
}

getUserData();

/******************************************************/
