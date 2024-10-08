### Steps

#### Import Data and Set State Value

In App.jsx, we import the people array from data.js and set it up as a state value using the useState hook.

#### Setup Container and Prev/Next Buttons

In teh return statement, set up a container element to hold all the slides. Inside the container, iterate over the people state value to create each slide. For now, leave only one person in the array and comment out the rest.

Set up prev and next buttons outside the container element. You can use the onClick event to trigger functions that will change the current slide.

#### Setup CSS

Use CSS to style the container and slides. Set the container to position: relative and the slides and prev/next buttons to position absolute, also set the width and height of the container to control their size.

Uncomment the rest of the items in the people array

#### Main logic

To move the slides back and forth, use the transform property with a translateX value. For example, to move the slides to the left, we can use transform: translateX(-100%) property however to move the slides to the right, we can use the transform:translateX(100%) property. For the active slide we will use transform:translateX(0)

#### Current Person

Create a currentPerson state value in App.jsx, and we will set it to 0 at first which will allow us to keep track of the current slide being displayed.

#### Prev and Next

Implement the prev and next functionality using the setCurrentPerson function to update th currentPerson state value.

#### Auto Slide

Implement the auto slide functionality using the setInterval function to change the currentPerson state value at regular intervals.

Overall, the flow of the application should look something like this:

- In App.jsx, import the people array from data.js and set it up as a state value using the useState hook.
- In the return statement, set up a container element to hold all the slides, and iterate over the people state value to create each slide.
- Set up prev and next buttons and style the container,slides and buttons.
- Uncomment the rest of the items in the people array.
- Create a currentPerson state value in App.jsx and set it to initially.
- Implement the prev and next functionality using the setCurrentPerson function to update the currentPerson state value and move the slides back and forth using the transform property with a translateX value.
- Implement the auto slide functionality using the setInterval function to change the currentPerson state value at regular intervals.
