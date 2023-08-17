const apiUrl = "https://jsonplaceholder.typicode.com/posts";

fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error(`Fetch request failed with status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log("Retrieved data:", data);
  })
  .catch(error => {
    console.error("An error occurred:", error);
  });
