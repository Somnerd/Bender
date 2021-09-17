const   commando    =   require('discord.js-commando');

class   PingCommand extends commando.Command{
    


    constructor(client){
        super(client,{
            name:'my_ping',
            group:'simple',
            memberName:'ping',
            description:'Pings'
        });
    }

    async   run(message,    args){
            // an 'if' that responds with pong when you ping , I use it to check if the bot works , mainly the prefix constant .
        if ( message.content.lowercase() === prefix  + 'ping' ) {     // Just check if the message is exactly the preset prefix and the word ping
          message.channel.send('Pong')          //   Responds to the chat with pong
        }else if ( message.content.lowercase() === prefix  + 'ping' + '!' ){    // Does a check if the ping has an exclametion mark
          message.channel.send('Pong!')                   // responds to the chat with a pong and an excametion mark
        };        
        console.log('\n'    +   message.author  +   ' did a ping')
    }
}

module.exports  =   PingCommand;