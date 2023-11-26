const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || "6285217871749"  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://salmanahmad:s4salmanyt@cluster0.szcj2eo.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'agilmaret19@gmail.com'
global.github = 'https://github.com/salmanytofficial/XLICON-MD'
global.location = 'asia/Indonesia'
global.gurl = 'https://instagram.com/gil_bradzz28/' // add your username
global.sudo = process.env.SUDO || '6285217871749' 
global.devs = '6285217871749';
global.website = 'https://github.com/salmanytofficial/XLICON-MD' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/Personil-JKT-48-203038013.jpg'
module.exports = {
  sessionName:  process.env.SESSION_ID ||  "XLICON-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0R1aUdiS3R3MFF5YmlFOFRCZGRqTHNrbW5ZSy9XYk96TW5qb1R0eFFraz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicjUzdm9EV2tNMDZpTVN4bFFobHJTQVpUR05NUzRJN3psS0xhLytpT0hDbz0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNTnZEKzM3MGNxdkdSZ251c05Wd2NtUjM3b05remRwV1lrZ2NnU3crczBZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxczVEbitYZC9LMnp2WjcrU2hlU2MwUGsrOVRMWWNLUklrbWl6d2Zvb3d3PSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndQNVRWUGQrUEI2VGsrUWtuSzcwazRwYTBkcUQ2ZTEvMjltSkFFL3ZLa2M9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlF0QlJ6UHdJZ1Uwei9ONmxjTDZnL2ZEays4KzhjTDhzeGliQ0hKbFRKQXM9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTVFJ1QkkwOTRXdXAvWFUvS2FCazV1ZURLZlF1L0ljbUFibVAyY0ErcmJsQ3N0T2h3YXZVT25YODV2ODJ0cHNZa1U2NHg5eHEwTTFSUHN4Mk51ZXppZz09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjIxNywiYWR2U2VjcmV0S2V5IjoicDdvbnlydGRvb2JOT1duZFRsem1iSTBFQTEzL0JGWnMvbUF6VGNEUzBBWT0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiV0NqWTVTZzhSZUdFLXlMTmhYeGQtdyIsInBob25lSWQiOiI1YzkxMjM4Ni03MzJhLTRlODgtODRhMi1kNThmMmIyMjc2NjAiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ1RweDN2MXN4c2RXZXBPZXFTR2FkMHRyOHZrPSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJmUDMxY3pCVTVBRkU2Q1Q5RU5NN3p2L3haVjQ9In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNNM3kwLzBIRUlycGpxc0dHQUU9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjI0MXJaaVRvb0p1MU9WRTJGVnp3NzErbzdnRXBDUWhaSjFDQnAxOFpjaGc9IiwiYWNjb3VudFNpZ25hdHVyZSI6Iks2YmtCTkQrRWNQdEhFNWhueG8xR1ZEMVNIcDM1R1FxRjVPaFlyRTNzSmF6L2ppLzVGbzVBM2dQR0JVM2dwenhQZW4wN2J0dDFNZXRtTkVRbXpwaURRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJOWnVPOCtvTEhYTzNqR2hVMEsvQ0R5SmUzajlCYWVUSXFpVWpIQkI0eWhUSEFvMG00Y0dBbXRoYnVhYVJZT2tZK0w3UEpYODF3cFJ6dDZibDcxL2hnQT09In0sIm1lIjp7ImlkIjoiNjI4NTg5NDEwNDkwNzo5QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkdpbHp6In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjYyODU4OTQxMDQ5MDc6OUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJkdU5hMllrNktDYnRUbFJOaFZjOE85ZnFPNEJLUWtJV1NkUWdhZGZHWElZIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzAxMDMzMTAxfQ==",  //PUT Session Id Here, 
  author:  process.env.PACK_AUTHER ||  '©Gilzz botz',
  packname:  process.env.PACK_NAME || 'Gilzz28',
   
  botname:   process.env.BOT_NAME === undefined ? "Gilzz botz" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'Gilzz' : process.env.OWNER_NAME,  
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
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? 'HI IM ALIVE NOW' : process.env.ALIVE_MESSAGE,
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
