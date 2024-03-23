require('dotenv').config()
const express = require('express')
const axios = require('axios')
const bodyParser = require('body-parser')
const command = require("./command");

const { TOKEN, SERVER_URL } = process.env
const TELEGRAM_API = `https://api.telegram.org/bot${TOKEN}`
const URI = `/webhook/${TOKEN}`
const WEBHOOK_URL = SERVER_URL + URI

const app = express()
app.use(bodyParser.json())

const init = async () => {
    const res = await axios.get(`${TELEGRAM_API}/setWebhook?url=${WEBHOOK_URL}`)
    console.log(res.data)
}

app.post(URI, async (req, res) => {

     console.log(req.body);

     if (req.body.hasOwnProperty("my_chat_member")) {
        console.log("Ignoring my_chat_member update (bot was kicked)");
        return;  
      }
      

    const chat = req.body.hasOwnProperty("callback_query") ? req.body.callback_query.message.chat:  req.body.message.chat ;
    const text = req.body.hasOwnProperty("callback_query") ? req.body.callback_query.data :req.body.message.text;

   

    


    const { urlType, ...rest} = command(chat, text);
  
    

    try {
        
        if(urlType === `sendPhoto`){
            
            const {formData} = rest;
            
            await axios.post(`${TELEGRAM_API}/sendPhoto`, formData, { headers: formData.getHeaders(), });

        }else if(urlType === `sendMessage`){

            await axios.post(`${TELEGRAM_API}/sendMessage`, rest );

        }
       
    } catch (err) {
        console.error("Error calling Telegram API:", err.message);   
    }

    
      
    return res.send()
})

app.listen(process.env.PORT || 5000, async () => {
    console.log('🚀 app running on port', process.env.PORT || 5000)
    await init()
})