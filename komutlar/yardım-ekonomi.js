const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = 't+'
let yardım = new Discord.RichEmbed()  
.setAuthor(`${client.user.username}`, client.user.avatarURL)
.setColor('GRAY')
.addField('**<:Simsek:712992067126820895> Yetkili Komutları**',`
**:white_small_square: emoji-yakalamaca** : Puan Oyunu!
**:white_small_square: gönder** : Puan Gönderir!
**:white_small_square: günlük** : Günlük Puan Alırsın!
**:white_small_square: emojiler** : Sunucudaki Emojileri Listeler!
**:white_small_square: yaz** : Bota Yazı Yazdırır!
**:white_small_square: sil** : Mesaj Sayısı Kadar Mesaj Siler!
**:white_small_square: rolbilgi** : Rol Bilgilerini Gösterir!
**:white_small_square: oylama** : Oylama Yapar!
**:white_small_square: hatırlat** : Hatırlatma Yapar!
**:white_small_square: süreliban** : Süreli Yasaklar!
**:white_small_square: temizle-üye** : Kişinin Mesajlarını Siler!
**:white_small_square: çekiliş** : Çekiliş Yapar!
**:white_small_square: kanalkilit** : Kanalı Süreli Olarak Kilitler!
**:white_small_square: rolver** : Kişiye Rol Verir!
**:white_small_square: rolal** : Kişinin Rolünü Alır!
**:white_small_square: terfi** : Kişiyi Terfi Eder!
**:white_small_square: yavaşmod** : Süreli Olarak Yavaş Modu Aktif Eder!`)
.setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL)
  .addField("**<:Simsek:712992067126820895> Linkler**", "[<a:Rgbsag:712244124924772373> Davet Linki](yakında)\n[<a:Rgbsag:712244124924772373> Destek Sunucu](https://discord.gg/Bhn7nde)\n[<a:Rgbsag:712244124924772373> Website](yakında)")
.setThumbnail(client.user.avatarURL)
 message.channel.send(yardım) 
  };
exports.conf = {
  enabled: false,  
  guildOnly: false, 
  aliases: ["help"], 
  permLevel: 0
};
exports.help = {
  name: 'ekonomi'
};
