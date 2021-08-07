module.exports = (client,msg)=>{
  const gif = [
    `https://media.giphy.com/media/tuCFp8rod0x3O/giphy.gif`,
    `https://media.giphy.com/media/q8ld8Sk7WWyY0/giphy.gif`,
    `https://media.giphy.com/media/QZafWHTjJmwTK/giphy.gif`,
    `https://media.giphy.com/media/ZpfRVpfuh9YQM/giphy.gif`,
    `https://media.giphy.com/media/82nhQz9tAQ8xy/giphy.gif`,
    `https://media.giphy.com/media/13Uqp5IGFpmDle/giphy.gif`,
    `https://media.giphy.com/media/n7wjCNgkWik6I/giphy.gif`,
    `https://media.giphy.com/media/vplUlYHL0WnaE/giphy.gif`,
    `https://media.giphy.com/media/IOieyDVe5OLGH7wpsk/giphy.gif`,
    `https://thumbs.gfycat.com/SadLightCuttlefish-size_restricted.gif`,
    `http://www.superamiches.com/wp-content/uploads/2014/08/tumblr_n2q6y0YBod1t5lksuo1_500.gif`,
    `https://64.media.tumblr.com/7af37f3c6adef5cd600fbf3687f9504b/tumblr_pa50yisCWw1x1uwppo1_500.gifv`,
    `https://data.whicdn.com/images/169713550/original.gif`,
    `https://64.media.tumblr.com/5f009aaf8c273f4e665d2f855f8b1b46/1e695352813918d3-41/s640x960/e877f003838bcb1058aa105ee5f2b3ba036e9b8e.gifv`,
    `https://i.imgur.com/9BemiHg.gif`,
    `https://media1.tenor.com/images/7f07f8cd9fb0eb00681411ed10718401/tenor.gif?itemid=10972032`,
    `https://64.media.tumblr.com/a93cb9a54102289c921b379de07306fe/tumblr_p7essndKuj1x1uwppo1_500.gifv`,
    `https://media4.giphy.com/media/6WPM7EMUGaKkw/200.gif?cid=82a1493bo9airjj18xdrasasg0i88ta5olrwrsyjgsgt1s3f&rid=200.gif&ct=g`,
    `https://i.pinimg.com/originals/40/21/01/402101d86c09e5f70ac042e6ac942db2.gif`,
    `https://i.pinimg.com/originals/53/cd/16/53cd1648b687888897a19e5f87c0df31.gif`,
    `https://pa1.narvii.com/6423/b09ad8ef440f67c568e67a79b7118e057b3842ac_hq.gif`,
    `https://i.gifer.com/4YRJ.gif`,
    `https://i0.wp.com/66.media.tumblr.com/413003a00d32f54f6cf8dc4e09353fa4/tumblr_ovbd5ifZ7S1s4pqyso1_250.gif`,
    `https://media1.tenor.com/images/f36691bf30c842323945386eafaf4b55/tenor.gif?itemid=10801289`,
    `https://media3.giphy.com/media/DVhU8XfiAosW4/200w.gif`
  ]
  const reply = (Math.floor(Math.random() * gif.length));
  const embed = {
    "title": `${msg.author.username} Ta feliz 🤗`,
    "color": 5153689,
    "image": {
      "url": (gif[reply])
    }
  };
  msg.reply({ embed })
}
