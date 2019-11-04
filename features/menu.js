module.exports = function(controller) {
  const menu = [
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
  let createUser = require('./db_lib/create_user');
  
  // controller.on( 'facebook_postback', (bot, message) => {
  //   // try {
  //     if (message.text ==='Main menu'||
  //       message.text ==='main menu' ||
  //       message.text ==='Return'){
  //       createUser(message.sender.id);
  //        bot.reply(message, {
  //          text: 'Here is a menu!',
  //          quick_replies: menu
  //        }).catch(e  => console.log(e))
  //     } else if (message.text ==='List of products'){
  //       bot.reply(message, 'List of products');
  //     }
  //   // } catch (e) {
  //   //   console.error(`${e}`);
  //   // }
  //
  // });
  controller.hears(async (message) => {
    try {
      return await message.quick_reply.payload==='menu';
    } catch (e) {
      console.error(`${e}`);
    }
  }, 'message', async (bot, message) => {
    try {
      await bot.reply(message, {
        text: 'Here is a menu!',
        quick_replies: menu
      });
    } catch (e) {
      console.error(`${e}`);
    }

  });
  
  controller.on( 'facebook_postback', async (bot, message) => {
    try {
      if (message.postback.title === 'Main menu'||message.postback.title ==='More') {
        createUser(message.sender.id);
        await bot.reply(message, {
          text: 'Here is a menu!',
          quick_replies: menu
        })
      
      }
    } catch (e) {
      console.log(e);
    }
  });
  
  // controller.on( 'facebook_postback', (bot, message) => {
  //   // try {
  //   if (message.postback.title ==='More'){
  //     // createUser(message.sender.id);
  //     bot.reply(message, {quick_replies: menu})
  //   } } );
  
  
  controller.loadModules(__dirname + '/lib');
  // controller.loadModules(__dirname + '/bb_lib');
  
};