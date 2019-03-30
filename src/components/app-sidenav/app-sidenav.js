var slideNav = this;

$(slideNav)
  .find('.app-sidenav-menu-item')
  .children('a')
  .click(function() {
    var selectedSubMenu = $(this)
      .closest('.app-sidenav-menu-item')
      .find('.app-sidenav-sub-menu');

    if ($(selectedSubMenu).css('display') === 'none') {
      $('.app-sidenav-sub-menu').slideUp();
      selectedSubMenu.slideDown();
    }

    $(slideNav).removeClass('is-compact');
  });
