/*
 * JS for Calendario generated by Appery.io
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
    "name": "Busqueda",
    "location": "Busqueda.html"
}, {
    "name": "Eventos",
    "location": "Eventos.html"
}, {
    "name": "Calendario",
    "location": "Calendario.html"
}, {
    "name": "Configuracion",
    "location": "Configuracion.html"
}, {
    "name": "Perfil",
    "location": "Perfil.html"
}, {
    "name": "Amigos",
    "location": "Amigos.html"
}, {
    "name": "Login",
    "location": "Login.html"
}];


Calendario_js = function(runBeforeShow) { /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'mobilegrid_6': 'Calendario_mobilegrid_6',
        'mobilegridcell_7': 'Calendario_mobilegridcell_7',
        'mobileimage_13': 'Calendario_mobileimage_13',
        'mobilelabel_19': 'Calendario_mobilelabel_19',
        'mobilegridcell_8': 'Calendario_mobilegridcell_8',
        'mobileimage_14': 'Calendario_mobileimage_14',
        'mobilelabel_20': 'Calendario_mobilelabel_20',
        'mobilegridcell_9': 'Calendario_mobilegridcell_9',
        'mobileimage_15': 'Calendario_mobileimage_15',
        'mobilelabel_21': 'Calendario_mobilelabel_21',
        'mobilegridcell_10': 'Calendario_mobilegridcell_10',
        'mobileimage_16': 'Calendario_mobileimage_16',
        'mobilelabel_22': 'Calendario_mobilelabel_22',
        'mobilegridcell_11': 'Calendario_mobilegridcell_11',
        'mobileimage_17': 'Calendario_mobileimage_17',
        'mobilelabel_23': 'Calendario_mobilelabel_23',
        'mobilegridcell_12': 'Calendario_mobilegridcell_12',
        'mobileimage_18': 'Calendario_mobileimage_18',
        'mobilelabel_24': 'Calendario_mobilelabel_24',
        'mobilebutton_3': 'Calendario_mobilebutton_3',
        'mobilebutton_5': 'Calendario_mobilebutton_5',
        'mobilebutton_2': 'Calendario_mobilebutton_2',
        'mobilebutton_4': 'Calendario_mobilebutton_4'
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

    Appery.CurrentScreen = 'Calendario';

    /*
     * Nonvisual components
     */
    var datasources = [];

    /*
     * Events and handlers
     */

    // Before Show
    Calendario_beforeshow = function() {
        Appery.CurrentScreen = "Calendario";
        for (var idx = 0; idx < datasources.length; idx++) {
            datasources[idx].__setupDisplay();
        }
    }

    // On Load
    screen_14CB_onLoad = Calendario_onLoad = function() {
        screen_14CB_elementsExtraJS();

        // TODO fire device events only if necessary (with JS logic)
        Calendario_deviceEvents();
        Calendario_windowEvents();
        screen_14CB_elementsEvents();
    }

    // screen window events
    screen_14CB_windowEvents = Calendario_windowEvents = function() {

        $('#Calendario').bind('pageshow orientationchange', function() {
            adjustContentHeightWithPadding();
        });

    }

    // device events
    Calendario_deviceEvents = function() {

        document.addEventListener("deviceready", function() {

        });
    }

    // screen elements extra js
    screen_14CB_elementsExtraJS = Calendario_elementsExtraJS = function() {
        // screen (Calendario) extra code

    }

    // screen elements handler
    screen_14CB_elementsEvents = Calendario_elementsEvents = function() {

        $("a :input,a a,a fieldset label").live({
            click: function(event) {
                event.stopPropagation();
            }
        });
        
    }

    $("#Calendario").die("pagebeforeshow").live("pagebeforeshow", function(event, ui) {
        Calendario_beforeshow();
    });

    if (runBeforeShow) {
        Calendario_beforeshow();
    } else {
        Calendario_onLoad();
    }

}

$("#Calendario").die("pageinit").live("pageinit", function(event, ui) {
    Appery.processSelectMenu($(this));
    Calendario_js();
});
