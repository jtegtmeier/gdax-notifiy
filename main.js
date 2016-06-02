var CoinbaseExchange = require('coinbase-exchange');
var NodeMailer = require('nodemailer');
var Config = require('./config.json');


var publicClient = new CoinbaseExchange.PublicClient();
var authClient = new CoinbaseExchange.AuthenticatedClient(key, b64secret, passphrase);
