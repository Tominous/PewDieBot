// Node modules

const fs = require("fs")
const config = require("./config.json")
const request = require("request")
const TinyURL = require("tinyurl")

const Discord = require("discord.js")
const bot = new Discord.Client()

// Used to format a string
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

// Youtube API endpoints
const PewDiePie_url = "https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UC-lHJZR3Gqxm24_Vd_AJ5Yw&key=" + config.YTKey
const TSeries_url = "https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UCq-Fj5jknLsUf-MWSy4_brA&key=" + config.YTKey

// Bot presence
bot.on("ready", () => {
    bot.user.setPresence({ status: "online", game: { name: "github.com/Quif/PewDieBot" } })
})

// Handle a message
bot.on("message", function (msg) {

    // Input is set to lowercase
    var input = msg.content.toLowerCase()

    // Accepted strings for subcounts
    if (input.startsWith(config.prefix + "subcount") || input.startsWith(config.prefix + "subgap") || input.startsWith(config.prefix + "sg") || input.startsWith(config.prefix + "sc")) {

        // Make both requests
        request({
            method: "GET",
            url: PewDiePie_url
        }, function (er, respons, tex) {
            if (er) {

                return
            }

            var jso = JSON.parse(tex)

            request({
                method: "GET",
                url: TSeries_url
            }, function (err, response, text) {
                if (err) {
                    return
                }

                var json = JSON.parse(text)
                difference = jso.items[0].statistics.subscriberCount - json.items[0].statistics.subscriberCount
                 msg.channel.send(`\`\`\`java\n PewDiePie: ` + PewSubs + `\n T-Series: ` + TSubs + `\n Difference: ` + difference + `\n\`\`\``)
                var lead;
                if (jso.items[0].statistics.subscriberCount > json.items[0].statistics.subscriberCount) {
                    lead = "PewDiePie"
                } else {
                    lead = "T-Series"
                }
                    var PewWin = "https://twitter.com/intent/tweet?text=PewDiePie%20is%20winning%20the%20war%20against%20T-Series%20with%20a%20difference%20of%20" + numberWithCommas(difference) + "!%20PewDiePie%20is%20currently%20at%20" + numberWithCommas(jso.items[0].statistics.subscriberCount) + "%20while%20T-Series%20is%20at%20" + numberWithCommas(json.items[0].statistics.subscriberCount) + "!%20Keep%20it%20up,%20we%20got%20this!%20%23creatorsnotcorporations%20%23thankyoupewdiepie%20%23pewdiebot"
                    var Twin = "https://twitter.com/intent/tweet?text=PewDiePie%20is%20losing%20the%20war%20against%20T-Series%20with%20a%20difference%20of%20" + numberWithCommas(difference) + "!%20PewDiePie%20is%20currently%20at%20" + numberWithCommas(jso.items[0].statistics.subscriberCount) + "%20while%20T-Series%20is%20at%20" + numberWithCommas(json.items[0].statistics.subscriberCount) + "!%20We%20still%20have%20a%20chance,%20do%20whatever%20you%20can%20to%20get%20PewDiePie%20more%20subs.%20%23creatorsnotcorporations%20%23thankyoupewdiepie%20%23pewdiebot"
                    function leadTweet(){
                    if(jso.items[0].statistics.subscriberCount > json.items[0].statistics.subscriberCount){
                        return PewWin 
                    } else {
                        return Twin 
                    }
                    }
                    const embed = new Discord.RichEmbed()
                        .setTitle("Tweet about it")
                        .setAuthor(bot.user.username, bot.user.avatarURL)
                        .setColor("#f44e42")
                         .setDescription("")
                        .setFooter("", bot.user.avatarURL)
                        .setTimestamp()
                        .setURL(leadTweet())
                        .addField("PewDiePie\'s subcount",
                            numberWithCommas(jso.items[0].statistics.subscriberCount))
                        .addField("T-Series\'s subcount", numberWithCommas(json.items[0].statistics.subscriberCount))
                        .addField("Difference between", numberWithCommas(difference) + " with " + lead + " in the lead")
                    msg.channel.send({ embed })
                })
            })
        }
})

// Start the bot
bot.login(config.discordBotToken)
