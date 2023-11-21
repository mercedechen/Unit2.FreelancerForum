# Unit 2 Freelancer Forum

A visitor enters the website and finds a list of available freelancers. Each freelancer has a name, an occupation, and a starting price for their services. They observe on the list Alice, the writer with a starting price of $30, and Bob, who is a teacher, has a starting price of $50.

The visitor also finds a message that displays the average starting price of all the freelancers. In this example, the average starting price is $40.

A few seconds later, a new listing appears for a freelancer named Carol, who is a programmer and has a starting price of $70. The average starting price is updated to $50.

New freelancers continue to appear every few seconds, and the average starting price is updated accordingly.

## Notes and Approach

1. Create h1 tag: Freelancer Forum, h2 tag: Available Freelancers and p tag: Average Starting Price

2. Create an array containing the list of freelancers.
Example:
  {name: "Alice", occupation: "Writer", price: 30},
  {name: "Bob", occupation: "Teacher", price: 50}

3. Create an unordered list of the available freelancers.

4. Calculate the starting average price of the freelancers.

5. Add another freelancer {name: "Carol", occupation: "Programmer", price: 70}

6. Update average price

7. Using setInterval(), add additional freelancers at a specified interval and render() every few seconds to the unordered list.

8. Update the average starting price.



