function fetchDataFromAPI() {
  const apiUrl = "https://jsonplaceholder.typicode.com/todos/1";

  return fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Fetch request failed with status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      console.log("Fetched data:", data);
    })
    .catch(error => {
      console.error("An error occurred:", error);
    });
}

// Call the function to fetch and log data
fetchDataFromAPI();
