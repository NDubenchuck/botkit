/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

module.exports = function(controller) {

    controller.on('message,direct_message', async(bot, message) => {
        await bot.reply(message, `I heared \'${ message.text }\', but I dont undestend, what you mean. Sorry(`);
    });

};
