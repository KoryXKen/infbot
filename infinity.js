var Discord = require('discord.io');

 

var bot = new Discord.Client({

    token: "Mzk5MzI5ODQ0NTczNTAzNDk5.DTL3Og.nfkg_zIdRTL04ZVpkuG4UN5p9ls",

    autorun: true

});

 

bot.on('ready', function() {

    console.log('Logged in as %s - %s\n', bot.username, bot.id);

});

 

bot.on('message', function(user, userID, channelID, message, event) {

    if (message === "Hey") {

        bot.sendMessage({

            to: channelID,

            message: "Hello Iam Infinity Bot"

        });

    }

});
