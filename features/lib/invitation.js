module.exports = function (controller) {
  controller.hears('To invite a friend','message',  async(bot, message) => {
    
    await bot.reply(message,'You want to share Me with your friends!');
  })
};
