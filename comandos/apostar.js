module.exports = (client,msg)=>{
  const tokens = msg.content.split(" ");
  const numero = tokens.length;

  console.log(tokens)

  if(numero < 1 || numero == 1){
    const embed  = {
      "title": `${msg.author.username}, cara ou coroa meu rei?`,
      "color": 5153689,
    }
    msg.reply({embed})
  }

  if(numero >= 2){
    const escolhaLado = tokens[1]
    if(escolhaLado == "cara" || "coroa"){
      const moeda = [
      'cara',
      'coroa'
      ]
      let sorte = (Math.floor(Math.random() * moeda.length));
      if(escolhaLado == moeda[sorte]){
        const embed = {
          "title":`${msg.author.username} ganhou 😎`,
          "color": 5153689,
        }
        msg.reply({embed})
      }
      else if(escolhaLado != moeda[sorte]){
        const embed = {
          "title": `${msg.author.username} perdeu 😢`,
          "color": 5153689,
        }
      msg.reply({embed})
      }
    }
  }
}
