const fs = require('fs');
const client = require("./redisConfig");
const commandFuntions = require("./functions");



async function command(chat,data){
 
    
  switch (data) {
    case "/start":
        
      return  await commandFuntions.startFuntion(chat);

        break;
        
    case "/JoinGroup":
          return await commandFuntions.JoinGroupFunction(chat);
        break;
    
    case "/submit":
          return await commandFuntions.submitWallet(chat);
      break;
    
    case "/Withdraw":
         return await commandFuntions.withdrawFunction(chat);
         break;
    
    case "/eth":
      return await commandFuntions.ethGasFee(chat);
      break;
    
    case "/trx":
      return await commandFuntions.trxGasFee(chat);
      break;
    
    case "/bnb":
      return await commandFuntions.bnbGasFee(chat);
      break;
    
    case "/error": 
        return await commandFuntions.errorMessage(chat);
        break;

    default:
         
        const walletAddress = data.toLowerCase();

         if(walletAddress.includes("wallet")){
         
          return await commandFuntions.submitWalletComplete(chat);

         } else {
          let val = "❌ Unknown Command! \n\n"+
                    "You have send a Message directly into the Bot's chat or \n"+
                    "Menu structure has been modified by Admin. \n"+
                    "ℹ️ Do not send Messages directly to the Bot or"+
                    "reload the Menu by pressing /start"

           return {
            chat_id: chat?.id,
            text: val,
            urlType: 'sendMessage'
           }
         }
        break;
  }
}

module.exports = command;









