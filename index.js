const Discord = require("discord.js");
const colors = require("colors");
const intents = new Discord.Intents(32767);
const client = new Discord.Client({ intents });
const fs = require("fs");

process.on('unhandledRejection', error => {
	console.error(error);
});

client.on('shardError', error => {
	console.error(error);
});

client.comandos = new Discord.Collection();
client.slashs = new Discord.Collection();
client.prefix = "PREFIX DEL BOT";

["comandos", "eventos", "slashs"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});

client.login("TOKEN DEL BOT")
.then(() => {
  console.log(`Estoy listo, soy ${client.user.tag}`);
})
.catch(err => {
  console.error('Error al iniciar sesión: ' + err);
});
