// Create h1 tag
const h1 = document.createElement("h1");
h1.textContent = "Freelancer Forum";
document.body.append(h1);

// Create h2 tag
const h2 = document.createElement("h2");
h2.textContent = "Available Freelancers";
document.body.append(h2);

const freelancers = [
  {name: "Alice", occupation: "Writer", price: 30},
  {name: "Bob", occupation: "Teacher", price: 50},
];

const newFreelancers = [
  {name: "Carol", occupation: "Programmer", price: 70},
  {name: "Emily", occupation: "Reporter", price: 45},
  {name: "Alan", occupation: "Developer", price: 100}
]

// Create an unordered list
let ul = document.createElement("ul");
document.body.append(ul);

// Add available freelancers to unordered list
const freelancersList = freelancers.map((freelancer) => {
  const li = document.createElement("li");
  li.textContent = `Name: ${freelancer.name}, Occupation: ${freelancer.occupation}, Price: ${freelancer.price}`;
  ul.appendChild(li);
});

// Calculate the starting average price of available freelancers
function calculateAveragePrice(freelancers) {
  let sum = 0;
  for (let i = 0; i < freelancers.length; i++) {
    sum = sum + freelancers[i].price;
  }
  let startingAveragePrice = sum / freelancers.length;
  return startingAveragePrice;
}

startingAveragePrice = calculateAveragePrice(freelancers);
// console.log(startingAveragePrice);

// Create p tag
let p = document.createElement("p");
p.textContent = `The starting average price is: ${startingAveragePrice}`;
document.body.append(p);

// Add new available freelancers to unordered list
// setInterval();
function addFreelancers() {
  const newFreelancersList = newFreelancers.map((newFreelancer) => {
    const li = document.createElement("li");
    li.textContent = `Name: ${newFreelancer.name}, Occupation: ${newFreelancer.occupation}, Price: ${newFreelancer.price}`;
    ul.appendChild(li);
  });
};
addFreelancers(newFreelancers);