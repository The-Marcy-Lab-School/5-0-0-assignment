# Problem Set 4.0 - Closures
- [Before You Begin](#before-you-begin)
  - [More tests, less prompts](#more-tests-less-prompts)
  - [Tickets](#tickets)
- [Off you go!](#off-you-go)
- [Short Answers](#short-answers)
- [Question 1: makeIdFunc](#question-1-makeidfunc)
- [Question 2: sumOfMultiples](#question-2-sumofmultiples)
- [Question 3: makeFriendList](#question-3-makefriendlist)
- [Debug Tickets](#debug-tickets)
- [Good luck!](#good-luck)

## Before You Begin
Welcome to Mod 5, Object-Oriented Programming (OOP)! To kick us off, this assignment is all about closures! But you may notice something's a little different about this assignment: it's so short! Where are the prompts??

### More tests, less prompts
The fact is, you'll have to become fluent at reading the tests on the job. So start practicing now! We'll still give you brief explanations about what we're asking you to build, but edge cases and crucial information (like function signatures) will not be given to you straight up anymore. We've been saying to check the tests for almost 2 months now, so it's not optional anymore.

It's challenging, but we know you can do it!

We've tried to write easy to understand tests with Jest. But if you don't know what a "matcher" or "assertion" does, feel free to check online at `https://jestjs.io/docs/getting-started`.

### Tickets
We're also going to set up a mock "tickets" for your debug or modify work. A ticket is basically a request for work. Tickets are how work is requested and tracked in most tech companies. You'll learn much more about them later, but at their core they have:
  - name or number
  - description
  - status
  - comments

Your job is to use the tickets and tests to get the functions back to working order.


## Off you go!
Make sure you run `npm install` after you pull down your assignment, and run `npm test` at before pushing up your code.

## Short Answers
There are a few we'd like you to answer, you may have to google some things. Be sure you understand the concepts, don't just spit out a reworded ChatGPT response, ok? Check your grammar!

## Question 1: makeIdFunc
This function should use a closure to return a function. 
* The returned should return a different integer each time starting at `1` and incrementing each time it is invoked. 
* This kind of function is used to generate unique number IDs for things.

This is a *classic* closure example, check the tests for what we're expecting. And if you need a hint, check out this [article on closures from W3](https://www.w3schools.com/js/js_function_closures.asp).

## Question 2: sumOfMultiples
Let's get some `.reduce` practice. 

Write a function that returns the sum of all numbers that are multiples of the given argument. (Seriously, no `for` loops, use `.reduce` with the power of *closures*)

## Question 3: makeFriendList
Ok, this is a fun one. Write a "factory" function called `makeFriendList`. 
* It should return an object
* It should use closure to encapsulate a private `friends` array of names (strings)
* The returned object should have methods that act on the `friends` array.

The methods we need are:
  - `addFriend()`
    - add a new friend
  - `removeFriend()`
    - find and remove an existing friend
  - `getFriends()`
    - return an array of friends
  - `displayFriends()`
    - log a specially formatted message

What should they return? What args do they take? Check those tests!

## Debug Tickets

| Ticket          | Name                                                                                                                                                                                                                |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DBG-312         | Fix broken createCourse please                                                                                                                                                                                      |
| **Description** | We were looking at the API yesterday to prep for the deploy and it looks like we've exposed the student data in the `createCourse` function. Please restore functionality ASAP so we can deploy. This is a blocker! |
| **priority**    | High                                                                                                                                                                                                                |
| **Status**      | Open                                                                                                                                                                                                                |
| **Assignee**    | YOU!                                                                                                                                                                                                                |

And then the comments would look something like:

| Commenter | Message                                                                                                          |
| --------- | ---------------------------------------------------------------------------------------------------------------- |
| Dean SE2  | Just checked into it, one of the new devs blew away changes with a rebase. It looks like the closure was removed |
| Jane SE3  | Yeah, it looks like the rest of the function logic is mostly okay though.                                        |
| Jo SE2    | They are passing most of the tests for functionality but they are failing the tests for privacy.                 |
| Jane SE3  | Ah gotcha. Can someone pick this up?                                                                             |
| **YOU**   | On it!                                                                                                           |

Notice how there's a little too much info? Getting good at reading tickets is filtering out the less important parts! In the real world, there may not be perfect tests, so you may need to ask questions about exactly the desired behavior. However, here all you have to do is get the tests to pass in `debug.spec.js` as usual!

## Good luck!
This is definitely a step up, but you can do it!
