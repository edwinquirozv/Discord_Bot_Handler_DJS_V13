const Discord = require("discord.js");
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');

module.exports = {
  name: "ready",
  run: async(client) => {

  const s = client.slashs.map(x => x)

  const rest = new REST({ version: '9' }).setToken("TOKEN DEL BOT");

(async () => {
	try {

		await rest.put(
			Routes.applicationCommands("ID DEL BOT"),
			{ body: s },
		);

	} catch (error) {
		console.error(error);
	}
})();

const status = [
    "1",
    "2",
    "3",
    "Cambia cada 10 segundos"
  ]

 setTimeout(function Status() {
  
  const statusr = status[Math.floor(status.length * Math.random())]

  client.user.setPresence({
    status: 'online',
    activities: [{
      name: statusr,
      type: 'WATCHING'
    }] 
  })
 }, 600000)

 const statu = status[Math.floor(status.length * Math.random())]

 client.user.setPresence({
    status: 'online',
    activities: [{
      name: statu,
      type: 'WATCHING'
    }] 
  })

  }
}