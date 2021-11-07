// module.exports = (client,msg)=>{ 
//   const jimp = require('jimp');
//   const editar = async (anexo) => {  
//     const imgBase = await jimp.read('bolsonaro2.jpeg')
//     let imgAnexo = await jimp.read(msg.attachments.each(console.log))
//     imgAnexo.resize(308, 171)
//     imgAnexo.rotate(-1);
//     const resultado = imgBase.composite(imgAnexo, 320,181).write('beta2.png')
//   }
//     msg.reply('', { files: 'beta2.png' });
// }
