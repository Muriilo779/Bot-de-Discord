module.exports = (client,msg)=>{
  const gif = [
    `https://data.whicdn.com/images/169713550/original.gif`,
    `https://media.tenor.com/images/fd860edcaea9dacd6cd1f05a3d1e9529/tenor.gif`,
    `https://data.whicdn.com/images/169295685/original.gif`,
    `https://i.imgur.com/1YLBmG3.gif`,
    `https://i.pinimg.com/originals/40/aa/91/40aa91ca04f773bf461c8f9eac326ca8.gif`,
    `https://i.pinimg.com/originals/72/90/c5/7290c552582ceaef52ed0f7b16ad3ea9.gif`,
    `https://64.media.tumblr.com/6977d71bebe691f454071da42b3db52c/d6e5b7d317519ad5-52/s500x750/6b5cf633d8e0b054de1ba8cf376e23b310b65cc2.gifv`,
    `https://uploads.spiritfanfiction.com/fanfics/capitulos/202103/roronoa-zoro-21987611-280320212338.gif`,
    `https://pa1.narvii.com/6985/172b21fec52c4b93e776d3fcf0a8a52f6b029189r1-480-270_00.gif`,
    `https://i.pinimg.com/originals/2b/57/57/2b575744b50824e2c0145ff17ed50cd8.gif`,
    `https://em.wattpad.com/d6ae8dfc1400b62b166ff55555fd1a7959c131fb/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f564b614d4a4f795f3969514739673d3d2d313031352e313562623562666336353436306162373834353330343735373337312e676966?s=fit&w=720&h=720`,
    `https://media.tenor.com/images/52421f1161d00e9273627057a1a18eb1/tenor.gif`,
    `https://media.tenor.com/images/13dabe2f7ae069cbabf9171cd1b9251c/tenor.gif`,
    `https://i.pinimg.com/originals/29/01/c4/2901c4302e6819464f110d57852c5433.gif`
  ]
  const reply = (Math.floor(Math.random() * gif.length));
  const embed = {
    "title": `${msg.author.username} esta gargalhando 🤣🤣🤣`,
    "color": 5153689,
    "image": {
      "url": (gif[reply])
    }
  };
  msg.reply({ embed })
}
