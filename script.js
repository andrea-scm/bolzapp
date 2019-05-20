//Milestone 1: invio messaggio  + risposta 'ok'(milestone 2)
$('.fa-paper-plane').click(function () {
  var inputMessage = $('.message-to-send').val();
  var sendMessage = '<div class="message-container">'+'<div class="message utente">'+dropdown+inputMessage +'</div>'+  '</div>';
  var replyMessage = '<div class="message-container">'+'<div class="message">'+dropdown+'ok' +'</div>'+'</div>';
  var nomeContatto = $('.contact-name-menu > h3').text();
  if (inputMessage != '') {
    $('.messages').append(sendMessage);
    //in questo modo appendo il messaggio inviato anche al mio oggetto conversazioni
    //in modo che viene salvato
    for (var i = 0; i < conversazioni.length; i++) {
      if (nomeContatto == conversazioni[i].contatto) {
      conversazioni[i].conversazione+=sendMessage;
      }
    };
    //imposta lo scroll alla fine del div in modo da visualizare subito il msg inviato
    $('.messages').scrollTop($('.messages')[0].scrollHeight);
    //messaggio di risposta
    setTimeout(function() {
      $('.messages').append(replyMessage);
      //in questo modo appendo il messaggio di risposta anche al mio oggetto conversazioni
      //in modo che viene salvato
      for (var i = 0; i < conversazioni.length; i++) {
        if (nomeContatto == conversazioni[i].contatto) {
        conversazioni[i].conversazione+=replyMessage;
        }
      };
      $('.messages').scrollTop($('.messages')[0].scrollHeight);
    },1000);
  }
});


$('.message-to-send').keypress(function (enter) {
  var inputMessage = $('.message-to-send').val();
  var sendMessage = '<div class="message-container">'+'<div class="message utente">'+dropdown+inputMessage +'</div>'+  '</div>';
  var replyMessage = '<div class="message-container">'+'<div class="message">'+dropdown+'ok' +'</div>'+'</div>';
  /*salvo in una variabile il codice del tasto premuto
  il quale viene riconosciuto dalla funzione .which*/
  var keyCode = (enter.which);
  //se il tasto premuto è = 13,ovvero Invio,allora mando il messaggio
  if (keyCode == '13' && inputMessage != '') {
    var nomeContatto = $('.contact-name-menu > h3').text();
    $('.messages').append(sendMessage);
    //in questo modo appendo il messaggio inviato anche al mio oggetto conversazioni
    //in modo che viene salvato
    for (var i = 0; i < conversazioni.length; i++) {
      if (nomeContatto == conversazioni[i].contatto) {
      conversazioni[i].conversazione+=sendMessage;
      }
    };
    $('.message-to-send').val('');
    //imposta lo scroll alla fine del div in modo da visualizare subito il msg inviato
    $('.messages').scrollTop($('.messages')[0].scrollHeight);
    //messaggio di risposta
    setTimeout(function() {
      $('.messages').append(replyMessage);
      //in questo modo appendo il messaggio di risposta anche al mio oggetto conversazioni
      //in modo che viene salvato
      for (var i = 0; i < conversazioni.length; i++) {
        if (nomeContatto == conversazioni[i].contatto) {
        conversazioni[i].conversazione+=replyMessage;
        }
      };
      $('.messages').scrollTop($('.messages')[0].scrollHeight);
    },1000);
  }
});

//Milestone 2:filtro ricerca
$('.search-contact-input').keyup(function (search) {
  var searchInput = $(this).val().toLowerCase();
  //console.log(searchInput);
  var keyCode = (search.which);
  //console.log(keyCode);
  if (((keyCode > 64 && keyCode < 123) || keyCode == 8) && searchInput != '') {
    $('.contact').each(function () {
      var contactName = $(this).find('.contact-name > h3').text().toLowerCase();
      //console.log(name);
      //se il contactName corrente include il carattere/i caratteri correnti dell'input
      //allora mostro i contactName che includono quei caratteri altrimenti nascondo
      //il contact corrente
      if (contactName.includes(searchInput)) {
        $(this).show();
      }
      else {
        $(this).hide();
      };
    });
  }else {
    $('.contact').show(); //rimostro i contatti
  };
});

//Milestone 3: cambia conversazione in base al contatto + rimuovi messaggio
var dropdown ='<i class="fas fa-chevron-down"></i>'+'<div class="dropdown-menu">'+'<div class="dropdown-menu-item">'+'Elimina messaggio'+'</div>'+'</div>';

