/*
 * JS for Amigos generated by Appery.io
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


Amigos_js = function(runBeforeShow) { /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'mobilegrid_6': 'Amigos_mobilegrid_6',
        'mobilegridcell_7': 'Amigos_mobilegridcell_7',
        'mobileimage_13': 'Amigos_mobileimage_13',
        'mobilelabel_19': 'Amigos_mobilelabel_19',
        'mobilegridcell_8': 'Amigos_mobilegridcell_8',
        'mobileimage_14': 'Amigos_mobileimage_14',
        'mobilelabel_20': 'Amigos_mobilelabel_20',
        'mobilegridcell_9': 'Amigos_mobilegridcell_9',
        'mobileimage_15': 'Amigos_mobileimage_15',
        'mobilelabel_21': 'Amigos_mobilelabel_21',
        'mobilegridcell_10': 'Amigos_mobilegridcell_10',
        'mobileimage_16': 'Amigos_mobileimage_16',
        'mobilelabel_22': 'Amigos_mobilelabel_22',
        'mobilegridcell_11': 'Amigos_mobilegridcell_11',
        'mobileimage_17': 'Amigos_mobileimage_17',
        'mobilelabel_23': 'Amigos_mobilelabel_23',
        'mobilegridcell_12': 'Amigos_mobilegridcell_12',
        'mobileimage_18': 'Amigos_mobileimage_18',
        'mobilelabel_24': 'Amigos_mobilelabel_24',
        'mobilebutton_3': 'Amigos_mobilebutton_3',
        'mobilebutton_5': 'Amigos_mobilebutton_5',
        'mobilebutton_2': 'Amigos_mobilebutton_2',
        'mobilebutton_4': 'Amigos_mobilebutton_4'
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

    Appery.CurrentScreen = 'Amigos';

    /*
     * Nonvisual components
     */
    var datasources = [];

    /*
     * Events and handlers
     */

    // Before Show
    Amigos_beforeshow = function() {
        Appery.CurrentScreen = "Amigos";
        for (var idx = 0; idx < datasources.length; idx++) {
            datasources[idx].__setupDisplay();
        }
    }

    // On Load
    screen_14CB_onLoad = Amigos_onLoad = function() {
        screen_14CB_elementsExtraJS();

        // TODO fire device events only if necessary (with JS logic)
        Amigos_deviceEvents();
        Amigos_windowEvents();
        screen_14CB_elementsEvents();
    }

    // screen window events
    screen_14CB_windowEvents = Amigos_windowEvents = function() {

        $('#Amigos').bind('pageshow orientationchange', function() {
            adjustContentHeightWithPadding();
        });

    }

    // device events
    Amigos_deviceEvents = function() {

        document.addEventListener("deviceready", function() {

        });
    }

    // screen elements extra js
    screen_14CB_elementsExtraJS = Amigos_elementsExtraJS = function() {
        // screen (Amigos) extra code

    }

    // screen elements handler
    screen_14CB_elementsEvents = Amigos_elementsEvents = function() {

        $("a :input,a a,a fieldset label").live({
            click: function(event) {
                event.stopPropagation();
            }
        });
        
    }

    $("#Amigos").die("pagebeforeshow").live("pagebeforeshow", function(event, ui) {
        Amigos_beforeshow();
    });

    if (runBeforeShow) {
        Amigos_beforeshow();
    } else {
        Amigos_onLoad();
    }

}

$("#Amigos").die("pageinit").live("pageinit", function(event, ui) {
    Appery.processSelectMenu($(this));
    Amigos_js();
});
