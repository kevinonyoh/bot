const FormData = require('form-data');
const fs = require('fs');



function command(chat,data){
    
    
  switch (data) {
    case "/start":
          const formData = new FormData();

         const keyboard = [
            [{ text: 'Join Group', callback_data: '/JoinGroup' }]
          ]

         

          const caption = "Hello "+`${chat?.first_name}`+", I am your friendly TWT  Airdrop bot\n"+
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
            
          formData.append('chat_id', chat?.id);
          formData.append('photo', fs.createReadStream('./download.png'));
          formData.append('caption', caption);
          // formData.append('reply_markup', { inline_keyboard: keyboard });


        return {
          formData,
          urlType: `sendPhoto`
        }

        break;
        
    case "/testing":
        return  {
          chat_id: chat?.id,
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






