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
var idUsuario;

var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

    function recibirDatos() {
    	$.ajax({
            async:  true, 
            data:   {
            	idUsuario : 1,
            	fechaActual :  "01/01/2014"
            },
            url:        "http://programandocotufas.xtrweb.com/proyectoleon/leonRecibirDatos.php",
            type:       "post",
            dataType:   "json",
            success:
                function(jsondata){
	              	for(i = 0; i < jsondata.length - 1; i++) {
	              		alert(jsondata[i].ide + " , " + jsondata[i].nombreEvento);
	              	}
                },
            error: function() {
                alert('Error. No se han podido');
            }
         });
       
    }
    
    function login() {
    	$.ajax({
            async:  true, 
            data:   {
            	usuario : $('#Login_in_usuario').val(),
            	pass :  $('#Login_in_password').val()
            },
            url:        "http://programandocotufas.xtrweb.com/proyectoleon/login.php",
            type:       "post",
            dataType:   "json",
            success:
                function(jsondata){
            		if (jsondata[0].id) {
            			//alert($('#Login_in_usuario').val() + " se ha validado correctamente.");
            			window.location.href = "Home.html";
            			//idUsuario = parseInt(jsondata[0].id);
            		} else {
	              		alert("Usuario / contraseña incorrecto/s.");
	              	}
                },
            error: function() {
                alert('Error. No se ha podido');
            }
         });
       
    }
