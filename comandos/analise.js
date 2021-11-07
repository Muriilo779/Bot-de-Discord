module.exports = (client,msg)=>{
  const gif = [
    `https://i.gifer.com/8WV9.gif`,
    `https://64.media.tumblr.com/50ef39294731f411671e27898835b030/tumblr_n2uamjciss1ssbae2o1_500.gif`,
    `https://64.media.tumblr.com/b22e7fe6dbddf2584fe0d59add5b9108/tumblr_ohank8ud6D1u9aqcno1_500.gif`,
    `https://pa1.narvii.com/6529/9e5c9a9b50318c652e80aa9b2d7a54fc11ae7c17_00.gif`,
    `https://64.media.tumblr.com/f0bed8ba3958c748d1f29429ada8770d/a7bccc431a022e76-d0/s400x600/2219e4eccc6650889349cc86347934d6e57025be.gifv`,
    `https://64.media.tumblr.com/cce0b77bd45f3b67fcd384e3626d3217/d7c9116ae4b7cbf8-44/s500x750/9a97f4f94b1dd40ce3fc7472690b8e2be0ea62ca.gifv`,
  ]
  const reply = (Math.floor(Math.random() * gif.length));
  const embed = {
    "title": `${msg.author.username} esta analisando a situação 🧐`,
    "color": 5153689,
    "image": {
      "url": (gif[reply])
    }
  };
  msg.reply({ embed })
}
