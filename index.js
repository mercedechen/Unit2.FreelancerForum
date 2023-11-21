// Container for available freelancers
const freelancers = [
  {name: "Alice", occupation: "Writer", price: 30},
  {name: "Bob", occupation: "Teacher", price: 50}
];

const newFreelancers = [
  {name: "Carol", occupation: "Programmer", price: 70},
];

// Add the initial available freelancers in the first ul
const ul = document.querySelector("ul");

function addFreelancer(freelancer) {
  const li = document.createElement("li");
  li.textContent = `Name: ${freelancer.name}, Occupation: ${freelancer.occupation}, Price: ${freelancer.price}`;
  ul.append(li);
};

freelancers.forEach(addFreelancer);

// Calculate the starting average price of initial available freelancers
function calculateAvgPrice(freelancers) {
  let sum = 0;
  for (let i = 0; i < freelancers.length; i++) {
    sum += freelancers[i].price;
  }
  return sum / freelancers.length;
};

// Render the calculated average price to the HTML document
function renderAvgPrice() {
  document.getElementById("initialAvgPrice").innerHTML = `Initial Average Price: ${calculateAvgPrice(freelancers)}`
}
renderAvgPrice();

// Add Carol to the freelancer list
const flInterval = setInterval(function() {
  newFreelancers.forEach(addFreelancer);
}, 1000);

setTimeout(function() {
  clearInterval(flInterval);
}, 1000);

// Add new freelancers at a set interval and stops
const randFreelancerInterval = setInterval(function() {
  const randFreelancer = generateFreelancer();
  addFreelancer(randFreelancer);
}, 1000);

setTimeout(function() {
  clearInterval(randFreelancerInterval);
}, 5000);

// Calculate total average price of freelancers
function newAvgPrice() {
  sum = 0;
  sum += calculateAvgPrice(newFreelancers);
  return sum / newFreelancers.length;
};

function renderNewAvgPrice() {
  document.getElementById("totalAvgPrice").innerHTML = `Total Average Price: ${newAvgPrice()}`;
}
renderNewAvgPrice();

// Generates and displays a random name, occupation and price
function generateFreelancer() {
  const names = [
    "Emily", 
    "George", 
    "Dave", 
    "Lily"
  ];

  const occupation = [
    "Actress", 
    "Dancer", 
    "Journalist", 
    "MC"]

  const randomName = names[Math.floor(Math.random() * names.length)];

  const randomOccupation = occupation[Math.floor(Math.random() * occupation.length)];

  const randomPrice = Math.floor(Math.random() * 100) * 1;

  return {
    name: randomName,
    occupation: randomOccupation,
    price: randomPrice
  };
}
console.log(generateFreelancer());
