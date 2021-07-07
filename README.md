# 🐺 Solenasth's Ui Engineer application 🐺

please consider hiring me 😛

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

## Dev comements on tools

After a longtime using sass and scss, I recently rediscovered the power of css3, and I've been trying to use it whenever possible.

This project was completed using only _'vanilla'_ tools. so I also didn't use any npm's or external libraries for components like tab navigation for example.
Also: BEM best practices get a little bit weird when a block is inside another block, so I tried to adhere as best as possible.

I wanted to make a secondary version using styled components. But instead I decided to use the time to add more tests and more polish. maybe later I will.

## Posible further improvements.

**AKA: What would I do if I had another weekend.**

- Replace the tab highlight with an animated element that changes size depending on the tab title.
- Make an alternate version using Styled Components.
- Add other misc. animations like spinners for loading.
- Add more tests for the rest of the compoments.

## A note on safari < 14.1

during this proyect I used the "gap" property. however earlier safari versions do not support it.
Unfortunately, Safari kinda supports gap in grid, so the standard practice of checking for `@supports` also does not work.

This is one of those weird cases where there is no easy CSS-only solution.
for this reason please use version 14.1+ when reviewing in safari.
