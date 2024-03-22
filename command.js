const FormData = require('form-data');
const fs = require('fs');



function command(chatId,data){

    
  switch (data) {
    case "/start":
          const formData = new FormData();
            
          formData.append('chat_id', chatId);
          formData.append('photo', fs.createReadStream('./download.png'));
          formData.append('caption', "Hello, there, welcome to TWT token airdrop Bot");

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




