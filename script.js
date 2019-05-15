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
    //messaggio di risposta
    setTimeout(function() {
      $('.messages').append(
      '<div class="message-container">'+
        '<div class="message">'+
          'ok' +
        '</div>'+
      '</div>');
      $('.messages').scrollTop($('.messages').height());
    },1000);
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
    //messaggio di risposta
    setTimeout(function() {
      $('.messages').append(
      '<div class="message-container">'+
        '<div class="message">'+
          'ok' +
        '</div>'+
      '</div>');
      $('.messages').scrollTop($('.messages').height());
    },1000);
  }
});

//var contactName = $('.contact-name > h3').text().split(/(?=[A-Z])/);

$('.search-contact-input').keypress(function (search) {
  var keyCode = (search.which);
  var searchInput = $('.search-contact-input').val().toLowerCase();
  var searchInputSplitted = searchInput.split('');
  console.log(searchInputSplitted);
  //console.log(keyCode);
  if ((keyCode > 64 && keyCode < 123) && searchInput != '') {
    
  };
});
