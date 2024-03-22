const fs = require('fs'); 

function command(chatId,data){

    
  switch (data) {
    case "/start":
         const localFile = fs.readFileSync("./download.png");

        return {
           chat_id: chatId,
           document: localFile,
           caption: "Hello, there. Earn 4000 TWT airdrop token",
           urlType: `sendPhoto`,
           headers: {
            'Content-Type': 'multipart/form-data' 
          }  
        }

        break;
    case "/testing":
        return  {
          chat_id: chatId,
          text: "Hello checking this out",
          urlType: `sendMessage`,
          headers: {
            'Content-Type': 'application/json'
          }
         }
        break;
  
    default:
        return "no command input"
        break;
  }
}

module.exports = command;




