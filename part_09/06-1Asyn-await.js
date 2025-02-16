function fetchPostData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Post Data Fetched")
        }, 2000);
    }); 
}
function fetchCommentData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Comment Data Fetched");
        }, 3000);
    });
}

async function getBlogData() {
    try {
        console.log("fetching blog data");
        // const blogData = await fetchPostData();
        // const commentData = await fetchCommentData();
        const [postData, commentData] = await Promise.all([  // this is good way accessing multiple response
            fetchPostData(), 
            fetchCommentData(),
        ]);

        console.log(postData);
        console.log(commentData);
        
        console.log("fetch Complete");
    } catch (error) {
        console.error("Error Fetching Blog Data", error);
    };
}

getBlogData();