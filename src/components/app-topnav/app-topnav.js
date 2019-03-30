$(this)
  .find('.btn')
  .click(function() {
    $('.app-sidenav-sub-menu').slideUp();
    $('.app-sidenav').toggleClass('is-compact');
  });
