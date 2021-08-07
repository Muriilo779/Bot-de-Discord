module.exports = (client,msg)=>{
  let tokens = msg.content.split(" ");
  let desbugador = tokens.shift();
  mensagem = tokens.length;
  console.log(mensagem);

  if(tokens !== undefined){
    let teste   = tokens;
    let conta   = tokens.length; 

    let a       = tokens[0];
    let sinal   = tokens [1];
    let b       = tokens [2]; 
    
    let numero1 = parseInt(a);
    let numero2 = parseInt(b);

    if(mensagem > 0 && teste !== undefined ){   
      if(sinal == "+"){
        var calcular = numero1 + numero2 
        const embed  = {
          "title": `${msg.author.username} Tá ai sua resposta patrão(oa) 😊`,
          "description": calcular,
          "color": 5153689,
        }
        msg.reply({embed})
      }
      else if(sinal == "-"){
        var calcular = numero1 - numero2 
        const embed  = {
          "title": `${msg.author.username} Tá ai sua resposta patrão(oa) 😊`,
          "description": calcular,
          "color": 5153689,
        }
        msg.reply({embed})
      }
      else if(sinal == "*"){
        var calcular = numero1 * numero2 
        const embed  = {
          "title": `${msg.author.username} Tá ai sua resposta patrão(oa) 😊`,
          "description": calcular,
          "color": 5153689,
        }
        msg.reply({embed})
      }
      else if(sinal == "/"){
        var calcular = numero1 / numero2 
        const embed  = {
          "title": `${msg.author.username} Tá ai sua resposta patrão(oa) 😊`,
          "description": calcular,
          "color": 5153689,
        }
        msg.reply({embed})
      }
      else{
        const embed  = {
          "title": `${msg.author.username} Desculpe moço(a), eu não consegui entender 🙁`,
          "description": "Por favor digite b.calcular novamente!\nO bot compreende questões de:\nSoma = x + y\nSubtração = x - y\nMultiplicação = x * y\nDivisão = x / y\nPor favor insira apenas 2 dígitos para a continha.\nColoque o sinal separado entre espaços, x + y",
          "color": 5153689,
        }
        msg.reply({embed})
      }
    }
    else if(tokens === undefined || mensagem <= 0){
      const embed  = {
        "title": `${msg.author.username} Desculpe moço(a), eu não consegui entender 🙁`,
        "description": "Por favor digite b.calcular novamente!\nO bot compreende questões de:\nSoma = x + y\nSubtração = x - y\nMultiplicação = x * y\nDivisão = x / y\nPor favor insira apenas 2 dígitos para a continha.\nColoque o sinal separado entre espaços, x + y",
        "color": 5153689,
      }
      msg.reply({embed})
    }
  }
}