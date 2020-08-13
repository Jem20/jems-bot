const Discord = require('discord.js');
const {Client, Attachment} = require('discord.js');
const bot = new Client();
const client = new Discord.Client();

const token = 'NzQwOTU0MTMzMDMyMzM3NDM4.XywhTw.gOSJVpPKmkbORugRgWNw3pcxFrw';

const PREFIX = '$';

var version = '1.0.1';

const usedCommandRecently = new Set();

bot.on('ready', () =>{
    console.log('This bot is online!');
    bot.user.setActivity('$help and $help2', { type: 'PLAYING'}).catch(console.error);
})

bot.on('guildMemberAdd', member =>{

    const channel = member.guild.channels.cache.find(channel => channel.name === "warm-welcomes👋");
    if(!channel) return;

    channel.send(`Welcome to the server, ${member}, Make sure to use me by saying $help and $help2. Make sure to read rules and enjoy your stay!`)
});

bot.on('message', message=>{
    
    if (message.content.startsWith (PREFIX + "jongo meme")) {
        number = 21;
        const embed = new Discord.MessageEmbed()
        .setTitle(`A random jongo meme.`)
        .setColor("RANDOM")
        imageNumber = Math.floor (Math.random() * (number - + 1)) + 1;
        message.channel.send ({ files: ["./images/" + imageNumber + ".png"]})
    }

    if (message.content.startsWith (PREFIX + "meme video")) {
        number = 34;
        videoNumber = Math.floor (Math.random() * (number - + 1)) + 1;
        const embed2 = new Discord.MessageEmbed()
        .setTitle(`A random meme video.`)
        .setColor("RANDOM")
        message.channel.send(embed2);
        message.channel.send({files: ["./videos/" + videoNumber + ".mp4"]})
    }

   let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
         case 'clear':
            if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send('bruh your missing permms');
            if (!args[1]) return message.reply('Error please define second arg')
            message.channel.bulkDelete(args[1]);
            message.channel.send('Success!')
            break;
        case 'clear2': 
            if (message.author.id !== "429704583879720970") return;
            if (!args[1]) return message.reply('Error please define second arg')
            message.channel.bulkDelete(args[1]);
            message.channel.send('Success!')
            break;
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
   
        case 'help2':
            const embed9 = new Discord.MessageEmbed()
            .setTitle('Here are the list of other commands beside music!')
            .setColor(0xFF0000)
            .setDescription('**Prefix:**\n ``$``\n **Quackity Commands:**\n ``quackbald:`` Gives a picture of bald quackity\n ``quackbonk:`` Bonks quackity\n ``quacksmoke:`` Gives a picture of quackity smoking\n **Random Commands:**\n ``porn:`` um ignore this\n ``lorax:`` Gives a picture of me\n ``meme:`` Generates a random meme\n ``jongo meme:`` Generates a random meme for a special person!\n ``meme video:`` Gets a random video meme from jems files\n ``horny:`` Thats him officer thats the horny')
            .setFooter("Made by jem#0015", "https://pbs.twimg.com/profile_images/813667771024347136/7sCyiFWy.jpg")
            message.channel.send(embed9);
            break;        
        }

})
bot.login(token);