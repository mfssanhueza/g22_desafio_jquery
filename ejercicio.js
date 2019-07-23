$(document).ready(function () {
  $('#boton').on('click', function () {
    var campo_selector = $('#camposelector').val();
    if (campo_selector === '') {
      alert('debe ingresar un selector jQuery')
    } else {
      var identificador = (campo_selector.split("\"")[1]);
      var contador = $(identificador).length;

      if ($(identificador).length > 0) {
        $(identificador).css('background', 'yellow');
        eval(campo_selector);
        $('.historial').append(identificador)
        $('.historial').append('<br>');
        $('.seleccionados').append(contador);
        $('.seleccionados').append('<br>');
        $('#camposelector').val('');



      } else {
        alert('ingrese un selector valido para operar ');
      }

    }
  });

});
