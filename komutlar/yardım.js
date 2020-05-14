const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;
exports.run = (client, message, args) => {
  
    const juke = new Discord.RichEmbed()
    .setColor('Yardım Menüsü')
    .setAuthor(`TitanX`, client.user.avatarURL) 
      .setDescription('Prefix : **t+** Dil : **Türkçe**')
.setThumbnail(client.user.avatarURL)
      .addField('** Yetkili [13]**', '`terfi`, `ban`, `erkek`, `kadın`, `kick`, `emojiler`, `dm-hg`, `güvenlik`, `capsengel`, `ping`, `rol-bilgi`, `oylama`, `rol-koruma`')
      .addField('** Yetkili 2 [15]**', '`küfür`, `otorol-ayarla`, `otorolkapat`, `otorol-mesajı`, `reklam-engel`, `reklamban`, `reklambankapat`, `reklam-taraması`, `kayıt`, `sayaç`, `yaz`,`hatırlat`,`sil`,`sa-as`,`modlog`')
      .addField('** Kullanıcı [10]**', '`avatar`, `sunucubilgi`, `ping`, `havadurumu`,`top5`,`yasaklar`,`üyedurum`,`döviz`,`değişiklikler`,`saat`')
      .addField('** Kullanıcı 2 [10]**', '`hata`,`istek`,`youtube`,`servericon`,`say`,`website`,`hesapla`,`korona`,`kısalt`,`başvuru`')
      .addField('** Rol Alma [5]**', '`-js`, `-html`, `-altyapı`,`-premium`,`-booster`')
    .setFooter(``, client.user.avatarURL)
    .setTimestamp()
    message.channel.send(juke).catch()

};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};


exports.help = {
    name: 'yardım',
      category: 'Yardım',
      description: 'Yardım kategorilerini gösterir.',
};