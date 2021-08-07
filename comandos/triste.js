module.exports = (client,msg)=>{
    const gif = [
        `https://media.giphy.com/media/j1AeED5w0xmVy/giphy.gif`,
        `https://media.giphy.com/media/JfwIhMXSzdxYI/giphy.gif`,
        `https://data.whicdn.com/images/303089921/original.gif`,
        `https://media.giphy.com/media/xgmUI4bhAUE12/giphy.gif`,
        `https://media1.tenor.com/images/8f6da405119d24f7f86ff036d02c2fd4/tenor.gif`,
        `https://data.whicdn.com/images/290903889/original.gif`,
        `https://i0.wp.com/giffiles.alphacoders.com/206/206599.gif`,
        `https://data.whicdn.com/images/317855095/original.gif`,
        `http://25.media.tumblr.com/dd92204e626cbe0e1d0268e538ba3ab4/tumblr_mggyg0Dzcc1s2axdno1_r1_500.gif`,
        `https://data.whicdn.com/images/330501332/original.gif`,
        `https://data.whicdn.com/images/318078305/original.gif`,
        `https://pa1.narvii.com/6323/9f7a265c7615685fff1991b3f8464c3e8591e1f0_hq.gif`,
        `https://31.media.tumblr.com/0418104048476f688347186aaac097fc/tumblr_ms4rxtqqC41spzgpco1_500.gif`,
        `https://64.media.tumblr.com/1a0dca8a4e551886d4efb6a3a81a86e3/tumblr_inline_ms4dviQ3ma1qmstq3.gif`,
        `https://i.kym-cdn.com/photos/images/original/000/797/012/144.gif`,
    ]
    const reply = (Math.floor(Math.random() * gif.length));
    const embed = {
        "title": `${msg.author.username} Está triste 😢`,
        "color": 5153689,
        "image": {
          "url": (gif[reply])
        }
      };
      msg.reply({ embed })}