module.exports.config = {
	name: "معلومات",
	version: "1.0.1", 
	hasPermssion: 0,
	credits: "Arun Kumar", //don't change the credits please
	description: "معلومات عن ادمن البوت.",
	commandCategory: "معلومات",
	cooldowns: 1,
	dependencies: 
	{
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Kolkata").format("『D/MM/YYYY』 【HH:mm:ss】");
var link =                                     
["https://i.postimg.cc/4yVw6tm7/Picsart-23-03-26-11-08-19-025.jpg", "https://i.imgur.com/rg0fjQE.jpg", "https://i.imgur.com/QcNXYfT.jpg", "https://i.imgur.com/WhVSHLB.png"];
var callback = () => api.sendMessage({body:`🌹معلومات عن البوت و المطور🇩🇿


☄️𝗕𝗢𝗧 𝗡𝗔𝗠𝗘☄️ ⚔ ${global.config.BOTNAME} ⚔

🔥صنع🔥☞︎︎︎ ﹾ٭ﹾ٭ﺂلہٰٰﹻﹻﹻ٭ٰ۫ﹻﹻز ﻋﯿٰٰﹻﹻ٭ٰ۫ﹻٰ۫ﹻﹻمٰٰ۪۪۫۫ﹾ٭ﹾ٭ ☜︎︎︎✰ \n\n
🙈🄾🅆🄽🄴🅁 🄲🄾🄽🅃🄰🄲🅃 🄻🄸🄽🄺🅂🙈➪ \n\n  𝗙𝗔𝗖𝗘𝗕𝗢𝗢𝗞 🧨www.facebook.com/100000509323420 💞🕊️
  \n 
✅𝗜𝗡𝗦𝗧𝗔𝗚𝗥𝗔𝗠 𝗨𝗦𝗘𝗥𝗡𝗔𝗠𝗘👉 @Darkfeiro \n\n  ====𝗧𝗼 𝗹𝗲𝗮𝗿𝗻 𝗛𝗼𝘄 𝘁𝗼 𝗖𝗿𝗲𝗮𝘁𝗲 𝗔 𝗯𝗼𝘁\n
✧══════•❁❀❁•══════✧

🌸𝗕𝗼𝘁 𝗣𝗿𝗲𝗳𝗶𝘅🌸☞︎︎︎☜︎︎︎✰ ${global.config.PREFIX}

🥳UPTIME🥳

🌪️Today is🌪️ ☞︎︎︎☜︎︎︎✰ ${juswa} 

⚡Bot is running⚡ ${hours}:${minutes}:${seconds}.

✅مرحبا بكم جميعا احسنو استعمال بوت❤ ${global.config.BOTNAME} 🖤

`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname + "/cache/juswa.jpg")).on("close",() => callback());
   };
