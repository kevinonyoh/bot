const FormData = require('form-data');
const fs = require('fs');



function command(chat,data){
    const {chat_id, first_name} = chat;

    const chatId = chat_id;

    const firstName = first_name;
    
  switch (data) {
    case "/start":
          const formData = new FormData();

          const caption = "Hello,"+` ${firstName}`+", I am your friendly TWT  Airdrop bot\n"+
          "\n"+
          "🔹 Earn 9,000 TWT (~$ 11,970) For Completing Tasks\n"+
          "🔹 Earn 100 TWT (~$ 133) For Each Refer\n"+
          "\n"+
          "📢 Airdrop Rules\n"+
          "\n"+
          "✏️ Mandatory Tasks:\n"+
          "🔹 Join our Telegram Group\n"+
          "🔹 Join our Telegram Channel\n"+
          "🔹 Refer at least 5 Friends\n"+
          "\n"+
          "Click On  '✅ Join Airdrop' For Procced";
            
          formData.append('chat_id', chatId);
          formData.append('photo', fs.createReadStream('./download.png'));
          formData.append('caption', caption);


        return {
          formData,
          urlType: `sendPhoto`
        }

        break;
        
    case "/testing":
        return  {
          chat_id: chatId,
          text: "Hello checking this out",
          urlType: `sendMessage`
         }
        break;
  
    default:
        return "no command input"
        break;
  }
}

module.exports = command;






// const keyboard = [
//         [{ text: 'testing', callback_data: '/testing' }]
//       ]

//       reply_markup: { inline_keyboard: keyboard }