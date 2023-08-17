const apiUrl = "https://jsonplaceholder.typicode.com/posts/123456789";

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

    // Display error message on the webpage
    const errorMessage = document.createElement("p");
    errorMessage.textContent = "An error occurred while fetching data.";
    document.body.appendChild(errorMessage);
  });
