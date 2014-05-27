
function initSQLPopups() {
    $('div.popup_sql').hide();
    $('a.sql_link').click(function() {
        $(this).nextAll('div.popup_sql:first').toggle();
        return false;
    });
}

var automatedBreakpoint = -1;

function initFloatyThings() {

    automatedBreakpoint = $("#docs-container").position().top;

    parentOffset = $("#docs-container").parent().position().top - $("#docs-container").position().top;
    $("#docs-top-navigation-container").addClass("preautomated");
    $("#docs-sidebar").addClass("preautomated");
    $("#docs-container").addClass("preautomated");

    function setNavSize() {
        $("#docs-top-navigation-container").css("width", $("#docs-container").width());
    }

    function setScroll() {

        var scrolltop = $(window).scrollTop();
        if (scrolltop >= automatedBreakpoint) {
            setNavSize();
            $("#docs-top-navigation-container").addClass("automated");
            $("#docs-sidebar").addClass("automated");

            // note this height is dependent on docs-top-navigation-container
            // being position:fixed or absolute, otherwise it might get
            // a little squashed
            containerHeight = $("#docs-top-navigation-container").height();
            $("#docs-body").css("margin-top", containerHeight - parentOffset + 1);
        }
        else {
            $("#docs-sidebar.automated").scrollTop(0);
            $("#docs-sidebar").removeClass("automated");
            $("#docs-top-navigation-container").removeClass("automated");
            $("#docs-body").css("margin-top", "");
        }


    }
    $(window).scroll(setScroll)

    $(window).resize(setNavSize());
    setScroll();
}


$(document).ready(function() {
    initSQLPopups();
    if (!$.browser.mobile) {
        initFloatyThings();
    }
});

