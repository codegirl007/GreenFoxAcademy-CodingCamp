// Get your solution of the fourth exercise from the html day
// Create and include a scripts.js file just like before
// Create an array with random names and yours
// Using forEach to add each name to the <ul> list
// (Optional) Your name should be bold

/*==Exercise1==*/

const names = ['Pavel', 'Pepa', 'Hang', 'Jana', 'Leoš']

names.forEach((name)=>{
  if (name==="Jana"){
    $('ul').append('<li><strong>'+ name +'</strong></li>');
  } else {
  $('ul').append('<li>'+ name +'</li>');}
})

/*==Exercise2==*/

let additionalBlock = {
  title: "Added with javascript",
  text: "This block was added using Javascript's jQuery library. How awesome!"
}

$('body').append('<h1>'+ additionalBlock['title'] + '</h1>')

$('body').append('<p>'+ additionalBlock.text + '</p>')