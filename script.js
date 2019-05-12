$(function () {
  $('.cbFilter').prop('checked', true);
  $('.cbFilter').click(function () { filter(); });

  function filter() {
    $('.subCont').css('display', 'flex');
    if ($('#checkboxA').prop('checked') === false) {
      $('.A').css('display', 'none');
    }
    if ($('#checkboxB').prop('checked') === false) {
      $('.B').css('display', 'none');
    }
    if ($('#checkboxC').prop('checked') === false) {
      $('.C').css('display', 'none');
    }
    if ($('#checkboxMale').prop('checked') === false) {
      $('.male').css('display', 'none');
    }
    if ($('#checkboxFemale').prop('checked') === false) {
      $('.female').css('display', 'none');
    }
  }
});