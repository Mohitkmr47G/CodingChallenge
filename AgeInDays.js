function ageInDays(person) {
  const fullName = `${person.firstName} ${person.lastName}`;
  const ageInDays = person.age * 365;

  function logMessage() {
    console.log(`The person's full name is ${fullName} and their age in days is ${ageInDays}.`);
  }

  return logMessage;
}

// Example usage
const personInfo = {
  firstName: "John",
  lastName: "Doe",
  age: 30
};

const logMessageCallback = ageInDays(personInfo);
logMessageCallback(); // Output: The person's full name is John Doe and their age in days is 10950.
