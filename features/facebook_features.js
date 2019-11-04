/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

module.exports = (controller) => {
  /**
     * Detect when a message has a sticker attached
     */
  controller.hears(async (message) => message.sticker_id, 'message', async (bot, message) => {
    await bot.reply(message, 'Cool sticker.');
  });

  controller.hears(['куку', 'hi', 'hello', 'howdy', 'hey', 'aloha', 'hola', 'bonjour', 'oi'], ['message'], async (bot, message) => {
    // do something to respond to message
    await bot.reply(message, 'Oh hai! I am a Bot! Can I help You?');
  });
};
