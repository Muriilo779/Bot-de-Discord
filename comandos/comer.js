module.exports = (client,msg)=>{
  
const gif = [
  `https://media1.tenor.com/images/004cce51bb9e85497fa319597baf09ba/tenor.gif?itemid=14399295`,
  `https://data.whicdn.com/images/284494405/original.gif`,
  `https://pa1.narvii.com/7293/ffe00db4255d7e5b1f8acd75950bceb1c72317cbr1-800-450_hq.gif`,
  `https://i.pinimg.com/originals/92/9d/a1/929da1490354bd6655510b1f5ecca7d5.gif`,
  `https://i.pinimg.com/originals/4c/da/62/4cda627a8e7b5fd4fda0cba2bf24e2eb.gif`,
  `https://pa1.narvii.com/6206/d72b770f75ea8a7a1f1c29dbc60e6b934a8dbe14_hq.gif`,
  `https://pa1.narvii.com/6772/54897f2dec5f43716c44a0effb75af8d7b665d95_hq.gif`,
  `https://pa1.narvii.com/6525/37a0cc02622cf082beb9d7a88b1536a8ceac3a7f_hq.gif`,
  `https://64.media.tumblr.com/6d7591f8ab3f9167a8aec1cb39266470/tumblr_mx518nKD2U1rkt0ujo1_500.gif`,
  `https://64.media.tumblr.com/89151e33b249d44e7e088ea5e39fad05/8e3ef23e3c68c2b2-b4/s500x750/53fab72a080cbb9287dbd25d9672ab8c6b448c38.gifv`,
  `https://pandatoryu.files.wordpress.com/2013/07/one-piece-gif-de-luffy-de-hika-ri-visite-pandatoryu.gif?w=400`,
  ]
const reply = (Math.floor(Math.random() * gif.length));
const embed = {
  "title": `${msg.author.username} Ta de buxim cheio 😳`,
  "color": 5153689,
  "image": {
      "url": (gif[reply])
    }
  };
msg.reply({ embed })
}
