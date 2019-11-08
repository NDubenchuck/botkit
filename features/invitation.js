module.exports = (controller) => {
  const { back } = require ('./lib/menu_lib/variables');
  controller.hears('To invite a friend', 'message', async (bot, message) => {
    await bot.reply(message, `http://m.me/106625137409624?ref=${message.sender.id}`);
    await bot.reply(message, {
      text: 'Send this link to 3 friends & get one product free',
      quick_replies: back,
    });
  });
  controller.on('facebook_postback', async (bot, message) => {
    if (message.postback.title === 'To invite a friend') {
      await bot.reply(message, `http://m.me/106625137409624?ref=${message.sender.id}`);
      await bot.reply(message, {
        text: 'Send this link to 3 friends & get one product free',
        quick_replies: back,
      });
    }
  });
};
