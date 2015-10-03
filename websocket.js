(function (__WS, window) {

    $.extend(__WS, {

        onOpen: function () {
            console.log("Connect success!");
        },

        onClose: function () {
            console.log("Disconnected!");
        },

        onMessage: function () {
            console.log("Retrieved data from server!");
        },

        onError: function () {
            console.log("Sth error!");
        }

    });

    /**
     * ²ßÂÔÄ£Ê½
     */

    var Web = function (url, protocol) {

        this.ws;

        this.isConnection = false;
        
        this.init = function (url, protocol) {
            this.ws = new WebSocket(url, protocol);
        }

        this.send = function (msg) {
            if (this.isConnection) {
                this.ws.send(msg);
            }
        }

        this.ws.onopen = function () {
            __WS.onOpen();
            isConnection = true;
            //todo
        }

        this.ws.onclose = function () {
            __WS.onClose();
            isConnection = false;
            //todo
        }

        this.ws.onmessage = function () {
            __WS.onMessage();
            //todo
        }

        this.ws.onclose = function () {
            __WS.onClose();
            //todo
        }

        this.init();

    }


    window.WS = __WS;


})(typeof WS !== "undefined" ? WS : {}, window);