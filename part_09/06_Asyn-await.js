function fetchUserData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({name: "anubhav", url:"https://ap.in"})
        }, 3000);
    }) 
}

async function getUserData() {
    try {
        console.log(`Fetching user Data...`);
        const userData = await fetchUserData();
        console.log("User data Fetched Successfully");

        console.log("User data: ", userData);
    } catch (error) {
        console.log("Error Fetching data", error);
        
    }
}

getUserData();

/******************************************************/
