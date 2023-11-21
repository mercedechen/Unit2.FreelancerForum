// Contain initial available freelancers
const freelancers = [
  {name: "Alice", occupation: "Writer", price: 30},
  {name: "Bob", occupation: "Teacher", price: 50}
];

const newFreelancers = [
  {name: "Carol", occupation: "Writer", price: 70}
]

const addFreelancers = [...freelancers, ...newFreelancers];

// Display list of available freelancers and targets the first unordered list
const ul = document.querySelector("ul");

let freelancersList = freelancers.map((freelancer) => {
  const li = document.createElement("li");
  li.textContent = `Name: ${freelancer.name}, Occupation: ${freelancer.occupation}, Price: ${freelancer.price}`;
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

// Add new freelancers to the list
freelancersList = addFreelancers.map((freelancer) => {
  const li = document.createElement("li");
  li.textContent = `Name: ${freelancer.name}, Occupation: ${freelancer.occupation}, Price: ${freelancer.price}`;
  update.appendChild(li);
});

// Calculate new average price
function newAvgPrice() {
  document.getElementById("newAvgPrice").innerHTML = `New Average Price: ${calculateAvgPrice(addFreelancers)}`
}
newAvgPrice();
