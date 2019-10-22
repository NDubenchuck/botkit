module.exports = function(controller) {
  controller.hears('My purchases','message',  async(bot, message) => {
    
    await bot.reply(message,'You want to see Your previous products!');
  })
};