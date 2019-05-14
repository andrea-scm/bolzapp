$('.fa-paper-plane').click(function () {
  var inputMessage = $('.message-to-send').val();
  $('.messages').append(
  '<div class="message-container">'+
    '<div class="message utente">'+
    inputMessage +
    '</div>'+
  '</div>');
  $('.message-to-send').val('');
  //imposta lo scroll alla fine del div in modo da visualizare subito il msg inviato
  $('.messages').scrollTop($('.messages').height());
});
