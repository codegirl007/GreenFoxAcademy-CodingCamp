$('ul').click((event) => {
  $(event.target).css('text-decoration', 'line-through')
})

$('button').click(() => {
  let item = $('input').val();
  let newLi = '<li>' + item + '</li>'
  $('ul').append(newLi);
})