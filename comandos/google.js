module.exports = (client,msg)=>{
  const dividirMensagem = msg.content.split(" ");
  const quantidadeDePalavras = dividirMensagem.length 
  if(quantidadeDePalavras == 1){
    const embed = {
      "title": "Quer pesquisar o que parceiro?",
      "description": "Eu preciso saber o que você procura nesse vasto mundo da internet, acrescente sua pesquisa logo após o comando 'b.google' 🙂\n É valído lembrar que esse comando só irá responder com o link de pesquisa do Google, nada muito grandioso 😐",
      "color": 5153689,
    }
    msg.reply({embed})
  }else if(dividirMensagem => 2){
    const retirarComando = dividirMensagem.shift();
    const sinaldeMais = dividirMensagem.join("+");
    const mensagem = sinaldeMais;
    const embed = {
      "title": `https://www.google.com/search?q=` + mensagem,
      "color": 5153689,
    }
    msg.reply({embed})

  }
}