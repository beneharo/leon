/*
 * JS for Configuracion generated by Appery.io
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


Configuracion_js = function(runBeforeShow) { /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'mobilegrid_6': 'Configuracion_mobilegrid_6',
        'mobilegridcell_7': 'Configuracion_mobilegridcell_7',
        'mobileimage_13': 'Configuracion_mobileimage_13',
        'mobilelabel_19': 'Configuracion_mobilelabel_19',
        'mobilegridcell_8': 'Configuracion_mobilegridcell_8',
        'mobileimage_14': 'Configuracion_mobileimage_14',
        'mobilelabel_20': 'Configuracion_mobilelabel_20',
        'mobilegridcell_9': 'Configuracion_mobilegridcell_9',
        'mobileimage_15': 'Configuracion_mobileimage_15',
        'mobilelabel_21': 'Configuracion_mobilelabel_21',
        'mobilegridcell_10': 'Configuracion_mobilegridcell_10',
        'mobileimage_16': 'Configuracion_mobileimage_16',
        'mobilelabel_22': 'Configuracion_mobilelabel_22',
        'mobilegridcell_11': 'Configuracion_mobilegridcell_11',
        'mobileimage_17': 'Configuracion_mobileimage_17',
        'mobilelabel_23': 'Configuracion_mobilelabel_23',
        'mobilegridcell_12': 'Configuracion_mobilegridcell_12',
        'mobileimage_18': 'Configuracion_mobileimage_18',
        'mobilelabel_24': 'Configuracion_mobilelabel_24',
        'mobilebutton_3': 'Configuracion_mobilebutton_3',
        'mobilebutton_5': 'Configuracion_mobilebutton_5',
        'mobilebutton_2': 'Configuracion_mobilebutton_2',
        'mobilebutton_4': 'Configuracion_mobilebutton_4'
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

    Appery.CurrentScreen = 'Configuracion';

    /*
     * Nonvisual components
     */
    var datasources = [];

    /*
     * Events and handlers
     */

    // Before Show
    Configuracion_beforeshow = function() {
        Appery.CurrentScreen = "Configuracion";
        for (var idx = 0; idx < datasources.length; idx++) {
            datasources[idx].__setupDisplay();
        }
    }

    // On Load
    screen_14CB_onLoad = Configuracion_onLoad = function() {
        screen_14CB_elementsExtraJS();

        // TODO fire device events only if necessary (with JS logic)
        Configuracion_deviceEvents();
        Configuracion_windowEvents();
        screen_14CB_elementsEvents();
    }

    // screen window events
    screen_14CB_windowEvents = Configuracion_windowEvents = function() {

        $('#Configuracion').bind('pageshow orientationchange', function() {
            adjustContentHeightWithPadding();
        });

    }

    // device events
    Configuracion_deviceEvents = function() {

        document.addEventListener("deviceready", function() {

        });
    }

    // screen elements extra js
    screen_14CB_elementsExtraJS = Configuracion_elementsExtraJS = function() {
        // screen (Configuracion) extra code

    }

    // screen elements handler
    screen_14CB_elementsEvents = Configuracion_elementsEvents = function() {

        $("a :input,a a,a fieldset label").live({
            click: function(event) {
                event.stopPropagation();
            }
        });
        
    }

    $("#Configuracion").die("pagebeforeshow").live("pagebeforeshow", function(event, ui) {
        Configuracion_beforeshow();
    });

    if (runBeforeShow) {
        Configuracion_beforeshow();
    } else {
        Configuracion_onLoad();
    }

}

$("#Configuracion").die("pageinit").live("pageinit", function(event, ui) {
    Appery.processSelectMenu($(this));
    Configuracion_js();
});