const Discord = require(`discord.js`);
const bot = new Discord.Client();

const token = "NDY1MjcyODk3ODUwODM0OTQ1.W0E1Jw.KwEaAsWogvgAB9ltR8DDGdH5Gq0";

bot.on("ready", () => {
  console.log("This bot is Online.");
});

bot.on("message", msg => {
  if (msg.content === "Hello") {
    msg.reply(`Hello Human!`);
  }
});

bot.login(token);