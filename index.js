
const TelegramBot = require('node-telegram-bot-api');

const token = '6780554052:AAFPLRUH6UHn6y8Yd2eIMs4Mh9adVlJU_jE';


const bot = new TelegramBot(token, {polling: true});

bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    const keyboard = {
      inline_keyboard: [
        [
          { text: 'Button 1', callback_data: 'button1' },
          { text: 'Button 2', callback_data: 'button2' }
        ],
        [
          { text: 'Button 3', callback_data: 'button3' }
        ]
      ]
    };
  
    bot.sendMessage(chatId, 'Choose a button:', {
      reply_markup: JSON.stringify(keyboard)
    });
  });