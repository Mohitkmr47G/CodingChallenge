function greetWithName(name) {
  return new Promise((resolve, reject) => {
    const greetingMessage = `Hello, ${name}!`;
    resolve(greetingMessage);
  });
}

// Example usage
const name = "Mithun";
greetWithName(name)
  .then(message => {
    console.log(message); // Output: Hello, Mithun!
  })
  .catch(error => {
    console.error(error);
  });
