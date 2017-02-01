## If an actor plays the same role twice, does he... RE-ACT???


![](https://i.giphy.com/h9KtiB6DgiS2s.gif)

When I googled for a React gif, this was the first result.  Although it has nothing to do with React, some might find it still fits remarkably well.

This is a 2-day assignment.  Everything is due tomorrow, Tuesday, Nov 15th at Midnight.


## Part 1: Reading!

React is an amazing and powerful tool that allows us to build superior user experiences.  It's really an elegant beast, but it is an entirely different way of thinking than the standard MVC apps we've built so far.  Before we jump into the code, let's familiarize ourselves with the lay of the land with some light reading.



###Reading:
* If you were to go on r/webdev and ask "HOW DO I REACT????", you'd be downvoted to heck, possibly rick-rolled, and then referred to this article:  [Thinking In React](https://facebook.github.io/react/docs/thinking-in-react.html).  This is the official Facebook messaging on how to think using the React paradigm. 
* This fine little piece about [Imperative vs Declarative programming](https://medium.freecodecamp.com/imperative-vs-declarative-programming-283e96bf8aea#.jyvsz4oqk)
* Lastly, watch this [official FB video about React](https://www.youtube.com/watch?v=KVZ-P-ZI6W4&feature=youtu.be&t=510).  Start around the 8:35 mark, and watch until 16:30.


Now that you're all edumacated on everything, you're ready for part 2!




## Part 2: Time Keeps on Ticking Ticking Ticking

![](https://media.giphy.com/media/RJkPISgueiCMU/giphy.gif)

Let's add an app to our React portfolio! Your old gym coach from high school, the guy who yelled at you and wore sweatpants to fancy occassions, reached out and is now a client. He understands that we live in a digital world, so he wants to modernize with a digital stopwatch!

But he's concerned about your ability to keep track of the tasks needed to build out the stopwatch...


### Assignment

Task: Build a react app which implements a stopwatch. 

**Requirements**:
* **Display**
* **Start button**
* **Stop button**
* **Reset button**

Decide how exactly you are going to hold state in your parent component
`App`. In general your state should be the minimum amount of information needed for your components. Do not hold *computed* values in your state (why, you ask?  [read this!(optional)](http://reactkungfu.com/2015/09/common-react-dot-js-mistakes-unneeded-state/)). You will also need to define a few methods, which you can pass to the buttons as props. You should have at least a `start`, `stop` and `reset` methods which will be fired by the buttons.

HINT: Use
[setInterval](https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/setInterval)
to measure time. It is not precise in terms of time keeping but is
good enough for our purposes.



