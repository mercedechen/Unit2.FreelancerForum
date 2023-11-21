// Contain initial available freelancers
const freelancers = [
  {name: "Alice", occupation: "Writer", price: 30},
  {name: "Bob", occupation: "Teacher", price: 50}
];

const newFreelancers = [
  {name: "Carol", occupation: "Programmer", price: 70},
  {name: "Emily", occupation: "Designer", price: 100}
];

// Display list of available freelancers and targets the first unordered list
const ul = document.querySelector("ul");

let freelancersList = freelancers.map((freelancer) => {
  const li = document.createElement("li");
  li.textContent = `name: ${freelancer.name}, occupation: ${freelancer.occupation}, price: ${freelancer.price}`;
  ul.append(li);
});

// Calculate the starting average price of available freelancers
function calculateAvgPrice(freelancers) {
  let sum = 0;
  for (let i = 0; i < freelancers.length; i++) {
    sum += freelancers[i].price;
  }
  return sum / freelancers.length;
};

// Display starting average price
function renderAvgPrice() {
  document.getElementById("initialAvgPrice").innerHTML = `Average Starting Price: ${calculateAvgPrice(freelancers)}`
}
renderAvgPrice();

// Use setInterval() to add new freelancers to the list
function addFreelancer(newFreelancers) {
  newFreelancers.forEach((newFreelancer) => {
    const li = document.createElement("li");
    li.textContent = `name: ${newFreelancer.name}, occupation: ${newFreelancer.occupation}, price: ${newFreelancer.price}`;
    ul.appendChild(li);
  });
}
addFreelancer(newFreelancers);

function updateAvgPrice() {
  let updateSum = calculateAvgPrice(freelancers);
  updateSum += calculateAvgPrice(newFreelancers);
  return updateSum / newFreelancers.length;
};

function renderNewAvgPrice() {
  document.getElementById("updateAvgPrice").innerHTML = `Updated Average Price: ${updateAvgPrice(newFreelancers)}`;
}
renderNewAvgPrice();