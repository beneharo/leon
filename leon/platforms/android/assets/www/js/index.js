/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var SERVIDOR = "http://programandocotufas.xtrweb.com/proyectoleon/";
var idUsuario = 2;
var idUbicacion;
var GPSlatitud;
var GPSlongitud;

document.addEventListener("deviceready", onDeviceReady, false);

// Cordova is ready
function onDeviceReady() {
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
}

// Convertir fecha a formato MySQL
function ISODateString(d) {
    function pad(n) {
        return n < 10 ? '0' + n : n;
    }
    return d.getUTCFullYear() + '-' + pad(d.getUTCMonth() + 1) + '-'
            + pad(d.getUTCDate()) + ' ' + pad(d.getUTCHours()) + ':'
            + pad(d.getUTCMinutes()) + ':' + pad(d.getUTCSeconds());
}

function login() {
    $.ajax({
        async : true,
        data : {
            usuario : $('#Login_in_usuario').val(),
            pass : $('#Login_in_password').val()
        },
        url : "http://programandocotufas.xtrweb.com/proyectoleon/login.php",
        type : "post",
        dataType : "json",
        success : function(jsondata) {
            if (jsondata[0].id) {
                // alert($('#Login_in_usuario').val() + " se ha validado
                // correctamente.");
                window.location.href = "Home.html";
                idUsuario = jsondata[0].id;
                alert(idUsuario);
            } else {
                alert("Usuario / contraseña incorrecto/s.");
            }
        },
        error : function() {
            alert('Error. No se ha podido');
        }
    });

}

// Acierto en la lectura GPS.
var onSuccess = function(position) {
    GPSlatitud = position.coords.latitude;
    GPSlongitud = position.coords.longitude;
};

// Fallo en la lectura GPS.
function onError(error) {
    alert('code: ' + error.code + '\n' + 'message: ' + error.message + '\n');
}

function asistirEvento(ide) {
    $.ajax({
                async : true,
                data : {
                    idUsuario : idUsuario,
                    ide : ide
                },
                url : "http://programandocotufas.xtrweb.com/proyectoleon/asistirEvento.php",
                type : "post",
                dataType : "json",
                success : function() {
                    $("#li_" + ide).hide();
                    alert('Se ha registrado su elección.');
                    $('#info').popup("close");
                },
                error : function() {
                    alert('Error. No se ha podido realizar la acción.');
                }
            });

}

function info(ide, descripcion) {
	$('#txt_descripcion').html(decodeURI(descripcion));
    $('#bt_asistir').val(ide);
    $('#info').popup("open");
}

function recibirDatos() {
    var fecha = new Date();
    $.ajax({
        async : false,
        data : {
            idUsuario : 2,
            fechaActual : ISODateString(fecha)
        },
        url : "http://programandocotufas.xtrweb.com/proyectoleon/php/leonRecibirDatos.php",
        type : "post",
        dataType : "json",
        success : function(jsondata) {
            
        	var code;
            var event;
            var descripcion;
        	for (i = 0; i < jsondata.length - 1; i++) {
        		descripcion = encodeURI(jsondata[i].descripcion);
        		event = 'onclick="info(\''
                    + jsondata[i].ide
                    + '\', \''
                    + descripcion
                    + '\');return false;"';
        		code = '<li id="li_'
        			+ jsondata[i].ide
        			+ '"><a href="#"><img src="'
                    + SERVIDOR
                    + 'images/default.jpg" width="100" height="100"/><h1>'
                    + jsondata[i].nombreEvento
                    + '</h1></a><a href="#" '
                    + event
                    + '></a>' + '</li>';
        		
        		$('#lista_eventos').append(code);
            }
        },
        error : function() {
            alert('Error. No se ha podido acceder a la información.');
        }
    });
}
