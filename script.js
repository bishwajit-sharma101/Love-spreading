
// selected and stored the body element in a variable
const bodyEl = document.querySelector('body');

// added an event listener to the body element
bodyEl.addEventListener('mousemove',(event)=>
{
    // stored the x and y position of the mouse pointer 
    //in variables
    const xPos = event.offsetX;
    const yPos = event.offsetY;
    //creating a new element of span and storing it 
    //in a variable
    const SpanEl = document.createElement("span");
    //setting the position of the span element
    SpanEl.style.left = xPos + 'px';
    SpanEl.style.top = yPos + 'px';
    //setting the size of the span element
    const size = Math.random() * 100;
    SpanEl.style.width = size + 'px';
    SpanEl.style.height = size + 'px';
    //appending the span element to the body element
    bodyEl.appendChild(SpanEl);
    //removing the span element after 3 seconds
    setTimeout(() => {
        SpanEl.remove();
    }, 3000);
})