var conversazioni = [
  {
  'contatto': 'Andrea',
  'conversazione':'<div class="message-container">'+
  '<div class="message utente">'+
    dropdown +'Ciao'+
    '</div>'+
  '</div>'
  +
  '<div class="message-container">'+
    '<div class="message">'+
      dropdown +
      'Ehi'+
    '</div>'+
  '</div>'+

  '<div class="message-container">'+
    '<div class="message utente">'+
      dropdown +
      'ti va di fare un giro in centro?'+
    '</div>'+
  '</div>'
  },
  {
    'contatto': 'Marco',
    'conversazione': '<div class="message-container">'+
    '<div class="message utente">'+
      dropdown +'Ehi'+
      '</div>'+
    '</div>'
    +
    '<div class="message-container">'+
      '<div class="message">'+
        dropdown +
        'Ciao dimmi'+
      '</div>'+
    '</div>'+

    '<div class="message-container">'+
      '<div class="message utente">'+
        dropdown +
        'ti va di andare a bere qualcosa?'+
      '</div>'+
    '</div>'
  },
  {
    'contatto': 'Maria',
    'conversazione': '<div class="message-container">'+
    '<div class="message utente">'+
      dropdown +'Ciao,pensavo di andare al cinema a vedere la nuova uscita Marvel,ti andrebbe di venire?'+
      '</div>'+
    '</div>'
    +
    '<div class="message-container">'+
      '<div class="message">'+
        dropdown +
        'Certo! Adoro i film Marvel!'+
      '</div>'+
    '</div>'+

    '<div class="message-container">'+
      '<div class="message utente">'+
        dropdown +
        'Perfetto,allora ti passo a prendere più tardi'+
      '</div>'+
    '</div>'
  },
  {
    'contatto': 'Luigi',
    'conversazione': '<div class="message-container">'+
    '<div class="message utente">'+
      dropdown +'Ciao,come va?'+
      '</div>'+
    '</div>'
    +
    '<div class="message-container">'+
      '<div class="message">'+
        dropdown +
        'Tutto bene'+
      '</div>'+
    '</div>'
  },
  {
    'contatto': 'Luisa',
    'conversazione': '<div class="message-container">'+
    '<div class="message utente">'+
      dropdown +'Ehi Luisa puoi passare al supermercato a prendere del vino?'+
      '</div>'+
    '</div>'
    +
    '<div class="message-container">'+
      '<div class="message">'+
        dropdown +
        'Certamente,passo appena finisco da lavoro'+
      '</div>'+
    '</div>'+

    '<div class="message-container">'+
      '<div class="message utente">'+
        dropdown +
        'Grazie mille!'+
      '</div>'+
    '</div>'
  },
  {
    'contatto': 'Fabrizio',
    'conversazione': '<div class="message-container">'+
    '<div class="message utente">'+
      dropdown +'Ehi Fabrizio'+
      '</div>'+
    '</div>'
    +
    '<div class="message-container">'+
      '<div class="message">'+
        dropdown +
        'Ciao dimmi'+
      '</div>'+
    '</div>'+

    '<div class="message-container">'+
      '<div class="message utente">'+
        dropdown +
        'Potresti passare a prendermi per scendere al mare'+
      '</div>'+
    '</div>'+
    '<div class="message-container">'+
      '<div class="message">'+
        dropdown +
        'Certo,nessun problema!'+
      '</div>'+
    '</div>'
  },
  {
    'contatto': 'Federica',
    'conversazione': '<div class="message-container">'+
    '<div class="message utente">'+
      dropdown +'Ciao Fede'+
      '</div>'+
    '</div>'
    +
    '<div class="message-container">'+
      '<div class="message">'+
        dropdown +
        'Ehi'+
      '</div>'+
    '</div>'+

    '<div class="message-container">'+
      '<div class="message utente">'+
        dropdown +
        'ti va se pomeriggio studiamo assieme?'+
      '</div>'+
    '</div>'
  },
  {
    'contatto': 'Umberto',
    'conversazione': '<div class="message-container">'+
    '<div class="message utente">'+
      dropdown +'Ehi'+
      '</div>'+
    '</div>'
    +
    '<div class="message-container">'+
      '<div class="message">'+
        dropdown +
        'Ciao'+
      '</div>'+
    '</div>'+

    '<div class="message-container">'+
      '<div class="message utente">'+
        dropdown +
        'sei disponibile domani per un pranzo insieme ai colleghi?'+
      '</div>'+
    '</div>'
  },
  {
    'contatto': 'Leonardo',
    'conversazione': '<div class="message-container">'+
    '<div class="message utente">'+
      dropdown +'Ehi'+
      '</div>'+
    '</div>'
    +
    '<div class="message-container">'+
      '<div class="message">'+
        dropdown +
        'Ciao dimmi'+
      '</div>'+
    '</div>'+

    '<div class="message-container">'+
      '<div class="message utente">'+
        dropdown +
        'domani ci sta un concerto di una nuova band pop punk,ti va di andare a vederli?'+
      '</div>'+
    '</div>'+
    '<div class="message-container">'+
      '<div class="message">'+
        dropdown +
        'Volentieri!'+
      '</div>'+
    '</div>'
  },
  {
    'contatto': 'Giada',
    'conversazione': '<div class="message-container">'+
    '<div class="message utente">'+
      dropdown +'Ehi'+
      '</div>'+
    '</div>'
    +
    '<div class="message-container">'+
      '<div class="message">'+
        dropdown +
        'Ciao dimmi'+
      '</div>'+
    '</div>'+

    '<div class="message-container">'+
      '<div class="message utente">'+
        dropdown +
        'non so più cosa inventare'+
      '</div>'+
    '</div>'
  }
];

$('.contact').click(function () {
  var nomeContatto = $(this).find('.contact-name > h3').text();
  var prevContactSelected = $(this).siblings('.contact.light-gray');
  //console.log(nomeContatto,conversazioni);
  for (var i = 0; i < conversazioni.length; i++) {
    //console.log(conversazioni[i].conversazione)
    //console.log(conversazioni[i].contatto);
    if (nomeContatto == conversazioni[i].contatto) {
      $('.contact-name-menu > h3').text(conversazioni[i].contatto);
      $('.messages').html(conversazioni[i].conversazione);
    }
  }
  $(this).toggleClass('light-gray');
  $(prevContactSelected).removeClass('light-gray');
  $('.messages').scrollTop($('.messages')[0].scrollHeight);
  $('.message-to-send').val('');
});

$(document).on('mouseenter mouseleave','.message',function () {
  $(this).children('i').toggleClass('active');
  $('.fa-chevron-down').click(function () {
    $(this).siblings('.dropdown-menu').toggleClass('active');
  })
  $('.dropdown-menu-item').click(function () {
    $(this).parents('.message-container').remove();
  });
});
