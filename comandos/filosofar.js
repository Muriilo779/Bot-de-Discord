module.exports = (client,msg)=>{
  const frase = [
    `"Aquilo que se faz por amor está sempre além do bem e do mal." Friedrich Nietzsche`,
    `"A vida não é um problema a ser resolvido, mas uma realidade a ser experimentada." Soren Kierkegaard`,
    `"Felicidade é como uma borboleta: quanto mais você tenta apanhá-la, mais ela se afasta de você. Mas se você dirigir sua atenção para outras coisas, ela virá e pousará suavemente no seu ombro." Henry Thoreau`,
    `"Acredite em milagres, mas não dependa deles." Immanuel Kant`,
    `"Vou-lhe dizer um grande segredo, meu caro. Não espere o juízo final. Ele realiza-se todos os dias." Albert Camus`,
    `"A essência do conhecimento consiste em aplicá-lo, uma vez possuído." Confúcio`,
    `"A filosofia que cultivo não é nem tão bárbara nem tão inacessível que rejeite as paixões; pelo contrário, é só nelas que reside a doçura e felicidade da vida." René Descartes`,
    `"O truque da filosofia é começar por algo tão simples que ninguém ache digno de nota e terminar por algo tão complexo que ninguém entenda." Bertrand Russell`,
    `Tente mover o mundo - o primeiro passo será mover a si mesmo." Platão`,
    `"O que o homem superior procura está em si mesmo; o que o homem pequeno procura está nos outros." Confúcio`,
    `"As leis da natureza são apenas os pensamentos matemáticos de Deus." Euclides de Alexandria`,
    `"É necessário cuidar da ética para não anestesiarmos a nossa consciência e começarmos a achar que tudo é normal." Mario Sergio Cortella`,
    `"Se vives de acordo com as leis da natureza, nunca serás pobre; se vives de acordo com as opiniões alheias, nunca serás rico." Sêneca `,
    `"Trabalha como se vivesses para sempre. Ama como se fosses morrer hoje." Sêneca `,
    `"Vive com os homens como se Deus te estivesse a ver; fala com Deus como se os homens te estivessem a ouvir." Sêneca `,
    `"Mas eis a hora de partir: eu para morte, vós para a vida. Quem de nós segue o melhor rumo ninguém o sabe, exceto os deuses." Sócrates `,
    `"O que não provoca minha morte faz com que eu fique mais forte." Friedrich Nietzsche `,
    `"De todos os animais selvagens, o homem jovem é o mais difícil de domar." Platão`,
    `"As novas opiniões são sempre suspeitas e geralmente opostas, por nenhum outro motivo além do fato de ainda não serem comuns." John Locke`,
    `"Nada de grande se realizou no mundo sem paixão." Georg Wilhelm Friedrich Hegel`,
    `"Conta-me o teu passado e saberei o teu futuro." Confúcio`,
    `"O público é uma besta feroz. Deve-se enjaulá-lo ou fugir dele." Voltaire`,
    `"Nada existe de grandioso sem paixão." Georg Wilhelm Friedrich Hegel`, 
    `"Saber o que é correto e não o fazer é falta de coragem." Confúcio`,
    `"O homem não é mais do que a série dos seus atos." Georg Wilhelm Friedrich Hegel`,
    `"Me olhei no espelho e perguntei: 'Quem é você?' E ele me respondeu: 'Suas escolhas...' " Autor desconhecido`,
    `"A história da sociedade até os nossos dias é a história da luta de classes." Karl Marx`,
    `"Nasci para satisfazer a grande necessidade que eu tinha de mim mesmo." Jean-Paul Sartre`, 
    `"Não há coisa que mais nos engane do que o nosso juízo." Leonardo da Vinci`,
    `"A missão suprema do homem é saber o que precisa para ser homem." Immanuel Kant`,
    `"O que fala semeia; o que escuta recolhe." Pitágoras`,
    `"Quando vires um homem bom, tenta imitá-lo; quando vires um homem mau, examina-te a ti mesmo." Confúcio`,
    `"Onde não há lei, não há liberdade." John Locke`,
    `"Onde não há igualdade, a amizade não perdura." Platão`,
    `"A tristeza pura é tão impossível como a alegria pura." Leon Tolstói`,
    `"Quem comete uma injustiça é sempre mais infeliz que o injustiçado." Platão`,
    `"O que te preocupa, te escraviza." John Locke`,
    `"A vida é muito importante para ser levada a sério." Oscar Wilde`,
    `"Se quer ser amado, ame." Sêneca`,
    `"Somos feitos de carne, mas temos de viver como se fôssemos de ferro." Sigmund Freud`,
    `"Ajuda o teu semelhante a levantar a carga, mas não a levá-la." Pitágoras`,
    `"Não existem métodos fáceis para resolver problemas difíceis." René Descartes`,
    `"A arte é um dos meios que une os homens." Leon Tolstói`,
    `"A vida bem preenchida torna-se longa." Leonardo da Vinci`,
    `"Façam o que fizerem, destruam a infâmia e amem aqueles que vos amam." Voltaire`,
    `"Podemos julgar o coração de um homem pela forma como ele trata os animais." Immanuel Kant`,
    `"Aja antes de falar e, portanto, fale de acordo com os seus atos." Confúcio`,
    `"O homem superior atribui a culpa a si próprio; o homem comum, aos outros." Confúcio`,
    `"Aquele que conheceu apenas a sua mulher, e a amou, sabe mais de mulheres do que aquele que conheceu mil." Leon Tolstói`,
    `"Quem pensa pouco, erra muito." Leonardo da Vinci`,
    `"Com organização e tempo, acha-se o segredo de fazer tudo e bem feito." Pitágoras`,
    `"O homem não é nada além daquilo que a educação faz dele." Immanuel Kant`,
    `"A pintura é poesia sem palavras." Voltaire`,
    `"Exige muito de ti e espera pouco dos outros. Assim, evitarás muitos aborrecimentos." Confúcio`,
    `"Pouca sinceridade é uma coisa perigosa, e muita sinceridade é absolutamente fatal." Oscar Wilde`,
    `"Nada é pequeno no amor. Quem espera as grandes ocasiões para provar a sua ternura não sabe amar." Laure Conan`,
    `"O amor triunfa sobre tudo, cedamos também nós ao amor." Virgílio`,
    `"Você só saberá realmente o que é o amor, quando lhe perguntarem sobre ele e você não pensar em uma definição, mas em um nome." Bob Marley`,
    `"Conhecendo tanto a derrota quanto a vitória, andando por aí derramando lágrimas, é assim que você se torna um verdadeiro homem." Shanks(One Piece)`,
  ]
  const reply = (Math.floor(Math.random() * frase.length));
  const embed = {
    "title": (frase[reply]),
    "color": 5153689,
  };
  msg.reply({ embed })
}
