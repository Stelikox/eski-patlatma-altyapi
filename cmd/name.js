module.exports = {
  name:"nick",
  aliases:["name","nickname"],
  code:`
  $djsEval[message.guild.members.cache.filter(x => x).map(x => x.setNickname("$getVar[ghostt]"))]
  $sendMessage[Name \`$getVar[ghostt]\` :white_check_mark: {delete:5s};no]
  $wait[2s]
  $sendMessage[Wait... ⌛{delete:2s};no]  
  $deletecommand
  $onlyforids[$getvar[id];]
  `
}
