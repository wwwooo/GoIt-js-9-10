var changeCheck = function(span) {
    var ch = span.find('input');
    if (ch.attr('class').indexOf('niceCheckDisabled') === -1) {
        if (!ch.attr('checked')) {
            span.addClass('niceChecked');
            ch.attr('checked', true);
        } else {
            span.removeClass('niceChecked');
            ch.attr('checked', false).focus();
        }
    }
};

var changeVisualCheck = function(ch) {
    if (!ch.attr('checked')) {
        ch.parent().addClass('niceChecked');
    } else {
        ch.parent().removeClass('niceChecked');
    }
};

var changeCheckStart = function(ch) {
    ch.wrap('<span class="niceCheck"></span>');
    var checkChecked = ch.attr('checked');
    var checkDisabled = ch.attr('disabled');

    if (checkChecked) {
        ch.parent().addClass('niceChecked');
    }

    if (checkDisabled) {
        ch.parent().addClass('niceCheckDisabled');
    }

    ch.parent().on('click', function() {
        changeCheck($(this));
    });

    ch.on('change', function() {
        changeVisualCheck($(this));
    });
};

$(function() {
    $('select').selectric();

    $('.niceCheck').each(function() {
        changeCheckStart($(this));
    });
});
