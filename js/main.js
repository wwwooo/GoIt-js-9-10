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
});
