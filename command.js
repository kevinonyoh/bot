const FormData = require('form-data');
const fs = require('fs');



function command(chatId,data){

    
  switch (data) {
    case "/start":
          const formData = new FormData();
            
          formData.append('chat_id', chatId);
          formData.append('photo', fs.createReadStream('./download.png'));
          formData.append('caption', 
              `Hello, Hsaka_trade 👋 , I am your friendly TWT  Airdrop bot

            🔹 Earn 9,000 TWT (~$ 11,970) For Completing Tasks
            🔹 Earn 100 TWT (~$ 133) For Each Refer
              
            📢 Airdrop Rules
              
            ✏️ Mandatory Tasks :
            🔹 Join our Telegram Group 
            🔹 Join our Telegram Channel 
            🔹 Refer at least 5 Friends
              
            Click On  "✅ Join Airdrop" For Procced`);


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




