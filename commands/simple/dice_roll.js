const   commando    =   require('discord.js-commando');

class   DiceRollCommand extends commando.Command{
    constructor(client){
        super(client,{
            name:'roll',
            group:'simple',
            memberName:'roll',
            description:'Rolls a number of dice / dices'
        });
    }

    async   run(message,    args){        
        var dice  =   Math.floor(Math.random()   *    6)  +   1;
         
         message.reply("Your dice landed on "   +   dice);
         
         console.log('\n'    +   message.author+' did a dice roll')
    }
}

module.exports  =   DiceRollCommand;