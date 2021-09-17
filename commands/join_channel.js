const Discord = require('discord.js');

class JoinChannelCommand  {
  constructor(client)
  {
      super(client  , {
        name:'join' ,
        group:'music' ,
        memberName:'join' ,
        description:  'Joins the channel of anyone who calls it'
      });
  }

  async run(message,  args){
    message.author.voicechannnel()
  }
}
