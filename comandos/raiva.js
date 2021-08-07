module.exports = (client,msg)=>{
  const gif = [
    `https://media4.giphy.com/media/10RsZ8aVWR1yKc/giphy.gif`,
    `https://media1.giphy.com/media/10WfBXna14XNks/giphy.gif`,
    `https://i.pinimg.com/originals/7e/bd/6e/7ebd6ee8d522a989102111c82088507a.gif`,
    `https://media1.tenor.com/images/be01e865ad1b015090604643dcabee91/tenor.gif?itemid=5235529`,
    `https://i.imgur.com/KUvRvGO.gif`,
    `https://i.imgur.com/ewGYnZm.gif`,
    `https://giffiles.alphacoders.com/354/35458.gif`,
    `https://i.imgur.com/TTyEKn4.gif`,
    `https://media.tenor.com/images/c81c15731059a21d2eb365a0655877be/tenor.gif`,
    `https://64.media.tumblr.com/9ff372da68c9455a5d1e002f405ec9b3/tumblr_ow47g4Xezp1vz2sn9o2_500.gifv`,
    `https://i.pinimg.com/originals/4a/02/2f/4a022face87c1bffb390465928352456.gif`,
    `https://64.media.tumblr.com/4cf213270f68b40cf814b83c34b581d2/tumblr_mom7757tAl1rwgj3ko1_500.gif`,
    `https://64.media.tumblr.com/028ec33ace480c4badbde3f6c3325450/fa7c241ded55495a-10/s400x600/e4113369a8541b96f49752174a2eb7092f474767.gifv`,
    `https://static.wikia.nocookie.net/liberproeliis/images/1/15/Tumblr_mmp4z7KalM1s4ugiyo1_r1_500.gif/revision/latest/scale-to-width-down/250?cb=20191027142621&path-prefix=pt-br`,

  ]
  const reply = (Math.floor(Math.random() * gif.length));
  const embed = {
    "title": `${msg.author.username} tá bravo 😡😡`,
    "color": 5153689,
    "image": {
      "url": (gif[reply])
    }
  };
  msg.reply({ embed })
}