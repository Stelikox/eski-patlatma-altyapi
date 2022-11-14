module.exports = {
  name:"rol.delete",
  code:`
$djsEval[message.guild.roles.cache.forEach(r => {
r.delete().catch(err => {})
})]
  $sendMessage[
  $roleCount Role Deleted :white_check_mark:
  Wait... ⌛;no]  
  $deletecommand
  $onlyforids[$getvar[id];]
  `
}
