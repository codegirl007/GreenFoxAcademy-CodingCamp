// Create a webpage
// Add a button to the body
// Insert jQuery
// Add a script at the end of the body
// Add an event listener to the button
// Log 'Yeah, you clicked me' to the console when the user clicks on the button

$('#first').click(() => {
  console.log('Yeah, you clicked me')
})

// Add another button to the webpage
// When the user clicks on the second button change the first button's text

$('#second').click(() => {
  $('#first').text('You clicked on second button!');
})

// Add a third button to the webpage
// When the user clicks on the last button, change the background-color of each button

$('#third').click(() => {
  $('button').css('background-color', 'yellow').css('color', 'darkblue').css('border-color', 'darkblue')
}
)
