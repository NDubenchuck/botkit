module.exports = (controller) => {
  controller.hears('To invite a friend', 'message', async (bot, message) => {
    // try {
    const back = [
      {
        title: 'Return',
        payload: 'menu',
      },
    ];
    await bot.reply(message, `http://m.me/106625137409624?ref=${message.sender.id}`);
    await bot.reply(message, {
      text: 'Send this link to 3 friends & get one product free',
      quick_replies: back,
    });
    // } catch (e) {
    //   console.error(`${ e }`);
    // }
  });
};
