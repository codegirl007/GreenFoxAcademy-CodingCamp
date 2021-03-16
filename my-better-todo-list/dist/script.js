$('button').click(() => {
  let item = $('input').val();
  let newLi = '<li>' + item + '<button class="delete"></button></li>'
  $('ul').append(newLi); 
})

$(document).on("click", ".delete", function() {
    $(this).parent().remove();
});