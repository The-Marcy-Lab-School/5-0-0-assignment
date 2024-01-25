# RUBRIC
3 - Answered question correctly.
2 - answered question, and is more right than wrong
1 - attempted question, but is much more wrong than right.
0 - did not attempt the question

Dock a single .5 points if *any* of the questions were so grammatically incorrect it was distracting. "Distracting" meaning that if you saw this on the job, you would have them retype it for clarification. Either because the grammar was so poor you literally didn't understand, or because their were 2 or more blatant spelling mistakes.

There are 4 questions so the total possible points is 12

# Question 1
Encapsulation is bundling of data and methods that act on that data in an object. 

Bonus points if they mention the importance of protecting variables

# Question 2

Closure is when an inner function maintains a reference to an outer function's scope. 


# Question 3

This example uses closure because the arrow function passed to `.map` references the parameter `x`.

```js
// example 1
const multiplyNumberByX = (nums, x) => {
  return nums.map(num => num * x);
}
```

# Question 4

The `friends` array is directly accessible on the object. There is no way of controlling how that array is mutated.
