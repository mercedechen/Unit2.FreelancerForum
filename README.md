# Unit 2 Freelancer Forum

A visitor enters the website and finds a list of available freelancers. Each freelancer has a name, an occupation, and a starting price for their services. They observe on the list Alice, the writer with a starting price of $30, and Bob, who is a teacher, has a starting price of $50.

The visitor also finds a message that displays the average starting price of all the freelancers. In this example, the average starting price is $40.

A few seconds later, a new listing appears for a freelancer named Carol, who is a programmer and has a starting price of $70. The average starting price is updated to $50.

New freelancers continue to appear every few seconds, and the average starting price is updated accordingly.

## Planning

1. Create h1 tag for "Freelancer Forum"

2. Create p tag for "Starting Average Price"

3. Create ul tag, use querySelector(); to contain list of freelancers

4. Create an array containing the initial list of avaialble freelancers
* {name: "Alice", occupation: "Writer", price: 30},
* {name: "Bob", occupation: "Teacher", price: 50}

5. Create a function to calculate the starting average price of the initial available freelancers and return the results using render();

6. Add another freelancer using setInterval()
* {name: "Carol", occupation: "Programmer", price: 70}

7. Use render() to update the average price of available freelancers

8. Add additional random freelancers using setInterval() and render() every few seconds to the unordered list.

9. Use render() to update the total average price of all freelancers

## Notes

* When using setInterval() always pass a function reference as its first argument so that the function is executed at each interval.

* setTime() takes a time parameter, clearInterval() will stop setInterval() immediately.


