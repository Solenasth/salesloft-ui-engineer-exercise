# 🐺 Solenasth's Ui Engineer application 🐺

please consider hiring me 😛

I had a lot of fun doing this project, it is refreshing to see a dev excercise that is planned, well structured and includes all the tools I need.

Kudos! for that.

## viewing the project

- Go to:
  https://lucid-booth-34b42d.netlify.app/

### or

- clone the repo `$ git clone https://github.com/Solenasth/salesloft-ui-engineer-exercise.git`
- Install dependencies
  `$ npm i`
- Run the tests
  `$ npm test`
- Start the application
  `$ npm start`
- Go to `http://localhost:3000/`

## Tools Used

- vanilla react
- vanilla css3 ( 💜)
- BEM
- react-testing-library
- a lot of js

## Dev comements

- You will notice that the placeholder panels have semi-random heights. this is just to simulate the diferent heights they could have, I assume they would all be filed.

- After a long time using sass and scss, I recently rediscovered the power of css3, and I've been trying to use it whenever possible. so no pre-processors where used.

- This project was completed using only _'vanilla'_ tools. so I also didn't use any npm's or external libraries for components like tab navigation for example.

- BEM best practices get a little bit weird when a block is inside another block, so I tried to adhere as best as possible.

- I wanted to make a secondary version using styled components. But instead I decided to use the time to add more tests and more polish. maybe later I will.

- I tried to make components as extendible as possible, I hope components like Tabs, Panel, etc. give an idea of the direction I wanted to take.

- I don't know all the posible permutations of _(what i call)_ event cards. so you will notice that the whole logic for content variation is charged in that component instead of making it generic.

- the layout is an interesting proyect on it's own, it looks a little bit like a Masonry (a la Pinterest). I tried replicating something _Close_ to it, but again, this sort of layouts are often complete projects on their own.

## Posible further improvements.

**AKA: What would I do if I had another weekend.**

- Figure out a proper **Masonry** style layout for the panels, instead of doing it with grid and flexbox.
- Add _easter eggs_
- Replace the tab highlight with an animated element that changes size depending on the tab title.
- Make an alternate version using Styled Components.
- Add other misc. animations like spinners for loading.
- Add more tests for the rest of the compoments.

## A note on safari < 14.1

during this proyect I used the "gap" property. however earlier safari versions do not support it.
Unfortunately, Safari kinda supports gap in grid, so the standard practice of checking for `@supports` also does not work.

This is one of those weird cases where there is no easy CSS-only solution.
for this reason please use version 14.1+ when reviewing in safari.

## That's it

thank you for your time 💜
