const Discord = require("discord.js");

module.exports = {
  name: "messageCreate",
  run: async(client, message) => {
    if(message.author.bot)return;
    if(!message.content.startsWith(client.prefix))return;
    if(message.content === client.prefix)return

    const args = message.content.slice(client.prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();

    let comando = client.comandos.get(cmd) || client.comandos.find(cmdi => cmdi.aliases && cmdi.aliases.includes(cmd))
    if(!comando){
      const ee = new Discord.MessageEmbed()
      .setColor("RED")
      .setTitle(":x: `|` Ese comando no existe")
      .setDescription("El comando **"+cmd+"** no existe.\n\nPon `"+client.prefix+"comandos` para ver mis comandos")
      .setFooter(client.user.tag, client.user.displayAvatarURL())
      .setTimestamp()

      message.reply({ embeds: [ee] })
    }else {

    comando.run(client, message, args);

    }
    
  }
}