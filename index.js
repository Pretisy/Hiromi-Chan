const Discord = require(`discord.js`);
const bot = new Discord.Client();

const token = "NDY1MjcyODk3ODUwODM0OTQ1.XbTWiA.vQ8zGHAx7iiEnQoNdTfmqgDe9Mc";

bot.on("ready", () => {
  console.log("This bot is Online.");
});

bot.on("message", msg => {
  if (msg.content === "Hello") {
    msg.reply(`Hello Human!`);
  }
});

bot.login(token);
