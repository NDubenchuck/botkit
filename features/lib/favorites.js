module.exports = (controller) => {
  controller.hears('favorites', 'message', async (bot, message) => {
    await bot.reply(message, 'You want to see Your favorite products!');
  });
};
