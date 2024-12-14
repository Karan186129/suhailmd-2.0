const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_04_24_12_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgOTcsXG4gICAgICAgIDI4LFxuICAgICAgICA1NSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDU1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxODksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMzgsXG4gICAgICAgIDYwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgOTAsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTY5LFxuICAgICAgICA4NixcbiAgICAgICAgMTk5LFxuICAgICAgICA2MixcbiAgICAgICAgNzQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTgsXG4gICAgICAgIDgzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgMTU3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTEwLFxuICAgICAgICAxMzksXG4gICAgICAgIDIxNCxcbiAgICAgICAgNzksXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgOTcsXG4gICAgICAgIDc4LFxuICAgICAgICA3NixcbiAgICAgICAgMjA4LFxuICAgICAgICA5MCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNzksXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDQ5LFxuICAgICAgICA5MyxcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDgwLFxuICAgICAgICAzMSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDI4LFxuICAgICAgICAyNyxcbiAgICAgICAgMTQyLFxuICAgICAgICA4NSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDEyMixcbiAgICAgICAgMSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA4MixcbiAgICAgICAgMjYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNjksXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDI5LFxuICAgICAgICA5NCxcbiAgICAgICAgMzUsXG4gICAgICAgIDEyN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTYsXG4gICAgICAgIDM5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjM3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDksXG4gICAgICAgIDUzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgODIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNjYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgOTMsXG4gICAgICAgIDIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNjYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDg1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDksXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTY1LFxuICAgICAgICAyOCxcbiAgICAgICAgNjEsXG4gICAgICAgIDExOSxcbiAgICAgICAgNjMsXG4gICAgICAgIDM4LFxuICAgICAgICAyOCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDM4LFxuICAgICAgICAzOCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNyxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDMzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMzEsXG4gICAgICAgIDI0MixcbiAgICAgICAgNCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDExMyxcbiAgICAgICAgNzUsXG4gICAgICAgIDU0LFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzksXG4gICAgICAgIDUzLFxuICAgICAgICAyMyxcbiAgICAgICAgMCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDEzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNzIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjksXG4gICAgICAgIDEzNixcbiAgICAgICAgNjQsXG4gICAgICAgIDY2LFxuICAgICAgICA0NixcbiAgICAgICAgMjA2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjA1LFxuICAgICAgICA4NixcbiAgICAgICAgMTIyLFxuICAgICAgICA4MixcbiAgICAgICAgMTY4LFxuICAgICAgICA5MCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNjMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNDcsXG4gICAgICAgIDUzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExMixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA3MFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDQwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxODUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDExNCxcbiAgICAgICAgOSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA0NixcbiAgICAgICAgNzcsXG4gICAgICAgIDQ0LFxuICAgICAgICA2NSxcbiAgICAgICAgOTAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjQxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTQzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNTEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNTYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNSxcbiAgICAgICAgODMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDQxLFxuICAgICAgICA3MyxcbiAgICAgICAgNzksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDM2LFxuICAgICAgICAzOSxcbiAgICAgICAgMTkwLFxuICAgICAgICA5OCxcbiAgICAgICAgNTAsXG4gICAgICAgIDkxLFxuICAgICAgICA0MSxcbiAgICAgICAgMTk0LFxuICAgICAgICAzLFxuICAgICAgICAzMCxcbiAgICAgICAgMTkyLFxuICAgICAgICA3NSxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEwNixcbiAgICAgICAgNDgsXG4gICAgICAgIDY4LFxuICAgICAgICA3MSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNixcbiAgICAgICAgMTQ1LFxuICAgICAgICA0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDYzLFxuICBcImFkdlNlY3JldEtleVwiOiBcImZPa1lUYmsrWjlkR01mMG5IZUxrcjdwK2VwSUlsc3hIUjEvWHk0WGR4VEE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMjk2OTY1MDYwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJDMDZBREI1MTcwMkI0ODk5M0ZCRjhCNkI0ODQyMTc4NlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzQwNjM4ODlcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMyOTY5NjUwNjBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjNBQjAyQzg3NUY1QTUyMzRBRURBQjkyM0I5MjJFMzA0XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczNDA2Mzg5MVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJKalBqcHJzLVQwVzNab29MN2x4U21BXCIsXG4gIFwicGhvbmVJZFwiOiBcImRkMTk0NTEyLTYzYWYtNDY4MS04MmFlLTU4ZTRkZWZiMmUyZFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDAsXG4gICAgICAyNTQsXG4gICAgICAxODQsXG4gICAgICAxMjMsXG4gICAgICA1MCxcbiAgICAgIDE1NyxcbiAgICAgIDEyNixcbiAgICAgIDkyLFxuICAgICAgMTksXG4gICAgICAyMjYsXG4gICAgICAzLFxuICAgICAgMTY2LFxuICAgICAgMjI1LFxuICAgICAgMjAzLFxuICAgICAgMTUyLFxuICAgICAgMTY1LFxuICAgICAgMjAxLFxuICAgICAgNDgsXG4gICAgICA1MyxcbiAgICAgIDZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTksXG4gICAgICA4LFxuICAgICAgMjUsXG4gICAgICAxMjgsXG4gICAgICA1OSxcbiAgICAgIDMzLFxuICAgICAgMTQwLFxuICAgICAgMjU0LFxuICAgICAgMjA3LFxuICAgICAgMTMxLFxuICAgICAgMTIsXG4gICAgICAxNjksXG4gICAgICAyMTYsXG4gICAgICA3NSxcbiAgICAgIDc0LFxuICAgICAgMTgsXG4gICAgICAyMTYsXG4gICAgICA5LFxuICAgICAgMTEzLFxuICAgICAgMzJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRVpDWFlQTlpcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzI5Njk2NTA2MDoyMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIlJvc2VcIixcbiAgICBcImxpZFwiOiBcIjIzODQ4NzIzNjI2ODIyODoyMEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMRDBxK01FRUlqdTdyb0dHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImFJVXl6NDlpaUlvaFViV3V6K1V2ZDFUOWRoRGYySXk3UVo4em5YV1lPVzQ9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwidmo2bFd2aUdCc0h3ZHFSVjhneEhYZ1A1bUtPRW1vQy8vZ2ZwdGI0eUEzR3VnUWdkY2hoK0FLRWZkcEE0dkFMVmtkamhuSnJlcDZrM203NlhaRERYRFE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwia0w5TjZ1a2c0NTZmY3cxLy84Tmx4Sm1qRG90OFQwNHZXYVJ4SEszK3M4Vmg0a0ZXZzNuVXVCODNUOVY2azRVQUdNRXhFaHpFQXF2aVZNQi9MaTQ2aXc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMjk2OTY1MDYwOjIwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTEwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzQwNjM4ODQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFNTHlcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU1MeS5qc29uIjogIntcImtleURhdGFcIjpcInVpWXlIVjlPNFNvL3BicDFjSHo2NktDQkEvMTJMRk5LRHQzak1OQ25vNE09XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTI4MjA3OTI3OSxcImN1cnJlbnRJbmRleFwiOjMsXCJkZXZpY2VJbmRleGVzXCI6WzAsMSwyLDNdfSxcInRpbWVzdGFtcFwiOlwiMTczMzk3MDUyMzk0MlwifSIKfQ==
  
  "  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
