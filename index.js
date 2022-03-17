const Discord = require('discord.js')
require('dotenv').config()

const TOKEN = "OTUzMzYzMjExMzAwNzY5OTEy.YjDerg.pLB933RZ7wd5tJzioH856HYKuao"

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log(`Logged in ass ${client.user.tag}`)
})

//сообщения в чат   
client.on("messageCreate", (message) => {
    if (message.content == ""){
        message.reply("")
    }
    if (message.content == ""){
        message.reply("")
    }
})

client.login(process.env.TOKEN)