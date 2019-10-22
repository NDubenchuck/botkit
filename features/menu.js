module.exports = function(controller) {
  let menu = [
    {
      title: 'My purchases',
      payload: 'my_purcases'
    },
    {
      title: 'Shop',
      payload: 'shop'
    },
    {
      title: 'Favorites',
      payload: 'favorites'
    },
    {
      title: 'To invite a friend',
      payload: 'invitation'
    }
  ];
  
  controller.on( 'facebook_postback', async(bot, message) => {
    
    if (message.text ==='menu'||'Menu'){
    await bot.reply(message, {
      text: 'Here is a menu!',
      quick_replies: menu
    })
    }
  });
  
  controller.hears( 'Menu', 'message', async(bot, message) => {
    
    await bot.reply(message, {
      text: 'Here is a menu!',
      quick_replies: menu
    });
  });
  
  controller.hears('Second','message',  async(bot, message) => {
    
    await bot.reply(message,'Here is a second button!');
  });
};