/*
 * JS for Splash generated by Appery.io
 *
 */

Appery.getProjectGUID = function() {
    return 'e7466853-2ac3-48d5-a5d1-6bf491ec4579';
}

function navigateTo(outcome, useAjax) {
    Appery.navigateTo(outcome, useAjax);
}

function adjustContentHeight() {
    Appery.adjustContentHeight();
}

function adjustContentHeightWithPadding() {
    Appery.adjustContentHeightWithPadding();
}

function setDetailContent(pageUrl) {
    Appery.setDetailContent(pageUrl);
}

Appery.AppPages = [{
    "name": "Home",
    "location": "Home.html"
}, {
    "name": "Splash",
    "location": "Splash.html"
}, {
    "name": "Login",
    "location": "Login.html"
}];

Splash_js = function(runBeforeShow) { /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'mobileimage_1': 'Splash_mobileimage_1',
        'mobilebutton_2': 'Splash_mobilebutton_2'
    };

    if ("n2id" in window && window.n2id !== undefined) {
        $.extend(n2id, n2id_buf);
    } else {
        window.n2id = n2id_buf;
    }

    if (navigator.userAgent.indexOf("IEMobile") != -1) {
        //Fixing issue https://github.com/jquery/jquery-mobile/issues/5424 on Windows Phone
        $("div[data-role=page] div[data-role=footer]").css("bottom", "-36px");
    }

    if (Appery.getTargetPlatform == "I") {
        $.each(window.n2id, function(name, id) {
            var elApperyRole = $("#" + id).attr("data-role");
            if (elApperyRole != "appery_label" && elApperyRole != "appery_link") {
                var appleDataSelector = "#" + id + "[x-apple-data-detectors], #" + id + " [x-apple-data-detectors]";
                $(appleDataSelector).attr("x-apple-data-detectors", "false");
            }
        });
    }

    Appery.CurrentScreen = 'Splash';

    /*
     * Nonvisual components
     */
    var datasources = [];

    /*
     * Events and handlers
     */

    // Before Show
    Splash_beforeshow = function() {
        Appery.CurrentScreen = "Splash";
        for (var idx = 0; idx < datasources.length; idx++) {
            datasources[idx].__setupDisplay();
        }
    }

    // On Load
    screen_B0CB_onLoad = Splash_onLoad = function() {
        screen_B0CB_elementsExtraJS();

        // TODO fire device events only if necessary (with JS logic)
        Splash_deviceEvents();
        Splash_windowEvents();
        screen_B0CB_elementsEvents();
    }

    // screen window events
    screen_B0CB_windowEvents = Splash_windowEvents = function() {

        $('#Splash').bind('pageshow orientationchange', function() {
            adjustContentHeightWithPadding();
        });

    }

    // device events
    Splash_deviceEvents = function() {

        document.addEventListener("deviceready", function() {

        });
    }

    // screen elements extra js
    screen_B0CB_elementsExtraJS = Splash_elementsExtraJS = function() {
        // screen (Splash) extra code

    }

    // screen elements handler
    screen_B0CB_elementsEvents = Splash_elementsEvents = function() {

        $("a :input,a a,a fieldset label").live({
            click: function(event) {
                event.stopPropagation();
            }
        });

        $('#Splash_mobilefooter [name="mobilebutton_2"]').die().live({
            click: function() {
                if (!$(this).attr('disabled')) {
                    Appery.navigateTo('Login', {
                        transition: 'slide',
                        reverse: false
                    });

                }
            },
        });

    }

    $("#Splash").die("pagebeforeshow").live("pagebeforeshow", function(event, ui) {
        Splash_beforeshow();
    });

    if (runBeforeShow) {
        Splash_beforeshow();
    } else {
        Splash_onLoad();
    }

}

$("#Splash").die("pageinit").live("pageinit", function(event, ui) {
    Appery.processSelectMenu($(this));
    Splash_js();
});