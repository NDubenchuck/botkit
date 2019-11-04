module.exports = (controller) => {
  const shop_menu = [
    {
      title: 'Music',
      payload: 'music',

    },
    {
      title: 'Movie',
      payload: 'Movie',
    },
    {
      title: 'Hard Good',
      payload: 'HardGood',
    },
    {
      title: 'Black Tie',
      payload: 'BlackTie',
    },
  ];

  controller.hears('shop', 'message', async (bot, message) => {
    await bot.reply(message, {
      text: 'Choose category or type your own',
      quick_replies: shop_menu,
    });
  });

  const bby = require('bestbuy')(process.env.BB_API);

  controller.hears(async (message) => await (message.quick_replies.payload === 'Music' || message.quick_replies.payload === 'HardGood' || message.quick_replies.payload === 'BlackTie' || message.quick_replies.payload === 'Movie'
  ), 'message', async (bot, message) => {
    await bby.products(`type="${message.quick_reply.payload}"`, { show: 'image,name,salePrice' }).then((data) => {
      for (let i = 0; i < 5; i += 1) {
        const attachment = {
          type: 'template',
          payload: {
            template_type: 'generic',
            elements: [
              {
                title: ` ${data.products[i].name}`,
                image_url: ` ${data.products[i].image}`,
                subtitle: ` ${data.products[i].salePrice}\$`,
                buttons: [
                  {
                    type: 'postback',
                    title: 'Buy',
                    payload: 'buy',
                  },
                  {
                    type: 'postback',
                    title: 'Add to favorite',
                    payload: 'add-to-favorite',
                  },
                ],
              },
            ],
          },
        };
        bot.reply(message, { attachment });
      }
    });
  });
};
