module.exports = (controller) => {
  const { bby } = require('bestbuy')(process.env.BB_API);

  controller.hears(async (message) => (message.quick_reply.payload === 'Movie'
    || message.quick_replies.payload === 'BlackTie'
    || message.quick_replies.payload === 'HardGood'
    || message.quick_replies.payload === 'Music'
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
                subtitle: ` ${data.products[i].salePrice}$`,
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
    }).catch((e) => e);
  });
};
