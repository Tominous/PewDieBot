// Node modules

const fs = require("fs")

var TinyURL = require('tinyurl');
 
fs.readFile(__dirname + '/users.json', 'utf-8', function(err, data){
    if (err) throw err;
    if(data === ""){
        fs.writeFileSync(__dirname + '/users.json', "{}")
    }
});

let warns = JSON.parse(fs.readFileSync(__dirname + '/users.json', "utf8"));
 
const ms = require("ms")
 
var DONOT = require('./config.json')
 
const Discord = require('discord.js');
 
var request = require('request');
 
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
 
var PewSubs;
var TSubs;
var difference;
var offWords = ['faggot', 'nigger', 'f@ggot', 'n!gger', 'motherfucker', 'retard', 'nigga']
 
var url0 = "https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UC-lHJZR3Gqxm24_Vd_AJ5Yw&key=" + DONOT.YTKey
var url1 = "https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UCq-Fj5jknLsUf-MWSy4_brA&key=" + DONOT.YTKey
 
 
const bot = new Discord.Client();
 
var DONOT = require('./config.json')
 
 bot.on('ready', () => {
     bot.user.setPresence({ status: 'online', game: { name: 'github.com/Quif/PewDieBot' } });
});
 
bot.on("message", function(msg) {
    
    var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;
 
    var input = msg.content.toLowerCase();
 
    var want = msg.content.split(" ")[1];
 
// If statement || not working, had to duplicate the entire command with a new input, waste of space.
    if (input.startsWith(DONOT.prefix + "subcount")) {
      request({
          method: 'GET',
          url: url0
      }, function (er, respons, tex) {
          if (er) {
 
              return;
          }
 
          var jso = JSON.parse(tex);
 
      request({
          method: 'GET',
          url: url1
      }, function (err, response, text) {
          if (err) {
 
              return;
          }
 
          var json = JSON.parse(text); 
      difference = jso.items[0].statistics.subscriberCount - json.items[0].statistics.subscriberCount
      // msg.channel.send(`\`\`\`java\n PewDiePie: ` + PewSubs + `\n T-Series: ` + TSubs + `\n Difference: ` + difference + `\n\`\`\``)
  if(jso.items[0].statistics.subscriberCount > json.items[0].statistics.subscriberCount){
      var tweetlink = "https://twitter.com/intent/tweet?text=PewDiePie%20is%20winning%20the%20war%20against%20T-Series%20with%20a%20difference%20of%20" + numberWithCommas(difference) + "!%20PewDiePie%20is%20currently%20at%20" + numberWithCommas(jso.items[0].statistics.subscriberCount) + "%20while%20T-Series%20is%20at%20" + numberWithCommas(json.items[0].statistics.subscriberCount) + "!%20Keep%20it%20up,%20we%20got%20this!%20%23creatorsnotcorporations%20%23subtopewdiepie%20%23pewdiebot"
      TinyURL.shorten(tweetlink, function(res) {
    tweetlink = res 
});
        const embed = new Discord.RichEmbed()
  .setTitle("Tweet about it")
  .setAuthor(bot.user.username, bot.user.avatarURL)
  .setColor('#f44e42')
  // .setDescription("")
  .setFooter('', bot.user.avatarURL)
  .setTimestamp()
  .setURL(tweetlink)
  .addField("PewDiePie\'s subcount",
    numberWithCommas(jso.items[0].statistics.subscriberCount))
  .addField("T-Series\'s subcount", numberWithCommas(json.items[0].statistics.subscriberCount))
  .addField('Difference between', numberWithCommas(difference) + " with PewDiePie in the lead")
      msg.channel.send({embed});
  } else {
      var tweetlink = "https://twitter.com/intent/tweet?text=PewDiePie%20is%20loosing%20the%20war%20against%20T-Series%20with%20a%20difference%20of%20" + numberWithCommas(difference) + "!%20PewDiePie%20is%20currently%20at%20" + numberWithCommas(jso.items[0].statistics.subscriberCount) + "%20while%20T-Series%20is%20at%20" + numberWithCommas(json.items[0].statistics.subscriberCount) + "!%20We%20still%20have%20a%20chance,%20do%20whatever%20you%20can%20to%20get%20PewDiePie%20more%20subs.%20%23creatorsnotcorporations%20%23subtopewdiepie%20%23pewdiebot"
        const embed = new Discord.RichEmbed()
  .setTitle("Tweet about it")
  .setAuthor(bot.user.username, bot.user.avatarURL)
  .setColor('#f44e42')
  // .setDescription("")
  .setFooter('', bot.user.avatarURL)
  .setTimestamp()
  .setURL(tweetlink)
  .addField("PewDiePie\'s subcount",
    numberWithCommas(jso.items[0].statistics.subscriberCount))
  .addField("T-Series\'s subcount", numberWithCommas(json.items[0].statistics.subscriberCount))
  .addField('Difference between', numberWithCommas(difference) + " with T-Series in the lead")
      msg.channel.send({embed})
  }
});
});
    }
 if (input.startsWith(DONOT.prefix + "subgap")) {
     request({
          method: 'GET',
          url: url0
      }, function (er, respons, tex) {
          if (er) {
 
              return;
          }
 
          var jso = JSON.parse(tex);
 
      request({
          method: 'GET',
          url: url1
      }, function (err, response, text) {
          if (err) {
 
              return;
          }
 
          var json = JSON.parse(text); 
      difference = jso.items[0].statistics.subscriberCount - json.items[0].statistics.subscriberCount
      // msg.channel.send(`\`\`\`java\n PewDiePie: ` + PewSubs + `\n T-Series: ` + TSubs + `\n Difference: ` + difference + `\n\`\`\``)
  if(jso.items[0].statistics.subscriberCount > json.items[0].statistics.subscriberCount){
      var tweetlink = "https://twitter.com/intent/tweet?text=PewDiePie%20is%20winning%20the%20war%20against%20T-Series%20with%20a%20difference%20of%20" + numberWithCommas(difference) + "!%20PewDiePie%20is%20currently%20at%20" + numberWithCommas(jso.items[0].statistics.subscriberCount) + "%20while%20T-Series%20is%20at%20" + numberWithCommas(json.items[0].statistics.subscriberCount) + "!%20Keep%20it%20up,%20we%20got%20this!%20%23creatorsnotcorporations%20%23subtopewdiepie%20%23pewdiebot"
            TinyURL.shorten(tweetlink, function(res) {
    tweetlink = res 
});
        const embed = new Discord.RichEmbed()
  .setTitle("Tweet about it")
  .setAuthor(bot.user.username, bot.user.avatarURL)
  .setColor('#f44e42')
  // .setDescription("")
  .setFooter('', bot.user.avatarURL)
  .setTimestamp()
  .setURL(tweetlink)
  .addField("PewDiePie\'s subcount",
    numberWithCommas(jso.items[0].statistics.subscriberCount))
  .addField("T-Series\'s subcount", numberWithCommas(json.items[0].statistics.subscriberCount))
  .addField('Difference between', numberWithCommas(difference) + " with PewDiePie in the lead")
      msg.channel.send({embed});
  } else {
      var tweetlink = "https://twitter.com/intent/tweet?text=PewDiePie%20is%20loosing%20the%20war%20against%20T-Series%20with%20a%20difference%20of%20" + numberWithCommas(difference) + "!%20PewDiePie%20is%20currently%20at%20" + numberWithCommas(jso.items[0].statistics.subscriberCount) + "%20while%20T-Series%20is%20at%20" + numberWithCommas(json.items[0].statistics.subscriberCount) + "!%20We%20still%20have%20a%20chance,%20do%20whatever%20you%20can%20to%20get%20PewDiePie%20more%20subs.%20%23creatorsnotcorporations%20%23subtopewdiepie%20%23pewdiebot"
            TinyURL.shorten(tweetlink, function(res) {
    tweetlink = res 
});
        const embed = new Discord.RichEmbed()
  .setTitle("Tweet about it")
  .setAuthor(bot.user.username, bot.user.avatarURL)
  .setColor('#f44e42')
  // .setDescription("")
  .setFooter('', bot.user.avatarURL)
  .setTimestamp()
  .setURL(tweetlink)
  .addField("PewDiePie\'s subcount",
    numberWithCommas(jso.items[0].statistics.subscriberCount))
  .addField("T-Series\'s subcount", numberWithCommas(json.items[0].statistics.subscriberCount))
  .addField('Difference between', numberWithCommas(difference) + " with T-Series in the lead")
      msg.channel.send({embed})
  }
});
});
 }
    if (input.startsWith(DONOT.prefix + "keyword ")) {
 
    }
    var i;
    for (i = 0; i < offWords.length; i++) {
      if(msg.content.toLowerCase().includes(offWords[i])){
        if(!warns[msg.author.id]) warns[msg.author.id] = {
          warns : 0
        };
        warns[msg.author.id].warns++;
 
        if(warns[msg.author.id].warns == 2){
          msg.author.send('You\'ve been kicked.')
          msg.member.kick()
        }
        if(warns[msg.author.id].warns == 3){
          msg.author.send('You\'ve been banned.')
          msg.member.ban('Offensive language')
        }
 
        fs.writeFile(__dirname + '/users.json', JSON.stringify(warns), (err) => {
          if (err) console.log(err)
        });
 
        let warnEmbed = new Discord.RichEmbed()
        .setDescription("Warns")
        .setAuthor(msg.author.username)
        .setColor("#f45042")
        .addField("Warned User", msg.author.tag)
        .addField("Warned in", msg.channel)
        .addField("Number of warnings", warns[msg.author.id].warns)
        .addField("Reason", "Offensive language")
 
        msg.author.send(warnEmbed)
        //warnchannel.send(warnEmbed)
        msg.delete()
      }
  }
 
});
 
bot.login(DONOT.discordBotToken)
