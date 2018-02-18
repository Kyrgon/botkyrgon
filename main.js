const Discord = require('discord.js')

var bot = new Discord.Client();

bot.on('ready', () => {
    bot.user.setPresence({ game: { name: "Bot Kyrgon."}})
    console.log('Bot Pret !');
});

bot.login('NDE0NzYzMjkyNTI3OTUxODcy.DWsQ6w.htd_Of7uiS_Eh2VIhmewJx-JhuA')

bot.on('message', message => {
    if (message.content === "/help"){
        var help_embed = new Discord.RichEmbed()
            .setColor('#0b3c91')
            .addField("**:robot:Commandes BOT:robot:**", "    -help")
        message.channel.sendEmbed(help_embed);
        //message.channel.sendMessage('**Aides commandes :**')
        //message.channel.sendMessage("**- /help** ( permet de d'avoir la liste des commandes )")
        
        console.log('test')
    }
});
