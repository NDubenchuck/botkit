module.exports = function(controller) {
  let menu = [
    {
      title: 'My purchases',
      payload: 'my_purchases'
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
  
  let createUser = require('./db/create_user');
  
  controller.on( 'facebook_postback', async(bot, message) => {
    if (message.text ==='Main menu'||'main menu' || 'Return'){
      createUser(message.sender.id);
      await bot.reply(message, {
      text: 'Here is a menu!',
      quick_replies: menu
    })
    } else if (message.text ==='List of products'){
      await bot.reply(message, 'List of products')
    }
  });
  controller.hears(async(message) => { return (message.quick_reply.payload=='menu') }, 'message', async(bot, message) => {
    await bot.reply(message, {
      text: 'Here is a menu!',
      quick_replies: menu
    });
  });
  
  
  controller.loadModules(__dirname + '/lib');
};