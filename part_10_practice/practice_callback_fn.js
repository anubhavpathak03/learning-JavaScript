function fetchData(callback) {
  setTimeout(() => {
    const data = { id: 1, name: "Alice" };
    callback(data);
  }, 2000); // Simulating a delay of 2 seconds
}

fetchData((data) => {
  console.log("Data received:", data);
});