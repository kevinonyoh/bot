const FormData = require('form-data');
const fs = require('fs');



function command(chat,data){
  let caption;
  let keyboard;
  let keyboardJSON;
  const formData = new FormData();

    
  switch (data) {
    case "/start":
          
          keyboard = [
            [{ text: 'Join Airdrop', callback_data: '/JoinGroup' }]
          ]

           keyboardJSON = JSON.stringify({ 'inline_keyboard': keyboard });

         

          caption = "Hello "+`${chat?.first_name}`+", I am your friendly TWT  Airdrop bot\n"+
          "\n"+
          "🔹 Earn 9,000 TWT (~$ 11,970) For Completing Tasks\n"+
          "🔹 Earn 100 TWT (~$ 133) For Each Refer\n"+
          "\n"+
          "📢 Airdrop Rules\n"+
          "\n"+
          "🔸 follow Our Twitter handle\n"+
          "🔹 follow Our Instagram handle\n"+
          "🔸 Join Our Telegram Group\n"+
          "🔹 Join Our Telegram Channel\n";
          "🔸 Refer at least 5 Friends\n"+
          "\n"+
          "Click On  '✅ Join Airdrop' For Procced";
            
          formData.append('chat_id', chat?.id);
          formData.append('photo', fs.createReadStream('./download.png'));
          formData.append('caption', caption);
          formData.append('reply_markup', keyboardJSON);


        return {
          formData,
          urlType: `sendPhoto`
        }

        break;
        
    case "/JoinGroup":
        caption =     "Let's proceed:\n"+
                     "🔸 follow Our Twitter handle\n"+
                     "🔹 follow Our Instagram handle\n"+
                     "🔸 Join Our Telegram Group\n"+
                     "🔹 Join Our Telegram Channel\n";
      keyboard = [
      [{ text: 'check ✅', callback_data: '/submit' }]
    ]

      keyboardJSON = JSON.stringify({ 'inline_keyboard': keyboard });

        formData.append('chat_id', chat?.id);
        formData.append('photo', fs.createReadStream('./image2.jpeg'));
        formData.append('caption', caption);
        formData.append('reply_markup', keyboardJSON);

        return {
          formData,
          urlType: `sendPhoto`
        }
        break;
    
    case "/submit":
    caption = "⬇️ Now Please Submit Your TWT ERC20 Wallet Address\n"+ 
              "Search 'TWT' in Trust wallet or Safepal , Copy receive address and paste it Here\n";
    formData.append('chat_id', chat?.id);
    formData.append('photo', fs.createReadStream('./image3.jpeg'));
    formData.append('caption', caption);
  
      return  {
        formData,
          urlType: `sendPhoto`
        }

      break;

    default:
        return "no command input"
        break;
  }
}

module.exports = command;









