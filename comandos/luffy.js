const { MessageAttachment } = require('discord.js');
module.exports = (client,msg)=>{ //exportando o client do meu bot e outros comandos
  const tokens = msg.content.split(" ");
  const tirarComando = tokens.shift();
  const quantidadeMensagem = tokens.length;
  const mensagem = tokens.join([separador = ' '])
  console.log(mensagem)
  if(quantidadeMensagem >= 1){
    var jimp = require('jimp'); //npm que eu usei para editar as imagens por javascript
    async function edicao(){ 
      let fonte = await jimp.loadFont(jimp.FONT_SANS_32_BLACK)
      const luffy = await jimp.read('LuffyDesenhando.jpg')// imagem que vai servir de base para o meme
      
      luffy.print(fonte, 30, 150, mensagem, 270).write('beta.png')
      msg.reply(``, { files: ["beta.png"] })//resposta para o usuario que chamou pelo comando 
      console.log('Imagem enviada para o Discord')
    }
    return edicao();
  }else{
    const embed = {
      "title": `Eu não entendi!`,
      "description": 'Eu preciso que você digite a mensagem a ser colocada na imagem logo após do comando\n Exemplo: b.luffy olá',
      "color": 5153689,
    };
  msg.reply({ embed })
  }
}
