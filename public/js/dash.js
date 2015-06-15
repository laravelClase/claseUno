function showView(id,clases){
  console.debug(id+'    '+ clases);
  $('.'+clases).hide();
  $('#'+id).show();
}

function addClassActive(id) {
    $('.nav-sidebar > li').removeClass('active');
    $('.nav-sidebar > li#' + id).addClass('active');
}