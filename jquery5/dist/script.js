// Add an input to your previous webpage
// Its default value should be "blue"
// When the user clicks on the last button
// Read the desired color from the input
// Change the buttons' background-color to the given color
// Try it with different colors


// // EXERCISE 1
// $('#third').click(() => {
//   let color =  $('input').val()
//   $('button').css('background-color', color)
// })

/*== EXERCISE 2 ==*/
// Now your previous application changes the buttons' color whenever the input vale has changed and you clicked on the last button
// Change the behavior by ignoring all the clicks after the first one. So even if the input has changed, keep the previous color if it has already changed once.

$('#third').click(() => {
  let color =  $('input').attr('value');
  $('button').css('background-color', color)
})