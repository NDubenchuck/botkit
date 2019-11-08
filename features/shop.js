module.exports = (controller) => {
  const { shopMenu } = require('./lib/menu_lib/variables');
  controller.hears('Shop', 'message', async (bot, message) => {
    await bot.reply(message, {
      text: 'Type your own category like "Cat: ...." or choose default',
      quick_replies: shopMenu,
    });
  });
  controller.on('facebook_postback', async (bot, message) => {
    if (message.postback.title === 'Shop') {
      await bot.reply(message, {
        quick_replies: shopMenu,
      });
    }
  });
  controller.hears([new RegExp(/^( )*?cat:/igm), 'Movie'], ['message', 'direct_message'],
    async (bot, message) => {
      const checkCategory = require('./check_lib/check_category');
      if (checkCategory(message.text)) {
        // const bby = require('bestbuy')(process.env.BB_API);

        const bby = require('./bb_lib/bb_connection');
        await bby.products(`search=${checkCategory(message.text)}&`, { show: 'image,name,salePrice,sku', page: 1, pageSize: 4 })
          .then(async (data) => {
            console.log(data);
            const { addFavorite } = require('./lib/menu_lib/atachments');
            for (let i = 0; i < data.products.length; i += 1) {
              const prod = addFavorite(data.products[i].name, data.products[i].image,
                data.products[i].salePrice, data.products[i].sku);
              await bot.reply(message, { attachment: prod });
            }
          });
      }
    });
};
