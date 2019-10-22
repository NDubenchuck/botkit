//  __   __  ___        ___
// |__) /  \  |  |__/ |  |  
// |__) \__/  |  |  \ |  |  

// This is the main file for the facebot bot.

// Import Botkit's core features
const { Botkit } = require('botkit');
const { BotkitCMSHelper } = require('botkit-plugin-cms');
const mongoose = require('mongoose');
const bby = require('bestbuy')('TGp7jkZIbKOzfRTDzkofjo2O');

// Import a platform-specific adapter for facebook.

const { FacebookAdapter, FacebookEventTypeMiddleware } = require('botbuilder-adapter-facebook');

const { MongoDbStorage } = require('botbuilder-storage-mongodb');

// Load process.env values from .env file
require('dotenv').config();

let storage = null;
if (process.env.MONGO_URI) {
    storage = mongoStorage = new MongoDbStorage({
        url : process.env.MONGO_URI,
    });
}


const adapter = new FacebookAdapter({

    verify_token: 'hello',
    access_token: 'EAAOIDTEqS4ABAFr2ZASHopoRWP4B1n3CEZBsIgyZCuo44ByFKzQcg3vEe7cecX7uO5iZCC1wZATFEZCKyWJsJiRX14ImEcs9npUNgZC77DxkwTHFydowkOhlCIFIcyDPKEbZCaVKZBWtPz1j2FWL9PGSEvOZAo7Mj9fPNHWqSNF60O02s7h4sKJJ6x',
    app_secret: 'de397373632beb4b6d04acb785f2e608',
});

// emit events based on the type of facebook event being received
adapter.use(new FacebookEventTypeMiddleware());


const controller = new Botkit({
    webhook_uri: '/api/messages',

    adapter: adapter,

    storage
});

if (process.env.cms_uri) {
    controller.usePlugin(new BotkitCMSHelper({
        uri: process.env.cms_uri,
        token: process.env.cms_token,
    }));
}

    // load traditional developer-created local custom feature modules
    controller.loadModules(__dirname + '/features');
    
    /* catch-all that uses the CMS to trigger dialogs */
    if (controller.plugins.cms) {
        controller.on('message,direct_message', async (bot, message) => {
            let results = false;
            results = await controller.plugins.cms.testTrigger(bot, message);
            
            if (results !== false) {
                // do not continue middleware!
                return false;
            }
        });
    }
    
    controller.hears('gr', function (bot, message) {
        bot.reply(message,
          {"greeting":[
                  {
                      "locale":"default",
                      "text":"Hello!"
                  }, {
                      "locale":"en_GB",
                      "text":"Add your text here."
                  }
              ]
          }
        )
    })
//     controller.api.messenger_profile.get_started('sample_get_started_payload');
//     controller.api.messenger_profile.menu([{
//         "locale":"default",
//         "composer_input_disabled":true,
//         "call_to_actions":[
//             {
//                 "title":"My Skills",
//                 "type":"nested",
//                 "call_to_actions":[
//                     {
//                         "title":"Hello",
//                         "type":"postback",
//                         "payload":"Hello"
//                     },
//                     {
//                         "title":"Hi",
//                         "type":"postback",
//                         "payload":"Hi"
//                     }
//                 ]
//             },
//             {
//                 "type":"web_url",
//                 "title":"Botkit Docs",
//                 "url":"https://github.com/howdyai/botkit/blob/master/readme-facebook.md",
//                 "webview_height_ratio":"full"
//             }
//         ]
//     },
//         {
//             "locale":"zh_CN",
//             "composer_input_disabled":false
//         }
//     ]);
// });
    
    
    controller.webserver.get('/', (req, res) => {
        
        res.send(`This app is running Botkit ${controller.version}.`);
        
    })



