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
                window.location.href = "Home.html";
                localStorage.setItem('idUsuario', parseInt(jsondata[0].id));
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
    localStorage.setItem('GPSlatitud', GPSlatitud);
    localStorage.setItem('GPSlongitud', GPSlongitud);
};

// Fallo en la lectura GPS.
function onError(error) {
    alert('code: ' + error.code + '\n' + 'message: ' + error.message + '\n');
}

function asistirEvento(ide) {
	$.ajax({
                async : true,
                data : {
                    idUsuario : localStorage.getItem('idUsuario'),
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

function info(ide, descripcion, ubicacion) {
	$('#txt_idu').html(ubicacion);
	$('#txt_descripcion').html(decodeURI(descripcion));
    $('#bt_asistir').val(ide);
    $('#info').popup("open");
}

function recibirDatos() {
	var fecha = new Date();
    $.ajax({
        async : false,
        data : {
            idUsuario : localStorage.getItem('idUsuario'),
            fechaActual : ISODateString(fecha)
        },
        beforeSend: function() { $.mobile.loading('show'); },
        complete: function() { $.mobile.loading('hide'); },
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
                    + '\', \''
                    + recibirUbicacion(jsondata[i].idu)
                    + '\');return false;"';
        		code = '<li id="li_'
        			+ jsondata[i].ide
        			+ '"><a href="#"><img src="img/eventos/default.jpg" width="100" height="100"/><h1>'
                    + '<img src="'
                    + SERVIDOR
                    + 'images/tipos/tipo('
                    + jsondata[i].idt
                    + ').png'
                    + '"/> '
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

function recibirDatosAmigos() {
	var fecha = new Date();
    $.ajax({
        async : false,
        data : {
            idUsuario : localStorage.getItem('idUsuario'),
            fechaActual : ISODateString(fecha)
        },
        beforeSend: function() { $.mobile.loading('show'); },
        complete: function() { $.mobile.loading('hide'); },
        url : "http://programandocotufas.xtrweb.com/proyectoleon/php/recomendacionPorAmigos.php",
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
                    + '\', \''
                    + recibirUbicacion(jsondata[i].idu)
                    + '\');return false;"';
        		code = '<li id="li_'
        			+ jsondata[i].ide
        			+ '"><a href="#"><img src="'
                    + SERVIDOR
                    + 'images/default.jpg" width="100" height="100"/><h1>'
                    + '<img src="'
                    + SERVIDOR
                    + 'images/tipos/tipo('
                    + jsondata[i].idt
                    + ').png'
                    + '"/> '
                    + jsondata[i].nombreEvento
                    + '</h1></a><a href="#" '
                    + event
                    + '></a>' + '</li>';
        		$('#lista_eventos_amigos').append(code);
            }
        	$("#recomendacion_amigos").show();
        },
        error : function() {
        	$("#recomendacion_amigos").hide(); 
        }
    });
}

function recibirUbicacion(idu) {
	var ubicacion;
	$.ajax({
        async : false,
        data : {
            idu : idu
        },
        url : "http://programandocotufas.xtrweb.com/proyectoleon/php/recibirUbicacion.php",
        type : "post",
        dataType : "json",
        success : function(jsondata) {
        	ubicacion = jsondata[0].poblacion + ' - ' + jsondata[0].provincia;
        },
        error : function() {
            alert('Error. No se ha podido acceder a la información.');
        }
    });
	return ubicacion;
}

function listarAmigos() {
	$.ajax({
        async : false,
        data : {
            idUsuario : localStorage.getItem('idUsuario')
        },
        url : SERVIDOR + "php/listarAmigos.php",
        type : "post",
        dataType : "json",
        success : function(jsondata) {
        	var code;
        	for (i = 0; i < jsondata.length - 1; i++) {
        		code = '<li id="li_'
        			+ jsondata[i].id
        			+ '"><a href="#"><img src="'
                    + SERVIDOR
                    + 'images/amigos/default.png" width="100" height="100"/><h1>'
                    + jsondata[i].nombre
                    + '</h1></a>'
                    + '</li>';
        		$('#lista_amigos').append(code);
            }
        },
        error : function() {
            alert('Error. No se ha podido acceder a la información.');
        }
    });
}

function actualizarMapa() {
    var fecha = new Date();
      $.ajax({
          async : false,
          data : {
              idUsuario : localStorage.getItem('idUsuario'),
              fechaActual : ISODateString(fecha)
          },
          beforeSend: function() { $.mobile.loading('show'); },
          complete: function() { $.mobile.loading('hide'); },
          url : "http://programandocotufas.xtrweb.com/proyectoleon/php/leonRecibirDatos.php",
          type : "post",
          dataType : "json",
          success : function(jsondata) {
              var descripcion;
              for (i = 0; i < jsondata.length - 1; i++) {
                  code = '<li id="Busqueda_marker_'
                      + i 
                      + '" '
                      + 'name="marker_' + i + '" '
                      + 'dsid="marker_' + i + '" '
                      + 'tiggzitype="marker" apperytype="marker" rendered="true" '
                      + 'latitude="' + jsondata[i].latitud + '" '
                      + 'longitude="' + jsondata[i].longitud + '" '
                      + 'text="" address="" show_info="false" style="display:none;">'
                      + '<div id="Busqueda_marker_' + i + '_infoWindow" name="marker_' + i + '_infoWindowContent" class="Busqueda_marker_' + i + '">'
                      + '</div>'
                      + '</li>';
                  
                  $('#Busqueda_googlemap_1_markers').append(code);
              }
          },
          error : function() {
              alert('Error. No se ha podido acceder a la información.');
          }
      });
}