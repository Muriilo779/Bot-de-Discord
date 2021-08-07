module.exports = (client,msg)=>{
  let tokens = msg.content.split(" ");
  let mensagem = tokens.length;
  const gif = [
    `https://i0.wp.com/media1.tenor.com/images/afb6fc36dacde26b388ef89744f5e99d/tenor.gif?itemid=8147507`,
    `https://pa1.narvii.com/6516/1acb03a4dadacdcae37c8b2c8be911c15647c854_hq.gif`,
    `https://i.pinimg.com/originals/46/24/b5/4624b5e0cdaa5651a151caba7a6c3869.gif`,
  ]
  if(mensagem > 1){
    const membros = msg.mentions.users.first();
    const reply = (Math.floor(Math.random() * gif.length));
    const embed = {
      "title": `${msg.author.username} Está acenando para ${membros.username}`,
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
      "title": `${msg.author.username} Está acenando  `,
      "color": 5153689,
      "image": {
        "url": (gif[reply])
      }
    }
    msg.reply({ embed })
  }
}
