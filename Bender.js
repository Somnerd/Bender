  const Discord = require('discord.js');
  const bot = new Discord.Client();
  const weather = require('weather-js');

  bot.login('')

  const prefix =  '.';


//  A Webhook function
  function  hook(channel, title,  message,  color, avatar){
      if (!channel) return  console.log('ON WHICH CHANNEL , DUMBASS!');
      if (!title) return console.log('I DONT KNOW THE TITLE , MEATBAG');
      if (!message) return  console.log('THE MESSAGE AINT ON MY SHINY METAL ASS , SO WHERE IS IT!');   //  https://cdn4.iconfinder.com/data/icons/technology-devices-1/500/speech-bubble-128.png
      if (!color) color = 'a3c5c9';  //d9a744
      if (!avatar) avatar = 'https://cdn.dribbble.com/users/48734/screenshots/3364563/baby_bender_1x.png';

      color  =   color.replace(/\s/g,  '');
      avatar  =   avatar.replace(/\s/g, '');

      channel.fetchWebhooks()
              .then(fetchWebhooks=>{
                  let foundHook = webhook.find('name',  "Webhook")

                  if (!foundHook) {
                    channel.createWebhook('Webhook', 'https://cdn.dribbble.com/users/48734/screenshots/3364563/baby_bender_1x.png' )
                      .then(webhook =>  {
                        webhok.send('', {
                          "username": title,
                          "avatarURL":  avatar,
                          "embeds": [{
                            "color": parseInt(`0x$(color)`),
                            "description":message
                          }]
                        })
                          .catch(error => {
                            console.log(error);
                            return  channel.send('**Oi , tell to the sleek guy with console access that something went wrong**');
                          })
                      })
                  } else {
                      foundHook.send('', {
                          "username": title,
                          "avatarURL":  avatar,
                          "embeds": [{
                          "color": parseInt(`0x$(color)`),
                          "description":message
                        }]
                      })
                        .catch(error => {
                          console.log(error);
                          return  channel.send('**Oi , tell to the sleek guy with console access that something went wrong**');
                      })
                    }
              })
  } ;        // A webhook  function


//A ping pong function
  bot.on('message', message => {
    let msg = message.content.toUpperCase();
    let sender = message.author;
    let cont  = message.content.slice(prefix.length).split("");
    let args = cont.slice(1);

  if (msg === prefix  + 'PING'  ||  msg === prefix  + 'Ping'  ||  msg === prefix  + 'ping'  ||
        msg === prefix  + 'PING!' ||  msg === prefix  + 'Ping!' ||  msg === prefix  + 'ping!') {
      message.channel.send('PONG!')
  };   //A ping pong function


//A purge function
  if (msg.startsWith(prefix + 'PURGE')) {
    async function purge() {
      message.delete();

      if (!message.member.roles.find("name",  "Citizens")) {
        message.channel.send('Beat it scrum , you need to be at least a \`Citizens\` to command me');
        return;
              }

      if (isNaN(args[0])) {
        message.channel.send('I only accept numbers as arguments . \n Usage:  ' + prefix  + 'purge <ammount>' );
      }

      const fetched = await message.channel.fetchMessages({limit: args[0]});
      console.log(fetched.size +  ' messages  found,  deleting...');

      message.channel.bulkDelete(fetched)
        .catch(error  =>  message.channel.send(`Error: ${error}`))
    }
    purge();

  }; //A purge function

  if (msg.startsWith(prefix + 'WEATHER')) { //A weather function
      weather.find({search: args.join(" "), degreeType: 'C'},  function(err, result) {
        if(err) message.channel.send(err);

        if(result.length  === 0)  {
          message.channel.send('**Enter a valid location chump**')
          return;
        }

          var current = result[0].current;
          var location  = result[0].location;

          const embed = new Discord.RichEmbed()
            .setDiscription(`**${current.skytext}**`)
            .setAuthor(`Weather for ${current.observationpoint}`)
            .setThumbnail(current.imageUrl)
            .setColor(0x9a0026)
            .addField('Timezone',`UTC${location.timezone}`)
            .addField('Degree Type',location.degreetype,  true)
            .addField('Temperature',`${current.temperature} Degrees`, true)
            .addField('Feels Like', `${current.feelslike} Degrees`, true)
            .addField('Winds',current.winddisplay,  true)
            .addField('Humidity', `${current.humidity}%`, true)

            message.channel.send({embed});
      });
    } //A weather function


//ALSO a hook function
    if (msg.startsWith(prefix + 'HOOK')) {

      message.delete();

      if(msg  === prefix  + 'HOOK'){
          return  hook(message.channel, 'Hook Usage', `${prefix}hook(<title), <message>,  [HEXcolor], [avatarURL]\n\n**<> is requiered\n[]  is optional**`, 'FC8469', 'https://cdn.dribbble.com/users/48734/screenshots/3364563/baby_bender_1x.png')
        } else {
          message.channel.send('Sorry chump , I cant return the hook')
        }
      let hookArgs  = message.content.slice(prefix.lentgh + 4).split(",");

      hook  (message.channel, hookArgs[0],  hookArgs[1],  hookArgs[2],  hookArgs[3]);
    } else {
      message.channel.send('Sorry chump , I cant return the hook')
    }
}); //ALSO a hook function



  bot.on('ready', ()=>    {
      console.log('Baby Bender is online and ready!.')
  });
