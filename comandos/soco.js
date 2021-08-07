module.exports = (client,msg)=>{
  let tokens = msg.content.split(" ");
  let mensagem = tokens.length;
  const gif = [
    `https://www.icegif.com/wp-content/uploads/luffy-icegif-10.gif`,
    `https://media1.tenor.com/images/a20e4d7927472fa060e360b1a0dea053/tenor.gif?itemid=10004499`,
    `https://www.icegif.com/wp-content/uploads/luffy-icegif-24.gif`,
  ]
  if(mensagem > 1){
    const membros = msg.mentions.users.first();
    const reply = (Math.floor(Math.random() * gif.length));
    const embed = {
      "title": `${msg.author.username} quebrou os dentes de ${membros.username}`,
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
      "title": `${msg.author.username} socou alguém ai 🤨`,
      "color": 5153689,
      "image": {
        "url": (gif[reply])
      }
    }
    msg.reply({ embed })
  }
}