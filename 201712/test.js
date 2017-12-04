$(function() {
  $('#receive-money').on('click', '.toggle > button', function () {
    var $el = $(this);
    if ($el.attr('data-state') === 'active') {
      $el.attr('data-state', 'inactive');
    } else {
      $el.attr('data-state', 'active');
    }
    $el.parent().next().slideToggle();
  })
});
