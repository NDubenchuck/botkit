module.exports = (controller) => {
  const { menu } = require ('./lib/menu_lib/variables');
  // const createUser = require('./db_lib/create_user');

  controller.hears('Return', 'message', async (bot, message) => {
    // createUser(message.user);
    await bot.reply(message, {
      text: 'Here is a menu!',
      quick_replies: menu,
    });
  });
  controller.hears('More', 'message', async (bot, message) => {
    // createUser(message.user);
    await bot.reply(message, {
      text: 'Here is a menu!',
      quick_replies: menu,
    });
  });
  controller.on('facebook_postback', async (bot, message) => {
    if (message.postback.title === 'Main menu') {
      // createUser(message.user);
      await bot.reply(message, {
        text: 'Here is a menu!',
        quick_replies: menu,
      });
    }
  });
  controller.loadModules(__dirname + '/lib');
};
