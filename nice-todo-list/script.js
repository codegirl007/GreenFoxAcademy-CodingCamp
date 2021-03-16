$('button').click(() => {
  let item = $('input').val();
  let newLi = '<li>' + item + '<button class="check-white"></button><button class="delete"></button></li>'
  $('ul').append(newLi); 
})

$(document).on("click", ".check-white", function(event) {
  $(this).parent().css('color', 'lightgrey');
  $(event.target).removeClass('check-white').addClass('check-purple');
});

$(document).on("click", ".delete", function() {
    $(this).parent().remove();
});