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

    const chatId = req.body.hasOwnProperty("callback_query") ? req.body.callback_query.message.chat.id:  req.body.message.chat.id ;
    const text = req.body.hasOwnProperty("callback_query") ? req.body.callback_query.data :req.body.message.text;

   

    // const keyboard = [
    //     [{ text: 'testing', callback_data: '/testing' }],
    //     [{ text: 'start', callback_data: '/start' }]
    //   ]
    //   reply_markup: { inline_keyboard: keyboard }


     const {urlType, ...rest} = command(chatId, text);

     console.log(urlType, rest);

    await axios.post(`${TELEGRAM_API}/${urlType}`, rest);
    return res.send()
})

app.listen(process.env.PORT || 5000, async () => {
    console.log('🚀 app running on port', process.env.PORT || 5000)
    await init()
})