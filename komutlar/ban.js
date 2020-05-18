const Discord = require('discord.js');
const client = new Discord.Client();
exports.run = (client, message, args, ) => {
  if (!message.guild) {
     if (!message.member.hasPermission("BAN_MEMBERS")) 
{
    const prmlv = new Discord.RichEmbed()
    .setColor('BLACK')
    .setDescription('**:warning: Bunu yapabilmek için gerekli yetkiye sahip değilsiniz! :warning:**')
   .setTimestamp() 
    .setFooter(`TitanX Ban Sistemi`)
   return message.channel.send(prmlv)
  } 
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor('BLACK')
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyarı', '`ban`özel mesajlarda kullanılamaz.')
  return message.author.sendEmbed(ozelmesajuyari); }
  let guild = message.guild
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
   
  if (message.mentions.users.size < 1) 
   {
    const ment = new Discord.RichEmbed()
    .setColor('GREEN')
    .setDescription('**Banlanacak kişiyi etiketlemedin!**\n Doğru kullanım:`+ban kullanıcı sebep`')
   .setTimestamp() 
    .setFooter(`TitanX Ban Sistemi`)
   return message.channel.send(ment).catch(console.error);
  }
  if (reason.length < 1) 
  

   {
    const reas = new Discord.RichEmbed()
    .setColor('GREEN')
    .setDescription('**Ban sebebini belirtmedin!**')
   .setTimestamp()
    .setFooter(`TitanX Ban Sistemi`)
   return message.channel.send(reas)
  }

  if (!message.guild.member(user).bannable) 
  {
    const ytk = new Discord.RichEmbed()
    .setColor('BLUE')
    .setDescription('**Banlanacak kişinin yetkisi benden yüksek!**')
   .setTimestamp() 
    .setFooter(`TitanX Ban Sistemi`)
   return message.channel.send(ytk)
  }
  message.guild.ban(user, 2);

  const embed = new Discord.RichEmbed()
    .setColor('#ff0009')
    .setTimestamp()
    .setDescription('**Bir Kullanıcı Sunucudan Yasaklandı** <a:banned:711992683727552574>')
    .setThumbnail('https://cdn.discordapp.com/emojis/649384898003599370.png?v=1',true)
    .addField('Yasaklanan Kullanıcı:', `<@!${user.id}>`,true)
    .addField('Yasaklayan Yetkili:', `<@!${message.author.id}>`,true)
    .addField('Yasaklama Sebebi:', reason,false)
  .setFooter(`TitanX Ban Sistemi`);
   
    message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ban',
  description: 'İstediğiniz kişiyi sunucudan yasaklar.',
  usage: 'ban [kullanıcı] [sebep]'
};