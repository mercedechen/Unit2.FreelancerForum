// Create headings
const h1 = document.createElement("h1");
h1.textContent = "Freelancer Forum";
document.body.append(h1);

const h2 = document.createElement("h2");
h2.textContent = "Available Freelancers";
document.body.append(h2);

// Create array containing available freelancers
const freelancers = [
  {name: "Alice", occupation: "Writer", price: 30},
  {name: "Bob", occupation: "Teacher", price: 50},
];

// Create an unordered list
let ul = document.createElement("ul");
document.body.append(ul);

// Create an unordered list and add initial available freelancers
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

// Display the starting average price on HTML
let p = document.createElement("p");
p.textContent = `The starting average price is: ${startingAveragePrice}`;
document.body.append(p);

// Add new available freelancers to unordered list
function addFreelancers(newFreelancers) {
  newFreelancers.map((newFreelancer) => {
    const li = document.createElement("li");
    li.textContent = `Name: ${newFreelancer.name}, Occupation: ${newFreelancer.occupation}, Price: ${newFreelancer.price}`;
    ul.appendChild(li);
  });
};
// addFreelancers(newFreelancers);

// Add new available freelancers at a set interval
const addFreelancersInterval = setInterval(() => {
  const newFreelancers = [
    {name: "Carol", occupation: "Programmer", price: 70},
    {name: "Dave", occupation: "Reporter", price: 45}
  ];
  addFreelancers(newFreelancers);

//   if (freelancers.length >= 5) {
//     clearInterval(addFreelancersInterval);
//   };
// }, 1000);