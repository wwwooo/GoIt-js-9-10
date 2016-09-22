var changeVisualCheck = function(cbx, parent) {
    if (cbx.attr('checked')) {
        parent.removeClass('niceChecked');
        cbx.attr('checked', false);
    } else {
        parent.addClass('niceChecked');
        cbx.attr('checked', true);
    }
};

var changeCheckStart = function(cbx) {
    cbx.wrap('<span class="niceCheck"></span>');
    var parent = cbx.parent();

    if (cbx.attr('checked')) {
        parent.addClass('niceChecked');
    }
    if (cbx.attr('disabled')) {
        parent.addClass('niceCheckDisabled');
    }

    cbx.on('change', function() {
        changeVisualCheck($(this), parent);
    });
};

$(function() {
    $('select').selectric();

    $('.cbx').each(function() {
        changeCheckStart($(this));
    });

    $('.main-menu__item > a').not('.main-menu__item > a:last-child').addClass('main-menu__link-with-submenu');
    $('.submenu__item > a').not('.submenu__item > a:last-child').addClass('submenu__link-with-submenu');

    $('.menu__item').hover(
        function() {
            var $menuItem = $(this);
            $menuItem.children('a').animate({
                color: '#000'
            }, 100);
            $menuItem.children('.submenu').show();
        },
        function() {
            var $menuItem = $(this);
            $menuItem.children('a').animate({
                color: '#fff'
            }, 100);
            $menuItem.children('.submenu').hide();
        }
    );
});
