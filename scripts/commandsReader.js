const fs = require("fs");
const dir = "./comandos/";

module.exports = (prefix) =>{
    var commands= {};

    const scripts = fs.readdirSync(dir);
    scripts.forEach(script =>{
        commands[prefix+script.split(".")[0]] = require("../"+dir+script);
    });
    return commands;
}
//Esse arquivo tem como funcao ler o nome dos arquivos da pasta comandos e tambem o conteudo dentro dela e ira solicitar que 
//cada nome do arquivo da pasta comandos com o prefixo que eu escolhi vira uma funcao no discord.