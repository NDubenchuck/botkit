module.exports = function(controller) {

controller.hears('shop','message',  async(bot, message) => {
  
  await bot.reply(message,'You are going to Our shop!');
})
};