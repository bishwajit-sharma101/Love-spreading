# Project 1: Interactive Mouse Trail Animation

This project creates an interactive animation where moving the mouse cursor generates falling icon elements on the webpage.

## Files

* **index.html**: The main HTML file containing the structure of the webpage.
* **style.css**: The CSS file containing the styling for the webpage and the animation.
* **script.js**: The JavaScript file containing the logic for generating and animating the icon elements.

## Description

The project utilizes JavaScript to capture mouse movement events and dynamically create `<span>` elements that display an icon. These elements are then animated to simulate a falling effect.

### index.html

* A basic HTML structure with a `body` element.
* Links to the `style.css` and `script.js` files.

### style.css

* Resets default margin and padding for all elements.
* Sets the `html` and `body` elements to full height and width, and a dark background.
* Hides overflow to prevent scrollbars.
* Styles the `<span>` elements:
    * Sets the background image to an icon from a URL.
    * Positions the elements absolutely.
    * Sets the `background-size` to cover.
    * Disables pointer events to prevent interaction.
    * sets the background-repeat to no-repeat.
    * Applies a CSS animation named `animate`.
* Defines the `animate` keyframes:
    * The animation starts with the element at the mouse cursor's position and full opacity.
    * The animation ends with the element moving upwards and fading out, with a hue rotation effect.

### script.js

* Selects the `body` element.
* Adds a `mousemove` event listener to the `body` element.
* Inside the event listener:
    * Gets the `offsetX` and `offsetY` properties of the mouse event.
    * Creates a new `<span>` element.
    * Sets the `left` and `top` styles of the `<span>` element to position it at the mouse cursor's coordinates.
    * sets the size of the span element to a random number between 0 and 100.
    * Appends the `<span>` element to the `body` element.
    * Uses `setTimeout` to remove the `<span>` element after 3 seconds.

## Usage

1.  Open the `index.html` file in a web browser.
2.  Move the mouse cursor around the webpage to see the icon elements appear and animate.

## Dependencies

* None (pure HTML, CSS, and JavaScript).
* An internet connection is required to load the icon from the url.

## Customization

* Replace the icon URL in `style.css` to use a different icon.
* Modify the animation duration and effects in the `animate` keyframes in `style.css`.
* Adjust the size and appearance of the generated spans in `script.js`
* Change the time the spans are removed by changing the 3000 millisecond value in the setTimeout function within script.js