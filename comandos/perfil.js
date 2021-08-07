module.exports = (client,msg)=>{
  let tokens = msg.content.split(" ");
  let mensagem = tokens.length;
  if(mensagem > 1){
    const membros = msg.mentions.users.first();
    
    const embed = {
      "title": `Aqui está a foto de perfil do ${membros.username}`,
      "color": 5153689,
      "image": {
        "url": (membros.displayAvatarURL())
     }        
    } 
    return msg.reply({embed});
  }
  if(mensagem = 1){
    const embed = {
      "title": `Aqui está a foto de perfil do ${msg.author.username}`,
      "color": 5153689,
      "image": {
        "url": (msg.author.displayAvatarURL())
     }        
    } 
    return msg.reply({embed});
  }
}