//Script qui permet d'afficher un effet modal lorsque l'utilisateur click sur une image de la section "projets"

$(document).ready(function () {

  $('.imagen-proyecto').on('click', function () { 

    var rutaImagen = $(this).attr('src');
    var modal = '<div class="modal" id="modal"><img src="'+ rutaImagen +'" alt=""><div class="btn-cerrar" id="btnCerrar"><i class="fa fa-times" aria-hidden="true"></i></div></div>';
    $('#projets').after(modal);

    $('#btnCerrar').on('click', function () {
      $('#modal').remove();
    })
  })

  $(document).on('keyup', function (e) {
    if (e.which==27) { 
      $('#modal').remove();
    }
  })

});
