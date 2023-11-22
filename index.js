// Display initial freelancers
const freelancers = [
  {name: "Alice", occupation: "Writer", price: 30},
  {name: "Bob", occupation: "Teacher", price: 50}
];

const totalFreelancers = [];

const ul = document.querySelector("ul");

function addFreelancer(freelancer) {
  const li = document.createElement("li");
  li.textContent = `Name: ${freelancer.name}, Occupation: ${freelancer.occupation}, Price: ${freelancer.price}`;
  ul.append(li);
};
freelancers.forEach(addFreelancer);

// Calculate the average price of initial freelancers
function calculateAvgPrice(freelancers) {
  let sum = 0;
  for (let i = 0; i < freelancers.length; i++) {
    sum += freelancers[i].price;
  }
  return sum / freelancers.length;
};

function renderAvgPrice() {
  document.getElementById("initialAvgPrice").innerHTML = `Initial Average Price: ${calculateAvgPrice(freelancers)}`
}
renderAvgPrice();

// Generates and displays a random name, occupation and price
function generateFreelancer() {
  const names = ["Emily", "George", "Dave", "Lily", "Julie", "Peter"];
  const occupation = ["Actor", "Dancer", "Journalist", "MC", "Artist", "Journalist"];
  const randomName = names[Math.floor(Math.random() * names.length)];
  const randomOccupation = occupation[Math.floor(Math.random() * occupation.length)];
  const randomPrice = Math.floor(Math.random() * 100) * 1;
  return {
    name: randomName, occupation: randomOccupation, price: randomPrice
  };
}

// Add Carol after 1s and generate random freelancers to the list
const addFreelancerInterval = setInterval(() => {
  const carol = {name: "Carol", occupation: "Programmer", price: 70};
  addFreelancer(carol);
}, 1000);

setTimeout(() => {
  clearInterval(addFreelancerInterval);
}, 1000);

const addRandFreelancerInterval = setInterval(() => {
  const randFreelancer = generateFreelancer();
  addFreelancer(randFreelancer);
}, 2000);

setTimeout(() => {
  clearInterval(addRandFreelancerInterval);
}, 10000);

// Calculate total average price of freelancers

function renderTotalAvgPrice() {
  document.getElementById("totalAvgPrice").innerHTML = `Total Average Price: `;
}
renderTotalAvgPrice();
