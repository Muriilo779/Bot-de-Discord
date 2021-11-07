const Discord = require("discord.js"); // requirindo a api discord.js
const client = new Discord.Client(); //cliente para meu bot
const prefix = "b."; //Prefixo para o Bot
const commands = require("./scripts/commandsReader")(prefix); // requirindo leitura do arquivo commandsReader
const config = require("dotenv").config(); //requirindo a biblioteca dotenv e o arquivo
const jimp = require('jimp')


console.log(commands);
client.on("ready",()=>{
  console.log(`Logando com o bot ${client.user.tag}`);//quando o bot iniciar aparecera uma mensagem logando
  client.user.setActivity('b.ajuda')
  });
client.on("message",(msg)=>{
  if(!msg.author.bot && msg.guild){
    console.log(`${msg.author.username}: ${msg.content}`); //aqui quando uma mensagem for lida ele vai printar no terminal o nome e a mensagem
    const args = msg.content.split(" "); //divide a mensagem enviada do uusario em um array
    if(commands[args[0]]) commands[args[0]](client,msg); //se o prefixo criado no arquivo commandsreader for a primeira mensagem importar client e msg? 
  }
});

client.on("message",(msg)=>{
  if(!msg.author.bot){
    if(msg.content == "Bom dia"){
      msg.reply("Bom dia companheiro 😀") 
    }else if(msg.content == "Boa tarde"){
      msg.reply("Boa tarde, como é que foi seu dia?")
    } }
});
client.login(process.env.BOTTOKEN); // logando o bot

