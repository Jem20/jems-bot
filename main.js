const talkedRecently = new Set();
const Discord = require('discord.js');
const {Client, Attachment} = require('discord.js');
const bot = new Discord.Client();

const PREFIX = '$';

var version = '1.0.1';

const usedCommandRecently = new Set();

bot.once('ready', () =>{
    console.log('This bot is online!');
    bot.user.setActivity('$help', { type: 'PLAYING'}).catch(console.error);
})

bot.on('message', message=>{

    if (message.content.startsWith (PREFIX + "test")){
        const args2 = message.content.slice(PREFIX.length).split(/ +/);
        client.commands.get('test').execute(message, args2);
    }

    const channels = message.guild.channels.cache.filter(ch => ch.type !== 'category');
    if (message.content.startsWith (PREFIX + "lockdown")) {
     message.delete({ timeout: 3000 })
     if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send('wtf are you doing you cant use this command');
     const embed13 = new Discord.MessageEmbed()
     .setTitle(`Server Lockdown 🔒`)
     .setDescription(`This server has been locked by a staff member.\n More info about this will be posted into this channel or announcements.`)
     .setColor("#FF0000")
     .setTimestamp(message.createdAt)
     .setFooter(`Locked By ${message.member.user.tag}`)
     message.channel.send(embed13)
     channels.forEach(channel => {
        channel.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: false
        }).then(() => {
        })
    })}
    
    if (message.content.startsWith (PREFIX + "unlock")) {
        message.delete({ timeout: 3000 })
        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send('wtf are you doing you cant use this command');
        channels.forEach(channel => {
        channel.updateOverwrite(message.guild.roles.everyone, {
         SEND_MESSAGES: null
        }).then(() => {
        })
    })}

    if (message.content.startsWith (PREFIX + "jongo meme")) {
        number = 22;
        imageNumber = Math.floor (Math.random() * (number - + 1)) + 1;
        message.channel.send ({ files: ["./images/" + imageNumber + ".png"]})
    }

    if (message.content.startsWith (PREFIX + "meme video")) {
        message.channel.send('Sorry the command is currently disabled for spam/lag')
    }

    if (message.content === '$nitro') {
        message.react('<a:xqcJebaitedf:887784351742459956>')
        message.channel.send('You got jebaited! <:OMEGALUL:887784866895265822>')
    }

   let args = message.content.substring(PREFIX.length).split(" ");

   if (message.content.startsWith (PREFIX + "clear")) {
   if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send('bruh your missing permms');
        if (!args[1]) return message.reply('Error please define second arg');
        message.channel.bulkDelete(args[1]);
        message.channel.send('Success!').then(msg => {
            msg.delete({ timeout: 3000 })
          })
          .catch(console.error);
   }

    switch(args[0]){
        case 'hack':
            if(usedCommandRecently.has(message.author.id)){
                const embed12 = new Discord.MessageEmbed()
                .setTitle(`Bruh, calm down`)
                .setDescription("Dumb boi, stop trying to hack people\n Wait **10 seconds** to hack again\n The default cooldown is ``10s``")
                .setColor("RANDOM")
                message.channel.send(embed12);
            } else{
                mention = message.mentions.users.first();
                   if(mention == null) { return; }
                    let replies = [
                        'lmao your hacking skills are trash you forgot to get around the 2-step verification proccess lol',
                        'You only got their IP address. Might as well sell the IP address on the black market so you can make big bucks',
                        'You got their password and did nothing with it lmao',
                        'Woah you stole their credit card numbers and then went on fiverr and hired hackers to hack the rest that is a pro gamer move right there :O',
                        'All you did is hack their social media account that they dont even use lmao',
                        'woah you stole their imgflip account and posted the most cringe memes on the planet best hack ever',
                        'Your power went out for a whole week and you died of dehydration. Sucks to be you lol',
                        'woah you hacked the dev of dyno the discord bot and got the token woah man',
                        'all you did is change their twitter bio what are you doing',
                        'you hacked your girlfriend and changed her instagram name to "big fat turd" and changed their profile pic to a turd say goodbye to your relationship',
                        'turns out the person you tried to hack was a hacker themself so they hacked your whole family and you died',
                        'woah you got their ip address,their wifi connection,and their credit card info',
                        'you put a virus in their computer that showed them nude pictures of trump ew',
                        'you hacked everyone in their state now your the fbi`s worse nightmare woah',
                        'you hacked their whole country and you figured out they live in russia you are officially the top blackhat in all of the world bro',
                        'you hacked their email address and messaged their friends trash roasts AND your dream was to be a rapper nobody will like your raps with those type of roasts.',
                        'holy fuck jesus you shut down the whole internet!? **You also found a fucking rare egg holy shit <:eggs:747908606673944648>**'
                     ]
                      let random = Math.floor(Math.random() * 17);
                      message.channel.send(replies[random])

                usedCommandRecently.add(message.author.id);
                setTimeout(() => {
                usedCommandRecently.delete(message.author.id)
                }, 10000);
            }
            break;
        // case 'clear2': 
            // if (message.author.id !== "429704583879720970") return;
            // if (!args[1]) return message.reply('Error please define second arg')
            // message.channel.bulkDelete(args[1]);
            // message.channel.send('Success!')
            // break;
    // for jem only >:)
        case 'quackbald':
                const embed3 = new Discord.MessageEmbed()
                .setImage('https://pbs.twimg.com/media/EJhFvJQXYAEP4zK.jpg')
                .setTitle(`Quackity shoots. You are now dead.`)
                .setColor("RANDOM")
                message.channel.send(embed3);
               break;
        case 'quacksmoke':
                const embed4 = new Discord.MessageEmbed()
                .setImage('https://pbs.twimg.com/media/D1Vm4tmX0AEQao-.jpg')
                .setTitle(`Quackity smokes`)
                .setColor("RANDOM")
                message.channel.send(embed4);
                break;
        case 'lorax':
                const embed5 = new Discord.MessageEmbed()
                .setImage('https://media.discordapp.net/attachments/722286166082322503/741398409046655036/0.png')
                .setTitle(`This is me. Actually, Jem made me.`)
                .setColor("RANDOM")
                message.channel.send(embed5); 
                break; 
        case 'horny':
                const embed6 = new Discord.MessageEmbed()
                .setImage('https://i.redd.it/2k1b0zjbd6r41.jpg')
                .setTitle(`THATS HIM OFFICER, THATS THE HORNY!`)
                .setColor("RANDOM")
                message.channel.send(embed6); 
                break;
        case 'quackbonk':
                const attachment = new Discord.MessageAttachment('https://cdn.discordapp.com/attachments/722286166082322503/741706124633571368/video0_9.mov')
                const embed7 = new Discord.MessageEmbed()
                .setTitle(`Congrat's. You just killed quackity.`)
                .setColor("RANDOM")
                message.channel.send(attachment);
                message.channel.send(embed7);
                break;
        case 'porn':
            const embed8 = new Discord.MessageEmbed()
            .setImage('https://media2.giphy.com/media/lgcUUCXgC8mEo/200.gif')
            .setTitle(`You just got rickrolled by me`)
            .setColor("RANDOM")
            message.channel.send(embed8); 
            break;   

        case 'help':
            const embed9 = new Discord.MessageEmbed()
            .setTitle('Here are the list of other commands beside music!')
            .setColor(0xFF0000)
            .setDescription('**Prefix:**\n ``$``\n **Quackity Commands:**\n ``quackbald:`` Gives a picture of bald quackity\n ``quackbonk:`` Bonks quackity\n ``quacksmoke:`` Gives a picture of quackity smoking\n **Fun Commands:**\n ``hack [user]:`` Hacks a user, there is also a slow chance you can die from hacking\n ``meme:`` Generates a random meme (No longer works)\n **Random Commands:**\n ``porn:`` um ignore this\n ``lorax:`` Gives a picture of me\n ``jongo meme:`` Generates a random meme for a special person!\n ``meme video:`` Currently disabled for spam and lag\n ``horny:`` Thats him officer thats the horny\n ``poll:`` Makes a simple poll command for people to react yes or no\n ``nitro:`` Hmmm i wonder what this does\n **Moderator Commands:**\n ``clear:`` Clears a certain ammount of messages\n ``lockdown:`` Locks down the server preventing people to talk\n ``unlock:`` Unlocks the server if its on lockdown\n ``mute {user} {time}:`` Mutes a user for a certain amount of time\n\n **This bot sadly, has been discontinued.**')
            .setFooter("Made by Jem#0007", "https://cdn.discordapp.com/avatars/429704583879720970/ad5f870c5c108f3c6f5fbd9538236441.png?size=2048")
            message.channel.send(embed9);
            break;
        // case 'bot2':
            // const embed10 = new Discord.MessageEmbed()
            // .setThumbnail('https://images-ext-1.discordapp.net/external/WD6RYn9ZNAnbDJfmC7UAoM0OQBWUcjVR01ECxeTBK68/https/i.pinimg.com/474x/11/21/31/1121319869229e31c72ed2738ef40b2f.jpg')
            // .setTitle('**Add my other bot to your server!**')
            // .setColor("RANDOM")
            // .setDescription('https://top.gg/bot/743923305374810115')
            // .setFooter("Made by Jem#0007", "https://cdn.discordapp.com/avatars/429704583879720970/ad5f870c5c108f3c6f5fbd9538236441.png?size=2048")
            // message.channel.send(embed10);
            // break;
        case "poll":
            const embed11 = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle("Inititate Poll")
            .setDescription("$poll for a simple yes or no poll");

            if(!args[1]){
               message.channel.send(embed11);
               break;
            }

            let msgArgs = args.slice(1).join(" ");

            message.channel.send(msgArgs).then(messageReaction => {
                messageReaction.react("👍");
                messageReaction.react("👎");
            });
            break;
        }
})

bot.login('example')