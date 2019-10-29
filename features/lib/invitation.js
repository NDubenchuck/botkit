module.exports = function (controller) {
  controller.hears('To invite a friend','message',  async(bot, message) => {
    // let menu = [
    //   {
    //     title: 'My purchases',
    //     payload: 'my_purchases'
    //   },
    //   {
    //     title: 'Shop',
    //     payload: 'shop'
    //   },
    //   {
    //     title: 'Favorites',
    //     payload: 'favorites'
    //   },
    //   {
    //     title: 'To invite a friend',
    //     payload: 'invitation'
    //   }
    // ];
    let back =[
      {
        title: 'Return',
        payload: 'menu'
      }
    ];
    await bot.reply(message, `http://m.me/106625137409624?ref=${message.sender.id}`);
    await bot.reply(message,  {
      text: "Send this link to 3 friends & get one product free",
      quick_replies: back
    });

  });
  controller.on('Return', 'message',  async(bot, message) => {
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
    await bot.reply(message, {
      text: "Send this link to 3 friends & get one product free",
      quick_replies: menu
    });
  } )
  
};