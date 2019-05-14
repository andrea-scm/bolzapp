$('.fa-paper-plane').click(function () {
  var inputMessage = $('.message-to-send').val();
  if (inputMessage != '') {
    $('.messages').append(
    '<div class="message-container">'+
      '<div class="message utente">'+
      inputMessage +
      '</div>'+
    '</div>');
    $('.message-to-send').val('');
    //imposta lo scroll alla fine del div in modo da visualizare subito il msg inviato
    $('.messages').scrollTop($('.messages').height());
  }
});


$('.message-to-send').keypress(function (enter) {
  var inputMessage = $('.message-to-send').val();
  /*salvo in una variabile il codice del tasto premuto
  il quale viene riconosciuto dalla funzione .which*/
  var keyCode = (enter.which);
  //se il tasto premuto è = 13,ovvero Invio,allora mando il messaggio
  if (keyCode == '13' && inputMessage != '') {
    $('.messages').append(
    '<div class="message-container">'+
      '<div class="message utente">'+
      inputMessage +
      '</div>'+
    '</div>');
    $('.message-to-send').val('');
    //imposta lo scroll alla fine del div in modo da visualizare subito il msg inviato
    $('.messages').scrollTop($('.messages').height());
  }
});
