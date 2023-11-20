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

// Create an unordered list
let ul = document.createElement("ul");
document.body.append(ul);

// Add list items to unordered list
const freelancersList = freelancers.map((freelancer) => {
  const li = document.createElement("li");
  li.textContent = `Name: ${freelancer.name}, Occupation: ${freelancer.occupation}, Price: ${freelancer.price}`;
  ul.appendChild(li);
});

// Create p tag
let p = document.createElement("p");
p.textContent = "The starting average price is: "
document.body.append(p);

// Calculate the starting average price of available freelancers

