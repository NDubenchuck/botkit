/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
module.exports = (controller) => {
  controller.on('facebook_postback', (bot, message) => {
    const createUser = require('./db_lib/create_user');
    const { more } = require ('./lib/menu_lib/variables');
    if (message.postback.title === 'Get Started') {
      createUser(message.sender.id);
      bot.reply(message, {
        text: 'Look to Up and enjoy.',
        quick_replies: more,
      });
    }
  });
  controller.on('facebook_referral', async (bot, message) => {
    await bot.reply(message, `sender.id: ${message.sender.id }`);
    await bot.reply(message, `recipient.id: ${message.recipient.id }`);
    await bot.reply(message, `user.id: ${message.user}`);
  });
};
