const   commando    =   require('discord.js-commando');

class   CoinFlipCommand extends commando.Command{
    constructor(client){
        super(client,{
            name:'flip',
            group:'simple',
            memberName:'flip',
            description:'Flips a coin , lands heads or tails , yadda yadda yadda , you know the drill'
        });
    }

    async   run(message,    args){
        var chance  =   Math.floor(Math.random()   *   2);
        if  (chance === 0)  {
            message.reply("The coin landed on heads");
        }   else    {
            message.reply("The coin landed on tails");
        }
    console.log('\n'    +   message.author+' did a coin flip')
    }
}

module.exports  =   CoinFlipCommand;