module.exports = (client,msg)=>{
  let tokens = msg.content.split(" ");
  let teste = tokens.shift();
  mensagem = tokens.length;
  console.log(mensagem);

  if(tokens !== undefined && mensagem > 0){

    const ball =[
      "Sim 😉",
      "Não 😔",
      "Talvez 😶",
      "Sei la 😶", 
      "Pergunta pra outra pessoa 😶",
      "Essa é uma pergunta muito complexa para mim 😪",
      "Certamente 😉",
      "Não tenho conhecimento sobre isso por enquanto 😶",
      "Pergunta pro mario 😐",
      "Certamente não 🙄",
      "Óbvio que sim 😁",
      "dããã óbvio que não 😐"
    ]

    const reply = Math.floor(Math.random() * ball.length); 
    const embed = {
      "title": `${msg.author.username} Sua resposta é  👀`,
      "description": (ball[reply]),
      "color": 5153689,
    }
    msg.reply({embed})
  }
  else if(tokens === undefined || mensagem <= 0){
    const embed = {
      "title": `Desculpe moço(a), eu não consegui entender 🙁`,
      "description": 'Digite sua pergunta após o comando `8.ball` entre espaços 😁',
      "color": 5153689,
    }
    msg.reply({embed})
  }
}

