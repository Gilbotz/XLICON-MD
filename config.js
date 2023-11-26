const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || "6285217871749"  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://salmanahmad:s4salmanyt@cluster0.szcj2eo.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'agilmaret19@gmail.com'
global.github = 'https://github.com/salmanytofficial/XLICON-MD'
global.location = 'Kosambi/Tangerang'
global.gurl = 'https://instagram.com/gil_bradzz28/' // add your username
global.sudo = process.env.SUDO || '6285217871749' 
global.devs = '6285217871749';
global.website = 'https://chat.whatsapp.com/invite/BHl3zLyT7pbBUXLrE8KCf9' //wa.me/6285217871749
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'Personil-JKT-48-20303813.jpg'
module.exports = {
  sessionName:  process.env.SESSION_ID ||  "XLICON-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0c1S0ljbEszejlEN0tmdmRBVjBPRFhMYmRhczlTSzVNS0VXditSanJGcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidzBFRFIwUjlHalhvZDRpQkpGd3VJVll6SzNRNS9VUWxTeTR0OXRrdzd5ST0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3S3NETUpiZ3IyNHlZc3oyejAxWFlvOEYzNXBNRXJZcGtVSEFNcUxrOUdJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIveTdtZUN4bDNrSXhCdmxTQWZkenZUOS9nMVZiSndueStUamxpYjRXWmljPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVPUHVrM1ZFV0JwdW1yVytIcnk2MTU3Ujk3K1p6ZDM0K1BNZlBWR0VpV289In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkQzUTFFcG1HYytjclloNE9sQWhiN2ZRZlVTRDM4NUVweTBxWUVqNWs4Qkk9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNK05MSmJUaWNiMzM4Tjlud3dpNEVMNWdQWW1aU2NmWjNwMUduUnVZTm15emhqV0VyVi8ya2ZwWUNpRlhkQXZDQXdzdHB6RUVESlZ3K3VuOWgyR3dEdz09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjE4MiwiYWR2U2VjcmV0S2V5IjoiMzRJNE13L043cGIrdGpWeXROUFNkZi81TmhDZlRqMlo1bGVPSThHRFRjTT0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiSW9lQVoyM1ZRSi1ZM2MzVC03aUdBZyIsInBob25lSWQiOiI1MDE2MjkzYS1kMWE4LTQzZjgtYTFkNS0wODYyMDM0Nzg5YmIiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMDdydDVuTFhpdzZYL291R0NnNWkvMVZjZUJNPSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJES2N6aks0Y1pqcjJnRzBkQ29SQXV2SElJYU09In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNNdnkwLzBIRUw2d2pxc0dHQVE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjI0MXJaaVRvb0p1MU9WRTJGVnp3NzErbzdnRXBDUWhaSjFDQnAxOFpjaGc9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkhsWGE3eTM4TzFhY01BeGlaakhsTVZZWnhSVmQ1ZmpqWlhMSmlobWRDVFBpUGUxdmpKcDJBSDJVOXdpSVE1MGxFeTN0cXJYaDBUMEhyTTlic3M1K0NRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJvM3hFY3laU0x6QkxLQytGaVNZRnVYbXZiTzgybzFPTkxRTnNwRUw4NmpZS2Npa0JuZkxiVTJ4b0lrNTJJMFFad3NkczA4YUNTQ1p3aWdrUjZ6VmlBdz09In0sIm1lIjp7ImlkIjoiNjI4NTg5NDEwNDkwNzo3QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkdpbHp6In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjYyODU4OTQxMDQ5MDc6N0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJkdU5hMllrNktDYnRUbFJOaFZjOE85ZnFPNEJLUWtJV1NkUWdhZGZHWElZIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzAxMDI1ODU4fQ== ",  //PUT Session Id Here, 
  author:  process.env.PACK_AUTHER ||  '© Gilzz botz',
  packname:  process.env.PACK_NAME || 'Gilz',
   
  botname:   process.env.BOT_NAME === undefined ? "Gilzz botz" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'Gilz28' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? true : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? true : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? 'HALO IM GILZ NEW ' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'GOJO',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
