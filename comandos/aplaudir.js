module.exports = (client,msg)=>{
  let tokens = msg.content.split(" ");
  let mensagem = tokens.length;
  const gif = [
    `https://media.giphy.com/media/1W40UWS9peSru/giphy.gif`,
  ]
  if(mensagem > 1){
    const membros = msg.mentions.users.first();
    const reply = (Math.floor(Math.random() * gif.length));
    const embed = {
      "title": `${msg.author.username} Está impressionado com  ${membros.username}`,
      "color": 5153689,
      "image": {
        "url": (gif[reply])
      }        
    } 
    return msg.reply({embed});
  }
  if(mensagem = 1){   
    const reply = (Math.floor(Math.random() * gif.length));
    const embed = {
      "title": `${msg.author.username} Está impressionado com alguém ai`,
      "color": 5153689,
      "image": {
        "url": (gif[reply])
      }
    }
    msg.reply({ embed })
  }
}