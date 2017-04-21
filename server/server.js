/**
 * Created by puran.kanawat on 21/04/17.
 */
var express = require('express'),
    bodyParser = require('body-parser'),
    lodash = require("lodash"),
    restway = require('restway'),
    path = require('path'),
    config = require('config');
var app = express();
app.use(express.static(__dirname + '/../client/'));
/*app.get("/", function(req, res){
    res.sendfile('client/index.html');
});*/

app.use(bodyParser.json({limit: 524288000}));
app.use(bodyParser.urlencoded({limit: 524288000, extended: true}));

restway.configure({
    globalContext: {
        lodash: lodash,
        config: config,
        convertToInt: function(num) {
            var int = parseInt(num);
            if(isNaN(int)) {
                return null;
            }
            else {
                return int;
            }
        },
        convertToBool: function(bool) {
            if(bool === 'true') {
                return true;
            }
            else if(bool === 'false') {
                return false;
            }
            else {
                return null;
            }
        },
        convertToFloat: function(num) {
            var float = parseFloat(num);
            if(isNaN(float)) {
                return null
            }
            else {
                return float;
            }
        }
    },
    timeout: 60000,
    logger: console
});

restway.getEntity('request').configure({
    beforeRequest: function(req, res, options, deferred) {
        /* Adding these headers for any outgoing call through request
         - x-transaction-id
         - x-action-by
         - x-requester-ip
         - x-account-id
         - x-user-context
         - x-flipkart-client
         - x-org-id
         */
    },
    onSuccess: function(req, res, result, deferred) {
        //Nothing here
    },
    onError: function(req, res, result, deferred) {
        //Nothing here
    }
});

restway.registerRoutes(app, require('./test-app/routes.js'));

restway.on('RESTWAY:REQUEST_SUCCESSFUL', function(message) {
    console.info("Restway backend calls", message);
});

restway.on("RESTWAY:REQUEST_ERROR", function(message) {
    console.info("Restway backend calls", message);
});

restway.on('RESTWAY:ROUTE_HANDLER_COMPLETE', function(message) {
    console.info("Restway response sent: ", message);
});

var server = app.listen(process.env.NODE_PORT || 3001);